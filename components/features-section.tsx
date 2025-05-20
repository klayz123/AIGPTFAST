"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, Mic, Puzzle, ImageIcon, Brain, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Автоответы",
      description: "Автоматические ответы на типичные вопросы ваших клиентов",
    },
    {
      icon: <ImageIcon className="h-6 w-6" />,
      title: "Обработка изображений",
      description: "Анализ и описание изображений, которые вы отправляете",
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Распознавание голоса",
      description: "Обработка голосовых сообщений и аудиозаписей",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Адаптивное обучение",
      description: "Подстраивается под ваш стиль общения и предпочтения",
    },
    {
      icon: <Puzzle className="h-6 w-6" />,
      title: "Интеграция с сервисами",
      description: "Подключение к Google Таблицам и другим сервисам",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Длительная память",
      description: "Запоминает контекст разговора и ваши предпочтения",
    },
  ]

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-sm">
              Возможности
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Расширенные функции GPT-ассистента
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Наш AI-ассистент на базе GPT обладает широким набором возможностей для решения ваших задач
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
            }}
            className="mt-12 text-center"
          >
            <Button
              onClick={() => {
                // Находим элемент модального окна и открываем его
                const modalOpenButton = document.querySelector("[data-open-modal]") as HTMLButtonElement
                if (modalOpenButton) modalOpenButton.click()
              }}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-6 text-lg"
            >
              Подключить за 1990₽
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  }

  const iconColors = [
    "text-purple-400",
    "text-cyan-400",
    "text-pink-400",
    "text-green-400",
    "text-yellow-400",
    "text-blue-400",
  ]

  const borderColors = [
    "group-hover:border-purple-500/50",
    "group-hover:border-cyan-500/50",
    "group-hover:border-pink-500/50",
    "group-hover:border-green-500/50",
    "group-hover:border-yellow-500/50",
    "group-hover:border-blue-500/50",
  ]

  const glowColors = [
    "from-purple-500/20 to-purple-500/0",
    "from-cyan-500/20 to-cyan-500/0",
    "from-pink-500/20 to-pink-500/0",
    "from-green-500/20 to-green-500/0",
    "from-yellow-500/20 to-yellow-500/0",
    "from-blue-500/20 to-blue-500/0",
  ]

  return (
    <motion.div variants={cardVariants} className="group relative">
      <div
        className={`relative z-10 h-full rounded-xl overflow-hidden border border-gray-800 ${borderColors[index % 6]} bg-black/40 backdrop-blur-sm p-6 transition-all duration-300`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/80 opacity-80" />
        <div className="relative">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-gray-800/50 ${iconColors[index % 6]}`}
          >
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>

      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${glowColors[index % 6]} rounded-xl blur-md -z-10 opacity-0 group-hover:opacity-100`}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-cyan-500/0 rounded-xl opacity-0 group-hover:opacity-100 blur-sm -z-20"
        animate={{
          background: [
            "linear-gradient(90deg, rgba(139,92,246,0) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0) 100%)",
            "linear-gradient(90deg, rgba(139,92,246,0) 0%, rgba(139,92,246,0) 50%, rgba(6,182,212,0.3) 100%)",
            "linear-gradient(90deg, rgba(139,92,246,0) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0) 100%)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />
    </motion.div>
  )
}
