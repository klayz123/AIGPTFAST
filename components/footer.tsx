"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageSquare, Twitter, Instagram, Github, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  openModal: () => void
}

export function Footer({ openModal }: FooterProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <footer className="relative py-12 overflow-hidden border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants} className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4 inline-block"
            >
              AI-ассистент
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Персональный AI-помощник на базе GPT, доступный через Telegram. Обрабатывает изображения, голос и имеет
              длительную память, адаптируясь под ваши потребности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={openModal}
                variant="outline"
                className="relative group border-purple-500 hover:border-purple-400 text-white"
              >
                <span className="relative z-10 flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Связаться с нами
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-cyan-600/40 group-hover:opacity-80 opacity-0 transition-opacity duration-300"></span>
              </Button>

              <Button
                onClick={openModal}
                className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white"
              >
                <span className="relative z-10">Подключить за 1990₽</span>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#product" className="text-gray-400 hover:text-white transition-colors duration-300">
                  О продукте
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Возможности
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Блог
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Send className="h-4 w-4 mr-2 text-purple-400" />
                <span>Telegram: </span>
                <a
                  href="https://t.me/Eden_s_ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  @Eden_s_ru
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2 text-purple-400" />
                <a href="mailto:KolmanKlayz@yandex.ru" className="hover:text-purple-400 transition-colors">
                  KolmanKlayz@yandex.ru
                </a>
              </li>
              <li className="mt-4">
                <div className="flex space-x-4">
                  <SocialIcon icon={<Twitter className="h-5 w-5" />} href="#" />
                  <SocialIcon icon={<Instagram className="h-5 w-5" />} href="#" />
                  <SocialIcon icon={<Github className="h-5 w-5" />} href="#" />
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500"
        >
          <p>© {new Date().getFullYear()} AI-ассистент. Все права защищены.</p>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{
          background: "linear-gradient(90deg, rgba(139,92,246,0) 0%, rgba(139,92,246,0.5) 50%, rgba(6,182,212,0) 100%)",
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
        }}
      />
    </footer>
  )
}

interface SocialIconProps {
  icon: React.ReactNode
  href: string
}

function SocialIcon({ icon, href }: SocialIconProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-300"
    >
      {icon}
    </Link>
  )
}
