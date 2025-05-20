"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  openModal: () => void
}

export function Header({ openModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link
            href="/"
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
          >
            AI-ассистент
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          <NavLink href="#product">О продукте</NavLink>
          <NavLink href="#features">Возможности</NavLink>
          <Button
            onClick={openModal}
            data-open-modal
            variant="outline"
            className="relative group border-purple-500 hover:border-purple-400 text-white"
          >
            <span className="relative z-10">Подключить за 1990₽</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-cyan-600/40 group-hover:opacity-80 opacity-0 transition-opacity duration-300"></span>
          </Button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden"
        >
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatedMobileMenu
        isOpen={isMobileMenuOpen}
        closeMenu={() => setIsMobileMenuOpen(false)}
        openModal={openModal}
      />
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-gray-300 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  )
}

function AnimatedMobileMenu({
  isOpen,
  closeMenu,
  openModal,
}: {
  isOpen: boolean
  closeMenu: () => void
  openModal: () => void
}) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden overflow-hidden bg-black/95 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <Link
          href="#product"
          onClick={closeMenu}
          className="text-gray-300 hover:text-white py-2 border-b border-gray-800"
        >
          О продукте
        </Link>
        <Link
          href="#features"
          onClick={closeMenu}
          className="text-gray-300 hover:text-white py-2 border-b border-gray-800"
        >
          Возможности
        </Link>
        <Button
          onClick={() => {
            closeMenu()
            openModal()
          }}
          variant="outline"
          className="relative group border-purple-500 hover:border-purple-400 text-white"
        >
          <span className="relative z-10">Подключить за 1990₽</span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-cyan-600/40 group-hover:opacity-80 opacity-0 transition-opacity duration-300"></span>
        </Button>
      </div>
    </motion.div>
  )
}
