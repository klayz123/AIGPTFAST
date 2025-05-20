"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductSection } from "@/components/product-section"
import { FeaturesSection } from "@/components/features-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { ContactModal } from "@/components/contact-modal"
import { Footer } from "@/components/footer"
import { BackgroundAnimation } from "@/components/background-animation"
import { StructuredData } from "@/components/seo/structured-data"
import { FaqSection } from "@/components/faq-section"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="relative min-h-screen overflow-hidden">
      <StructuredData />
      <BackgroundAnimation />
      <div className="relative z-10">
        <Header openModal={openModal} />
        <main>
          <HeroSection openModal={openModal} />
          <ProductSection />
          <FeaturesSection />
          <AdvantagesSection openModal={openModal} />
          <FaqSection openModal={openModal} />
        </main>
        <Footer openModal={openModal} />
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  )
}
