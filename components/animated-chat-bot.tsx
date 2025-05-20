"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, User, MessageSquare, Zap } from "lucide-react"

export function AnimatedChatBot() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const messages = [
    { text: "Привет! Чем я могу помочь?", sender: "bot" },
    { text: "Мне нужна информация о продукте", sender: "user" },
    { text: "Конечно! Вот подробное описание...", sender: "bot" },
    { text: "А какая цена?", sender: "user" },
    { text: "Стоимость подключения всего 1990₽", sender: "bot" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full">
      {/* Фоновое свечение */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Робот */}
      <motion.div
        className="relative z-10 w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center"
        animate={{
          boxShadow: [
            "0 0 20px rgba(139, 92, 246, 0.3)",
            "0 0 40px rgba(139, 92, 246, 0.5)",
            "0 0 20px rgba(139, 92, 246, 0.3)",
          ],
          y: [0, -10, 0],
        }}
        transition={{
          boxShadow: {
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
          y: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
      >
        {/* Лицо робота */}
        <div className="relative">
          {/* Глаза */}
          <div className="flex space-x-6">
            <motion.div
              className="w-6 h-6 rounded-full bg-cyan-300"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="w-6 h-6 rounded-full bg-cyan-300"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
              }}
            />
          </div>

          {/* Рот */}
          <motion.div
            className="w-16 h-1 bg-white rounded-full mt-6 mx-auto"
            animate={{
              width: [16, 32, 16],
              height: [4, 8, 4],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          />

          {/* Антенна */}
          <motion.div
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-pink-500"
            animate={{
              height: [8, 12, 8],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <motion.div
              className="w-3 h-3 rounded-full bg-pink-400 absolute -top-2 left-1/2 transform -translate-x-1/2"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: [
                  "0 0 5px rgba(236, 72, 153, 0.5)",
                  "0 0 15px rgba(236, 72, 153, 0.8)",
                  "0 0 5px rgba(236, 72, 153, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Чат-пузыри */}
      <div className="absolute top-0 left-0 right-0 -mt-16 md:-mt-24">
        <AnimatePresence mode="wait">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`flex items-start gap-2 mb-2 ${message.sender === "bot" ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: currentMessage === index ? 1 : 0,
                y: currentMessage === index ? 0 : 10,
              }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {message.sender === "bot" && (
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              <div
                className={`rounded-lg px-3 py-2 max-w-[80%] ${
                  message.sender === "bot"
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                    : "bg-gray-800 text-white"
                }`}
              >
                {message.text}
              </div>
              {message.sender === "user" && (
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Декоративные элементы */}
      <motion.div
        className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-cyan-500/50"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Zap className="w-full h-full text-cyan-200" />
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-6 w-10 h-10 rounded-full bg-purple-500/50"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      >
        <MessageSquare className="w-full h-full text-purple-200" />
      </motion.div>
    </div>
  )
}
