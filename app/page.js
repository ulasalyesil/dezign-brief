'use client'

import Header from "@/components/Header"
import Hero from "@/components/Hero";
import Image from "next/image";
import heroBg from "../public/images/heroBg.png";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="flex flex-col gap-24 items-center justify-center m-auto">
      <div className="w-full flex flex-col gap-16 bg-gray-100 items-center justify-center relative">
        <Image src={heroBg} alt="grid" className="absolute -z-10" fill={true} />
        <Header />
        <Hero />
      </div>
     <Industries />
     <Footer />
    </main>
  );
}
