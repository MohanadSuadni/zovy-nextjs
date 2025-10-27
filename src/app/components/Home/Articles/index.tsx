'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { articles } from '@/app/types/articles'
import ArticlesSkeleton from '../../Skeleton/Articles'
import { motion, AnimatePresence } from 'framer-motion'

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  autoplay: false,
  speed: 500,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const Articles = () => {
  const [articles, setArticles] = useState<articles[]>([])
  const [loading, setLoading] = useState(true)
  const [showInfo, setShowInfo] = useState(false)
  const [infoText, setInfoText] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setArticles(data.ArticlesData)
      } catch (error) {
        console.error('Error fetching articles:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const openModal = (text: string) => {
    setInfoText(text)
    setShowInfo(true)
  }

  return (
    <section id='tv' className='relative bg-grey overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <div className='text-center mb-8'>
          <p className='text-primary text-xl font-normal tracking-widest'>
            Ponuda televizora
          </p>
          <h2 className='text-4xl font-bold'>Smart TV na 24 rate!</h2>
        </div>

        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <ArticlesSkeleton key={i} />)
            : articles.map((item, i) => (
                <div key={i}>
                  <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-4xl relative' >
                    <Image
                      src={item.imgSrc}
                      alt={item.heading}
                      width={389}
                      height={262}
                      className='inline-block m-auto rounded-3xl'
                    />
                    <h5 className='font-bold pt-6'>{item.heading}</h5>
                    <h5 className='font-bold pt-1 text-gray-700'>
                      {item.heading2}
                    </h5>

                    <div className='pt-4'>
                      <h3
                        onClick={() =>
                          openModal(
                            item.nameText || 'Nema dodatnih informacija za ovaj model.'
                          )
                        }
                        className='text-sm font-normal pt-6 pb-2 text-black/75 dark:text-white/75 cursor-pointer hover:text-primary transition'
                      >
                        {item.name}
                      </h3>
                      <h3
                        onClick={() =>
                          openModal(
                            item.dateText || 'Nema dodatnih informacija o garanciji.'
                          )
                        }
                        className='text-sm font-normal pb-1 text-black/75 dark:text-white/75 cursor-pointer hover:text-primary transition'
                      >
                        {item.date}
                      </h3>

                      <p className='pt-2'>
                        <span className='text-lg font-semibold'>
                          {item.cena}
                        </span>{' '}
                        mesečno
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </Slider>
      </div>

      {/* Modal sa tekstualnim informacijama */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='bg-white dark:bg-neutral-900 p-6 rounded-2xl max-w-md mx-4 text-center shadow-xl'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className='text-xl font-bold mb-4 text-primary'>Informacije</h2>
              <p className='text-sm text-gray-700 dark:text-gray-300'>
                {infoText}
              </p>
              <button
                onClick={() => setShowInfo(false)}
                className='mt-6 bg-primary text-white px-5 py-2 rounded-xl hover:bg-primary/80 transition'
              >
                Zatvori
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Articles