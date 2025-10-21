'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const [showModal, setShowModal] = useState(false)

  const aboutText = `Zovy doo – Yettel retail partner.

Zovy Doo firma posluje od 2016. godine sa sedištem u Vranju, na adresi Sime Pogačarevića 48.
Mi smo Yettelov regionalni retail partner i bavimo se prodajom telekomunikacione robe i usluga.
Ističemo se dobrom radnom etikom, korektnošću i poštovanjem svih dogovora.

Naša misija je da pružimo kvalitetnu uslugu i maksimalnu podršku korisnicima,
uz stalno praćenje modernih trendova i potreba tržišta.

Svakodnevno se suočavamo sa izazovima savremenog poslovanja —
visokim troškovima, niskim maržama i brzom promenom tehnologije.
Zato se trudimo da budemo efikasni, fleksibilni i uvek korak ispred.

Ključ našeg uspeha:
• Osluškivanje tržišta  
• Stalna komunikacija sa klijentima  
• Prilagođavanje Vašim potrebama  
• Neprekidan rast i unapređenje rada  

Zovy doo – Vaš pouzdan partner u telekomunikacijama.`

  return (
    <section className="relative overflow-hidden z-1">
      <div className="container mx-auto pt-24 max-w-7xl px-4">
        <div className="grid grid-cols-12 justify-center items-center">
          {/* Levi deo */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="col-span-12 xl:col-span-5 lg:col-span-6"
          >
            <div className="py-2 px-5 bg-primary/15 rounded-full w-fit">
              <p className="text-primary text-lg font-bold">O NAMA</p>
            </div>

            <h4 className="mt-2 text-3xl font-semibold leading-snug">
              Zovy doo – <span className="text-green-500">Yettel</span> retail partner
            </h4>

            <p className="mt-4 text-gray-700 text-lg">
              Na tržištu smo od 2016. godine, sa ciljem da pružimo vrhunsku uslugu i iskustvo korisnicima širom regiona.
            </p>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowModal(true)}
                className="bg-primary text-white text-lg md:text-xl font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-darkmode hover:scale-105 transition-all duration-200"
              >
                Saznaj više
              </button>
            </div>
          </motion.div>

          {/* Desni deo */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="xl:col-span-7 lg:col-span-6 lg:block hidden"
          >
          <div className="flex justify-center items-center">
  <Image
    src="/images/hero/se-circle.png"
    alt="banner image"
    width={600}
    height={300}
    className="opacity-40 rounded-xl"
  />
</div>
          </motion.div>
        </div>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[2147483647] backdrop-blur-md bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 md:p-10 relative custom-scrollbar"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Dugme za zatvaranje */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-4xl font-bold"
              >
                &times;
              </button>

              {/* Naslov */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary">
                O nama
              </h2>

              {/* Tekst */}
              <div className="text-lg leading-relaxed whitespace-pre-wrap bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-inner">
                {aboutText}
              </div>

              {/* Dugme Zatvori */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-darkmode hover:scale-105 transition-all duration-200"
                >
                  Zatvori
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero