"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Clock, Database, BrainCircuit, ImageIcon as Image, Mic, MemoryStickIcon as Memory } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="product" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-400 text-sm">
              О продукте
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Что делает AI-ассистент
            </h2>
            <p className="text-lg text-gray-300">
              Персональный помощник на базе GPT, который всегда под рукой в вашем Telegram
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductFeature
              icon={<Clock className="h-10 w-10 text-purple-400" />}
              title="Доступен 24/7"
              description="Ваш ассистент всегда онлайн и готов ответить на вопросы в любое время суток"
              variants={itemVariants}
            />
            <ProductFeature
              icon={<BrainCircuit className="h-10 w-10 text-pink-400" />}
              title="На базе GPT"
              description="Использует передовую модель искусственного интеллекта для генерации ответов"
              variants={itemVariants}
            />
            <ProductFeature
              icon={<Memory className="h-10 w-10 text-cyan-400" />}
              title="Длительная память"
              description="Запоминает историю общения и учитывает контекст при ответах на вопросы"
              variants={itemVariants}
            />
          </div>

          <motion.div variants={itemVariants} className="mt-16 relative">
            <div className="relative rounded-xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-30" />
              <div className="relative rounded-lg overflow-hidden bg-black/60 backdrop-blur-sm p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      Расширенные возможности
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 mr-3 mt-0.5">
                          <Image className="h-3.5 w-3.5" />
                        </span>
                        <span>Обработка и анализ изображений</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 mr-3 mt-0.5">
                          <Mic className="h-3.5 w-3.5" />
                        </span>
                        <span>Распознавание голосовых сообщений</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 mr-3 mt-0.5">
                          <Database className="h-3.5 w-3.5" />
                        </span>
                        <span>Интеграция с вашими сервисами и базами данных</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button
                        onClick={() => {
                          // Находим элемент модального окна и открываем его
                          const modalOpenButton = document.querySelector("[data-open-modal]") as HTMLButtonElement
                          if (modalOpenButton) modalOpenButton.click()
                        }}
                        className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white"
                      >
                        Подключить ассистента
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <motion.div
                      className="relative z-10 rounded-lg overflow-hidden border border-gray-800 shadow-xl"
                      animate={{
                        boxShadow: [
                          "0 0 10px rgba(139, 92, 246, 0.3)",
                          "0 0 20px rgba(139, 92, 246, 0.5)",
                          "0 0 10px rgba(139, 92, 246, 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      <img
                        src="/placeholder.svg?height=400&width=300"
                        alt="Telegram AI Assistant"
                        className="w-full h-auto"
                      />
                    </motion.div>
                    <motion.div
                      className="absolute -top-4 -right-4 -bottom-4 -left-4 rounded-lg border border-purple-500/30 z-0"
                      animate={{
                        borderColor: ["rgba(139, 92, 246, 0.2)", "rgba(139, 92, 246, 0.5)", "rgba(139, 92, 246, 0.2)"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        delay: 0.5,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface ProductFeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  variants: any
}

function ProductFeature({ icon, title, description, variants }: ProductFeatureProps) {
  return (
    <motion.div variants={variants} className="relative group">
      <div className="relative z-10 h-full rounded-xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 p-6 transition-all duration-300 group-hover:border-purple-500/40">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
        <div className="relative">
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-md -z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
