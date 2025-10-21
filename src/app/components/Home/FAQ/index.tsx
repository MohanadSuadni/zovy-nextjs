'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

const FAQ = () => {
  return (
    <section id='FAQ'
      className='relative py-1 bg-cover bg-center overflow-hidde dark:bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-2xl py-24 bg-faq-bg bg-no-repeat bg-cover bg-[#0f3d7d]'>
          <p className='text-lg font-normal text-white text-center mb-6'>FAQ</p>
          <h2 className='text-white text-center max-w-3xl mx-auto font-bold'>
          Često postavljana pitanja.
          </h2>
          <div className='w-full px-4 pt-16'>
            <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className='flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>
                         Kako će izgledati instalacija u stanu?
                      </span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-base text-black/50 font-normal text-left pt-4 mt-6 border-t border-border'>
                      <div className='lg:max-w-70%'>
                      Instalacija u vašem stanu biće izvedena tako da se gotovo uopšte ne vidi.
Koristimo kvalitetnu 3M silikonsku kanalicu, koja je izuzetno diskretna i gotovo neprimetna – kao da ne postoji. Kanalica vodi od ulaznih vrata do pozicije glavnog rutera, savršeno se uklapa uz zid i ne narušava izgled prostora.

Ukoliko bude potrebno bušenje, radi se samo mala rupa prečnika 6 mm, a nakon završetka radova rupa se zatvara poklopcem, tako da se ne vidi uopšte.

Naš cilj je da instalacija bude uredna, diskretna i estetski neupadljiva, tako da u vašem stanu sve izgleda čisto i profesionalno.

👉 Možete pogledati sliku ispod kao primer završene instalacije.
                      </div>
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </div>
            <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure as='div' className='mt-2'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>Da li ću imati Wi-Fi signal u celom stanu?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-base text-black/50 pt-4 mt-6 text-left border-t border-border'>
                      <div className='lg:max-w-70%'>
                    Da. Nakon instalacije, naši tehničari proveravaju jačinu Wi-Fi signala u svim prostorijama kako bi se osiguralo da imate stabilnu i brzu vezu u svakom delu stana.
Ako je potrebno, postavlja se dodatni Wi-Fi uređaj koji širi signal i obezbeđuje potpunu pokrivenost prostora.
Cilj nam je da signal bude jak, stabilan i bez prekida – u svakoj prostoriji.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>


                 <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure as='div' className='mt-2'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>Kako će raditi televizori u stanu?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-base text-black/50 pt-4 mt-6 text-left border-t border-border'>
                      <div className='lg:max-w-70%'>
                Kod nas u Yettelu ne provlačimo dodatne kablove između televizora.
Koristimo moderne uređaje sa snažnim Wi-Fi signalom, koji omogućavaju da televizor radi bežično i bez ikakvih prekida.

Na ovaj način izbegavamo bušenje zidova i postavljanje dodatnih kablova, a prostor ostaje uredan, čist i bez vidljivih instalacija.
Uređaji su testirani da obezbede stabilnu i kvalitetnu vezu, tako da možete uživati u gledanju TV sadržaja u svim prostorijama vašeg doma.
                      </div>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>


                     <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5'>
              <Disclosure as='div' className='mt-2'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>Šta ako već imam MTS optiku ili živim u novoj zgradi sa optikom?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
         <DisclosurePanel className='text-base text-black/50 pt-4 mt-6 font-normal text-left border-t border-border'>
                      <div className='lg:max-w-70%'>
                     Ukoliko u vašoj zgradi već postoji optika od MTS-a ili je optika već provučena do stana, instalacija je još jednostavnija.
Naši tehničari proveravaju postojeću optičku infrastrukturu i, gde je moguće, koriste postojeći optički ulaz bez dodatnog bušenja i kablova.

U takvim slučajevima instalacija traje kraće vreme, a sve se radi uredno i bez narušavanja prostora.
Naš cilj je da maksimalno iskoristimo postojeću instalaciju, kako bi se izbegli nepotrebni radovi i sve izgledalo čisto, uredno i profesionalno.
                      </div>

                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
        

            <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white'>
              <Disclosure as='div' className='mt-2'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
                      <span className='text-black'>Šta treba obezbediti pre dolaska tehničara?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}>
                        <Icon icon='lucide:chevron-up' width='20' height='20' />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className='text-base text-black/50 pt-4 mt-6 font-normal text-left border-t border-border'>
                      <div className='lg:max-w-70%'>
                    Da bi instalacija protekla glatko i bez odlaganja, važno je da pre dolaska tehničara obezbedite sledeće:

1)Pristup glavnom ormanu

Ako se glavni orman od MTS-a nalazi u podrumu ili u prostoriji sa slabom strujom, potrebno je da imate ključ ili pristup toj prostoriji.

Ovo morate prethodno proveriti sa upravnikom zgrade ili osobom koja upravlja prostorijama.

2)Priključci za struju na mestu rutera

Na mestu gde će biti postavljen ruter mora da postoji struja.

Preporučuje se da bude dostupan produžni kabl ili razdelnik za utičnice, u zavisnosti od broja uređaja koje povezujemo.

3)Slobodan prostor za postavljanje uređaja

4)Obezbedite da prostor oko rutera i uređaja bude slobodan, kako tehničari mogu uredno postaviti kanalice i povezati sve uređaje.

Priprema ovih stvari unapred omogućava brzu, urednu i profesionalnu instalaciju, bez otkazivanja termina.
                      </div>

                    </DisclosurePanel>
                  </>
                )}

              </Disclosure>
            </div>


            
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
