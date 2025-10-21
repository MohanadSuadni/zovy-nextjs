import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'O nama', href: 'https://zovy.rs/' },
  { label: 'Net TV', href: '#services' },
  { label: 'Smart TV', href: '#tv' },
  { label: 'FAQ', href: '#FAQ' },
  { label: 'Instalacije', href: '#instalacije'},

  
]

// about data
const Aboutdata: aboutdata[] = [
  {
    heading: 'About us.',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
    link: 'Learn more',
  },
  {
    heading: 'Services.',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
    link: 'Learn more',
  },
  {
    heading: 'Our Works.',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
    link: 'Learn more',
  },
]

// work-data
const WorkData: workdata[] = [
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar4.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar3.svg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/images/wework/avatar4.svg',
  },
]

// featured data
const FeaturedData: featureddata[] = [
  {
    heading: 'Brand design for a computer brand.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Mobile app 3d wallpaper.',
    imgSrc: '/images/featured/feat2.jpg',
  },
  {
    heading: 'Brand design for a computer brand.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Mobile app 3d wallpaper.',
    imgSrc: '/images/featured/feat2.jpg',
  },
]

// plans data
const PlansData = [
  
  
  {

      heading: 'Net TV Basic',
      imgSrc: '/images/articles/13119.png',
          voyo: 'VOYO bez nadoknade tokom promotivnog perioda od 4.11.2024. do 31.10.2026.',

      przina: ' Download do 300 Mbps / Upload do 150 Mbps  ',
      price: {
      monthly: 4.099 ,
      yearly: 4.099 ,
    },


       user: 'Digitalna televizija',
       features: {
       Najgledaniji: ' informativni, zabavnii sportski kanali',
       Premotavanje : ' do 7 dana unazad',
       Gledaj : ' na svim uređajima',
       Prvi : ' Yettel TV Box za 1 RSD',
  
      
    },

  },
  {
    heading: 'Net TV Premium',
    imgSrc: '/images/articles/13851.png',
    voyo: 'VOYO i još 1 aplikacija (Deezer, SkyShowtime ili HBO Max i TV kanali) bez nadoknade',
    przina: ' Download do 500 Mbps / Upload do 250 Mbps  ',

      price: {
      monthly: 4.999 ,
      yearly: 4.999 ,
    },
    user: 'Digitalna televizija',
    features: {
     Najgledaniji: ' informativni, zabavnii sportski kanali',
    Premotavanje : ' do 7 dana unazad',
    Gledaj : 'na svim uređajima',
    Prvi : ' 2 Yettel TV Box za 1 RSD*',
    
    },
  },

    
  {

    heading: 'Net Basic',
    imgSrc: '/images/articles/64d3a7f6d27315d1c50fb3f0_ft5-removebg-preview.png',
    voyo: '300Mbps',
    przina: ' Download do 300 Mbps / Upload do 150 Mbps  ',
    price: {
    monthly:3.199 ,
    yearly: 3.199 ,
    },


    features: {
    Optički : 'internet',
      
    },

  },
  {
    heading: 'Net Premium',
    
    imgSrc: '/images/articles/64d3a7f6d27315d1c50fb3f0_ft5-removebg-preview.png',
    voyo: '500Mbps',
    przina: ' Download do 500 Mbps / Upload do 250 Mbps  ',

      price: {
      monthly: 3.999 ,
      yearly: 3.999 ,
    },
    features: {
    Optički : 'internet',

    },
  },
 
]

