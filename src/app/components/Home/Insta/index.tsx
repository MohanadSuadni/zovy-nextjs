'use client'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'

const Insta = () => {
  const [open, setOpen] = useState(false)
  const [currentSlides, setCurrentSlides] = useState<
    { src: string; title?: string; description?: string }[]
  >([])

  // Glavne slike i naslovi
  const mainImages = [
    { src: '/images/insta/GridArt_20251018_234842076 (1).jpg', title: 'Instalacija kompletne mrežne infrastrukture za stan i kuću' },
    { src: '/images/insta/GridArt_20251016_092958713 (1).jpg', title: 'Postojeća infrastruktura i nova gradnja' },
    { src: '/images/insta/main4.png', title: 'Završna provera i puštanje u rad' },
  ]

  // Svaka grupa sa po 4 slike i opisom
  const lightboxGroups = [
    [
      { src: '/images/insta/nepostoj1.jpg', title: 'Set 1 - slika 1', description: '3m kanalica montirana uz lajsnu i zid, potpuno nevidljiva nakon završne ugradnje.' },
      { src: '/images/insta/nepostoj2.jpg', title: 'Set 1 - slika 2', description: '3m kanalica montirana uz lajsnu i zid, potpuno nevidljiva nakon završne ugradnje.' },
      { src: '/images/insta/nepostoj3.jpg', title: 'Set 1 - slika 3', description: 'Povezivanje uređaja' },
      { src: '/images/insta/set1-4.jpg', title: 'Set 1 - slika 4', description: 'Završni pregled instalacije' },
    ],
    [
      { src: '/images/insta/postoj1.jpg', title: 'Set 2 - slika 1', description: 'Postojeća infrastruktura' },
      { src: '/images/insta/postoj2.jpg', title: 'Set 2 - slika 2', description: 'Postojeća infrastruktura' },
      { src: '/images/insta/postoj3.jpg', title: 'Set 2 - slika 3', description: 'nova gradnja' },
      { src: '/images/insta/postoj4.jpg', title: 'Set 2 - slika 4', description: 'nova gradnja' },
    ],
    [
      { src: '/images/insta/set3-1.jpg', title: 'Set 3 - slika 1', description: 'Podešavanje modema' },
      { src: '/images/insta/set3-2.jpg', title: 'Set 3 - slika 2', description: 'Provera Wi-Fi konekcije' },
      { src: '/images/insta/set3-3.jpg', title: 'Set 3 - slika 3', description: 'Analiza brzine interneta' },
      { src: '/images/insta/set3-4.jpg', title: 'Set 3 - slika 4', description: 'Izveštaj o performansama' },
    ],
    [
      { src: '/images/insta/set4-1.jpg', title: 'Set 4 - slika 1', description: 'Povezivanje TV uređaja' },
      { src: '/images/insta/set4-2.jpg', title: 'Set 4 - slika 2', description: 'Instalacija aplikacija' },
      { src: '/images/insta/set4-3.jpg', title: 'Set 4 - slika 3', description: 'Podešavanje profila' },
      { src: '/images/insta/set4-4.jpg', title: 'Set 4 - slika 4', description: 'Završna provera sistema' },
    ],
  ]

  return (
    <section id='instalacije'>
      <section className='container mx-auto max-w-7xl pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {mainImages.map((item, i) => (
            <div key={i} className='text-center'>
              <div
                className='relative group overflow-hidden rounded-3xl cursor-pointer aspect-square'
                onClick={() => {
                  // postavi slides sa title + description
                  setCurrentSlides(lightboxGroups[i])
                  setOpen(true)
                }}
              >
                <Image
                  src={item.src}
                  width={400}
                  height={400}
                  alt={item.title}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
            
                </div>
              </div>
              <h3 className='mt-3 text-lg font-semibold text-gray-800'>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Captions plugin je uključen ovde */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={currentSlides}
        plugins={[Captions]}
      />
    </section>
  )
}

export default Insta
