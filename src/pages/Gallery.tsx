import { motion } from "motion/react";

const galleryImages = [
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/e0ad5dd3-bcb1-412d-f925-b41e7b094c00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/7b7321ad-0f9e-431f-ba2f-6cd337126c00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/ee3d809a-b5f5-43f6-872a-8e5fb7ceef00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/c3b7e52c-30e6-4e2f-0085-1ac2e3efb700/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/ec05191c-adba-4fe7-8fe8-7653dd856100/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/7546bbf9-e092-4b75-ac03-9941668ea900/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/dedce014-957d-4934-7fca-5652bb309b00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/7d625110-99bb-4c86-e32f-66ba91127b00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/de28c285-f7f6-44ff-ac2e-e46bb51c4100/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/1d52ddb9-a53b-4b45-75ab-da74303b5800/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/70ee1e00-1af8-4828-1601-0504ce795000/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/d05c92aa-012f-417c-b18c-ceb893b5be00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/0eb0f73c-9f34-4f49-3ec1-97e3780b0f00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/f2b95e76-1735-4893-3312-b67db402db00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/55b46cd0-432e-4c83-65e2-5866eab17400/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/9a20952b-5700-4275-2850-45acddf5f600/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/c57381d0-c929-474a-8497-f6e06f747c00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/edc8092f-63ec-411a-e521-884fb3ca1d00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/68c0fb78-7f31-4f7b-d17d-567036aa9900/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/febe7f52-5137-4d60-ac68-6149f9a01100/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/eb75d627-6c39-4c6f-77c4-351104fd1300/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/7b4a5c2c-e2af-4c72-1eea-be0ba3dbb000/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/9a199152-0869-4476-ab2b-69462ca50c00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/d90d5a2f-834c-42ce-6f73-d6d51107b400/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/129122da-caac-4ee3-142c-de4a6770cf00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/246cf490-f52a-4cc1-01e8-76ae64e52300/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/e7400313-6f34-4123-2d18-019383bf4b00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/4ab3c16a-d72a-4241-4ea7-50b9f2e04600/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/7e5076e8-28ee-4ea6-5611-0caf27d37e00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/cf0265dc-2099-4e82-50b8-fdf8a7a6f700/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/6947cb83-adf5-4ac2-ffc7-d9fe2d1cfc00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/0be5677d-03f5-45bc-752b-9b887162e000/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/b50cea0a-37f7-4dd2-8704-1ecd7f540e00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/bc6cf33f-67ed-4b87-c62a-e25870712000/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/b2398cbd-db89-47cf-14de-69f6e91f7a00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/c6b8d657-e532-4eec-361c-ddd0a1fa4200/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/1adb0f1f-9c33-4192-18a3-a56a17891e00/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/6393b361-8ecc-4014-baeb-7807d9d71500/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/a952b6bb-b50e-4557-9d54-2caa87c13400/public",
  "https://imagedelivery.net/el9pEPAD6kV02rsnFsj9dg/10b69dab-b1a8-4563-d62f-fdad6ed25f00/public",
];

export default function Gallery() {
  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-japan-red mb-4 block">Visual Journey</span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-black mb-8">Gallery</h1>
          <p className="text-xl text-black/40 font-medium max-w-2xl mx-auto">
            Explore the moments, celebrations, and learning experiences at CNI Japanese Language Academy.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="break-inside-avoid rounded-3xl overflow-hidden border border-black/5 bg-gray-50 group cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
