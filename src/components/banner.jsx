import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] px-3 items-center "
    >
      <div className="w-full">
        <div className="block text-center font-secondary font-black text-[30px]">
          Hai, saya
          <div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Jujur Berbakti",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Dari kelas XII RPL 1",
                1000,
                "Absen 32",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="ml-3 text-secondary"
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <div>
      Tertarik memulai perjalanan di dunia pengembangan web? Saya, seorang pemula dari SMKN 6 Jember, kelas XII RPL 1 absen 32, dengan senang hati berbagi pengalaman dan proyek sederhana saya menggunakan React. Mari bersama-sama belajar dan berkembang dalam coding!
      </div>
    </div>
  )
}
