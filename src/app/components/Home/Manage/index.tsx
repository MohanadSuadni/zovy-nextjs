'use client'
import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import Image from 'next/image'
import PlansSkeleton from '../../Skeleton/Plans'
import Link from 'next/link'

const Manage = () => {
  const [plans, setPlans] = useState<any[]>([])
  const [loading, setLoding] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setPlans(data.PlansData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoding(false)
      }
    }
    fetchData()
  }, [])

  const [enabled, setEnabled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<
    'yearly' | 'monthly'
  >('yearly')

  const toggleEnabled = () => {
    // Toggle the enabled state
    setEnabled((prevEnabled) => !prevEnabled)

    // Update selected category based on the switch position
    setSelectedCategory((prevCategory) =>
      prevCategory === 'yearly' ? 'monthly' : 'yearly'
    )
  }

  const filteredData = plans.map((plan) => ({
    ...plan,
    price: plan.price[selectedCategory],
  }))

  return (
    <section id='services-section'>
      <div className='container mx-auto max-w-7xl px-4'>
        <h3 className='text-center '>
          
 
Konačno svi dobri kanali na jednom mestu
        </h3>
        {/*  */}
        <div className='flex sm:block'>
          <div className='flex flex-col sm:flex-row gap-5 md:justify-evenly mt-20 items-start mx-auto'>
            <div className='flex gap-5 items-center justify-center md:justify-start'>
              <Image
                src='/images/manage/12082_d.png'
                alt='right-icon'
                width={30}
                height={14}
              />
              <p className='text-lg font-semibold'>
Tačno zakazivanje instalacije</p>
            </div>
            <div className='flex gap-5 items-center justify-center md:justify-start'>
              <Image
                src='/images/manage/12082_d.png'
                alt='right-icon'
                width={30}
                height={14}
              />
              <p className='text-lg font-semibold'>
Uredna instalacija uz minimum bušenja</p>
            </div>
            <div className='flex gap-5 items-center justify-center md:justify-start'>
              <Image
                src='/images/manage/12082_d.png'
                alt='right-icon'
                width={30}
                height={14}
              />
              <p className='text-lg font-semibold'>Nevidljive instalacije u domu</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className='mt-6 relative'>
          <div className='dance-text xl:-ml-80 lg:-ml-80 md:-ml-80 -ml-52  text-center -rotate-[10deg] mb-5'>
           
<h5>
get 6 months </h5>
     <div className='flex items-center justify-center'>
         <Image
                src='/images/manage/2624026.png'
                alt='right-icon'
                width={100}
                height={50}
              />
          </div>
          </div>

   
      
        </div>
            <section id='services'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-16 gap-14 manage '>
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <PlansSkeleton key={i} />)
            : filteredData.map((items, i) => (
                <div
                  className='shadow-manage-shadow border border-border text-center p-10 rounded-3xl'
                  key={i}>
                  <h5 className='mb-3'>{items.heading}</h5>
                  <p className='text-4xl font-extrabold mb-3'>{items.price}RSD</p>
                  <p className='text-sm font-medium mb-6'>{items.user}</p>

                  <Link href={'#'}>
                    <button className='text-1xl  font-extrabold text-primary bg-transparent hover:bg-primary hover:text-white border-2 border-primary rounded-full py-4 px-12 mb-6 hover:cursor-pointer'>
                      {items.przina}
                    </button>
                  </Link>
                  {/* Map through the features object and render each key-value pair dynamically */}
                                     

                  {Object.entries(items.features).map((value: any, index) => (
                    
                    <p
                      className='text-sm font-medium text-darkgrey mb-3'
                      key={index}>
                      {value}
                      
                    </p>

                  ))}
                  <Image
                   src={items.imgSrc}
                    alt='gaby'
                      width={200}
                      height={10}
                       className='inline-block m-auto rounded-1xl' />               
                       <p className='text-sm font-medium mb-6'>{items.voyo} </p>

                </div>
                
                
              ))}
              
        </div>
                  </section>

      </div>
          </section>

  )
}

export default Manage
