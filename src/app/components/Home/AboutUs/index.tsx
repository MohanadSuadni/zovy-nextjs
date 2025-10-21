'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import AboutSkeleton from '../../Skeleton/AboutUs'

const Aboutus = () => {
  // fetch about data
  const [about, setAbout] = useState<aboutdata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setAbout(data.Aboutdata)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='About' className=' bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4 relative z-1'>
        <div className='p-12 bg-grey rounded-3xl'>
          <Image
            src='/images/aboutus/dots.svg'
            width={100}
            height={100}
            alt='dots-image'
            className='absolute bottom-1 -left-20'
          />
          <p className='text-center text-primary text-lg tracking-widest uppercase mt-10'>
           O NAMA



          </p>
          <h4 className='text-center pb-3'>Zovy doo – Yettel retail partner</h4>

    <p className='text-left    mt-10'>
       Zovy Doo posluje od 2016. godine sa sedištem u Vranju, na adresi Sime Pogačarevića 48. Mi smo Yettelov regionalni retail partner, i bavimo se prodajom telekomunikacione robe i usluga.

Ističemo se dobrom radnom etikom, korektnošću i poštovanjem svih dogovora. Prilagođavamo se Vašim željama i potrebama, nudeći stručna rešenja i savete kako biste lakše doneli pravi izbor iz naše bogate ponude.

Naše bogato iskustvo i praćenje savremenih standarda omogućava nam da pružimo kvalitetnu i pouzdanu uslugu, u skladu sa zahtevima modernog tržišta.

Naša poslovna filozofija

Svet u kome živimo donosi svakodnevne izazove: visoke troškove poslovanja, jaku konkurenciju i stalne promene na tržištu. Da bismo bili uspešni, fokusiramo se na:

Stalno osluškivanje tržišta

Aktivnu komunikaciju sa klijentima

Razumevanje Vaših potreba i želja

Neprekidno unapređivanje naših usluga i ponude

Naša strategija je da se stalno razvijamo, rastemo i prilagođavamo, kako bismo Vam pružili najbolja rešenja i ispunili sve Vaše zahteve.
 Prilagođavanje naše ponude Vašim potrebama.

          </p>

         
        </div>
      </div>
    </section>
  )
}

export default Aboutus
