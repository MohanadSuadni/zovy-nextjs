import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Aboutus from '@/app/components/Home/AboutUs'
import Dedicated from '@/app/components/Home/Dedicated'
import Digital from '@/app/components/Home/Digital'
import Beliefs from '@/app/components/Home/Beliefs'
import Work from '@/app/components/Home/Work'
import Team from '@/app/components/Home/Team'
import Featured from '@/app/components/Home/Featured'
import Manage from '@/app/components/Home/Manage'
import FAQ from '@/app/components/Home/FAQ'
import Testimonial from '@/app/components/Home/Testimonials'
import Articles from '@/app/components/Home/Articles'
import Join from '@/app/components/Home/Joinus'
import Insta from '@/app/components/Home/Insta'
import { Metadata } from 'next'
import TawkTo from '@/app/components/Home//TawkTo'

export const metadata: Metadata = {
  title: 'ZOVY',
}




export default function Home() {
  return (
    <main>
      <Hero />
      <Dedicated />
            <Manage />
      <Articles />

       <FAQ />
      <Digital />
      <Beliefs />
      <Featured />
     
      <Insta />
            <TawkTo />

    </main>
  )
}
