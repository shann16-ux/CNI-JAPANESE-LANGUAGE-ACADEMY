import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // CORS middleware for the API
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", resendConfigured: !!resend });
  });

  // Professional Contact API
  app.post("/api/send", async (req, res) => {
    console.log("Professional Lead Capture - Inquiry Received:", req.body);
    const { name, email, phone, subject, message } = req.body;

    if (!resend) {
      return res.status(500).json({ error: "Email service not configured." });
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'CNI Academy <onboarding@resend.dev>',
        to: ['cnijapanese@gmail.com'],
        subject: `New Student Inquiry: ${name}`,
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
            <div style="background-color: #E60012; padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px; letter-spacing: 1px;">STUDENT INQUIRY</h1>
            </div>
            <div style="background-color: #f9f9f9; padding: 40px; border: 1px solid #eee; border-top: none; border-radius: 0 0 12px 12px;">
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                A new lead has been captured from the CNI Japanese Language Academy website. Detailed information is provided below:
              </p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 35%;">Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <a href="mailto:${email}" style="color: #E60012; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">Inquiry Subject</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${subject}</td>
                </tr>
              </table>
              <div style="margin-top: 30px;">
                <p style="font-weight: bold; margin-bottom: 10px;">Student's Message:</p>
                <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #eee; font-style: italic;">
                  "${message}"
                </div>
              </div>
              <p style="font-size: 12px; color: #999; margin-top: 40px; text-align: center;">
                This inquiry was generated automatically via cnijapanese.com
              </p>
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend API Error:", error);
        return res.status(400).json({ error: error.message });
      }

      res.status(200).json({ success: true, data });
    } catch (err) {
      console.error("Critical Server Error:", err);
      res.status(500).json({ error: "External API connection failed." });
    }
  });

  // Legacy route redirect or duplicate
  app.post("/api/contact", (req, res) => {
    res.redirect(307, "/api/send");
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
