'use client'

import { motion } from "framer-motion";

import Header from "@/components/Header"
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";

export const navigation = hard;

export default function Home() {
  return (
    <main className="flex flex-col gap-24 items-center justify-center m-auto">
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", damping: 20 }}
      className="w-full flex flex-col gap-16 bg-gray-100 items-center justify-center relative bg-hero-pattern">
        <Header />
        <Hero />
      </motion.div>
     <Industries />
     <Footer />
    </main>
  );
}
