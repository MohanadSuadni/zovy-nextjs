"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import PlansSkeleton from "../../Skeleton/Plans"

export default function Manage() {
  const [plans, setPlans] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // 🔹 API URL za online JSON server
const API_URL = "http://localhost:3002";
  // 🔹 Učitaj sve planove sa online servera
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(`${API_URL}/plans`)
        const data = await res.json()
        setPlans(data)
      } catch (error) {
        console.error("Greška pri učitavanju planova:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPlans()
  }, [])

  return (
    <section id="services-section">
      <div className="container mx-auto max-w-7xl px-4">
        <h3 className="text-center">
          Konačno svi dobri kanali na jednom mestu
        </h3>

        <div className="flex sm:block">
          <div className="flex flex-col sm:flex-row gap-5 md:justify-evenly mt-20 items-start mx-auto">
            {["Tačno zakazivanje instalacije", "Uredna instalacija uz minimum bušenja", "Nevidljive instalacije u domu"].map((text, i) => (
              <div key={i} className="flex gap-5 items-center justify-center md:justify-start">
                <Image
                  src="/images/manage/12082_d.png"
                  alt="right-icon"
                  width={30}
                  height={14}
                />
                <p className="text-lg font-semibold">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 relative">
          <div className="dance-text xl:-ml-80 lg:-ml-80 md:-ml-80 -ml-52 text-center -rotate-[10deg] mb-5">
            <h5>get 6 months</h5>
            <div className="flex items-center justify-center">
              <Image
                src="/images/manage/2624026.png"
                alt="right-icon"
                width={100}
                height={50}
              />
            </div>
          </div>
        </div>

        <section id="services">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-16 gap-14 manage">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => <PlansSkeleton key={i} />)
              : plans.map((items, i) => (
                  <div
                    key={i}
                    className="shadow-manage-shadow text-center rounded-3xl overflow-hidden border-2"
                    style={{ borderColor: "#93EE00" }}
                  >
                    <div className="bg-[#0d234a] text-black p-6 mb-4 rounded-3xl">
                      <h5
                        className="text-lg font-semibold mb-2"
                        style={{ color: "#e9e6d7" }}
                      >
                        {items.heading}
                      </h5>

                      {/* Cena iz Admin panela */}
                      {items.price && (
                        <p
                          className="text-4xl font-extrabold mb-2"
                          style={{ color: "#93ee00" }}
                        >
                          {items.price} RSD
                        </p>
                      )}

                      {items.user && (
                        <p
                          className="text-sm font-medium leading-none mb-0"
                          style={{ color: "#c0c0c0" }}
                        >
                          {items.user}
                        </p>
                      )}

                      <br />
                      {items.przina && (
                        <Link href={"#services"}>
                          <button
                            className="text-1xl font-extrabold bg-[#93ee00] hover:text-black border-2 rounded-full py-4 px-12 mt-0 mb-4 hover:cursor-pointer transition-all duration-300"
                            style={{
                              color: "#0d234a",
                              borderColor: "#0d234a",
                            }}
                          >
                            {items.przina}
                          </button>
                        </Link>
                      )}
                    </div>

                    {/* Feature list */}
                    {items.features &&
                      Object.entries(items.features).map(([key, value], index) => (
                        <p key={index}>
                          {key}: {value as string}
                        </p>
                      ))}

                    {items.imgSrc && (
                      <Image
                        src={items.imgSrc}
                        alt={items.heading}
                        width={200}
                        height={10}
                        className="inline-block m-auto rounded-1xl"
                      />
                    )}

                    {items.voyo && (
                      <p className="text-sm font-medium mb-6">{items.voyo}</p>
                    )}
                  </div>
                ))}
          </div>
        </section>
      </div>
    </section>
  )
}