// testimonial data
const TestimonialsData: testimonials[] = [
  {
    name: 'Robert Fox',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'Cody Fisher',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
  {
    name: 'Robert Fox',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 4,
  },
  {
    name: 'Leslie Alexander',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'Cody Fisher',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
]

// artical data
















const ArticlesData: articles[] = [
  {
    time: '5 min',
    heading: 'Tesla 43E655BUS 43"',
    heading2: 'UHD | Google TV',
    name: 'Tehničke specifikacije',
    date: '2+3 godine garancije',
    imgSrc: '/images/articles/13758.png',
    cena:'799 RSD',
    nameText: 'Tehničke specifikacije (Veličina ekrana	43")(Rezolucija	UHD)(Operativni sistem	GOOGLE TV)(HDMI	3)(USB	2)(HDR10	Da)Detaljnije informacije o Tesla modelima dostupne su na tesla.info.',
    dateText: 'Osnovna garancija za Tesla televizore je 3 godine (2+1, i za tu dodatnu godinu nije potrebna nikakva registracija). Garantni list se nalazi u pakovanju uređaja.Da bi korisnik ostvario pravo na dodatne 2 godine garancije (2+3), potrebno je da se registruje. Ovaj proces će za Yettel kupce odraditi Comtrade, kupac neće imati nikakvih dodatnih koraka. Na prijavljenu imejl adresu korisnika stiže sertifikat sa kojim se ostvaruje pravo na produženu garanciju.Više informacija o produžetku garancije pronađi na: teslapoklanja.com/tv2025_02.'
  },
  {
    time: '5 min',
    heading: 'Tesla 43E655BUS 50"',
    heading2: 'Webflow this Week!',
    name: 'Tehničke specifikacije',
    date: '2+3 godine garancije',
    imgSrc: '/images/articles/13758.png',
    cena:'999 RSD',
    nameText: 'Tehničke specifikacije (Veličina ekrana	50") (Rezolucija	UHD) (Operativni sistem	GOOGLE TV) (HDMI	3) (USB	2) (HDR10	Da) Detaljnije informacije o Tesla modelima dostupne su na tesla.info.',
    dateText: 'Osnovna garancija za Tesla televizore je 3 godine (2+1, i za tu dodatnu godinu nije potrebna nikakva registracija). Garantni list se nalazi u pakovanju uređaja.Da bi korisnik ostvario pravo na dodatne 2 godine garancije (2+3), potrebno je da se registruje. Ovaj proces će za Yettel kupce odraditi Comtrade, kupac neće imati nikakvih dodatnih koraka. Na prijavljenu imejl adresu korisnika stiže sertifikat sa kojim se ostvaruje pravo na produženu garanciju. Više informacija o produžetku garancije pronađi na: teslapoklanja.com/tv2025_02.'
  },
  {
    time: '5 min',
    heading: 'Samsung U7022F 55"',
    heading2: 'Crystal 4K | Tizen Smart TV',
    name: 'Tehničke specifikacije',
    date: '2+3 godine garancije',
    imgSrc: '/images/articles/13765.png',
    cena:'1.966 RSD',
    nameText: 'Samsung U7022F 55" Crystal 4K: Tizen OS, HDR10+, HDMI 2.0, WiFi i Smart TV opcije.',
    dateText: 'Garancija 2+3 godine: uključen servis i podrška.'
  },
  {
    time: '5 min',
    heading: 'Samsung U7022F 65"',
    heading2: 'Crystal 4K | Tizen Smart TV',
    name: 'Tehničke specifikacije',
    date: '2+3 godine garancije',
    imgSrc: '/images/articles/13765.png',
    cena:'2.299 RSD',
    nameText: 'Samsung U7022F 65": Veliki ekran 65", 4K Crystal UHD, Tizen Smart TV.',
    dateText: 'Garancija traje 2+3 godine sa uključenom tehničkom podrškom.'
  },
  {
    time: '5 min',
    heading: 'Samsung U7022F 75"',
    heading2: 'Crystal 4K | Tizen Smart TV',
    name: 'Tehničke specifikacije',
    date: '2+3 godine garancije',
    imgSrc: '/images/articles/13765.png',
    cena:'3.499 RSD',
    nameText: 'Samsung U7022F 75": Ultra veliki ekran, HDR, Tizen OS, Smart TV funkcije.',
    dateText: 'Garancija 2+3 godine: servis i podrška uključeni.'
  },
  {
    time: '5 min',
    heading: 'Samsung S90F OLED 55"',
    heading2: 'OLED 4K | Tizen Smart TV',
    name: 'Tehničke specifikacije',
    date: '2+3 godine garancije',
    imgSrc: '/images/articles/13768.png',
    cena:'5.599 RSD',
    nameText: 'Samsung S90F OLED 55": OLED panel, 4K rezolucija, HDR, Tizen OS, Dolby Atmos.',
    dateText: 'Garancija traje 2+3 godine: uključuje servis i podršku.'
  },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: '',
    links: [

    ],
  },
  {
    section: '',
    links: [
   
    ],
  },
  {
    section: '',
    links: [
  
    ],
  },
  {
    section: '',
    links: [
     
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  })
}
