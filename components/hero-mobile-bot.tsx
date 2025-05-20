"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Bot, User, Zap, BrainCircuit, Sparkles } from "lucide-react"

export function HeroMobileBot() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Сообщения для чата
  const messages = [
    { text: "Привет! Я ваш AI-ассистент в Telegram", sender: "bot" },
    { text: "Как ты можешь мне помочь?", sender: "user" },
    { text: "Я могу отвечать на вопросы, искать информацию и помогать с задачами", sender: "bot" },
    { text: "Сколько стоит подключение?", sender: "user" },
    { text: "Всего 1990₽ за полный доступ!", sender: "bot" },
  ]

  // Анимация сообщений
  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [messages.length])

  if (!mounted) return null

  return (
    <div className="relative w-full h-full">
      {/* Чат-пузыри */}
      <div className="absolute top-0 left-0 right-0 -mt-24 z-10">
        <div className="flex flex-col space-y-2">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`flex items-start gap-2 mb-2 ${message.sender === "bot" ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: currentMessage === index ? 1 : 0,
                y: currentMessage === index ? 0 : 10,
              }}
              transition={{ duration: 0.3 }}
            >
              {message.sender === "bot" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center">
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
        </div>
      </div>

      {/* Мобильный робот (упрощенная версия) */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Фоновое свечение */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-cyan-600/30 blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Голова робота */}
        <div className="relative z-10">
          <motion.div
            className="w-32 h-32 rounded-full bg-gradient-to-b from-purple-500 to-purple-700"
            animate={{
              y: [0, -5, 0],
              boxShadow: [
                "0 0 10px rgba(139, 92, 246, 0.5)",
                "0 0 20px rgba(139, 92, 246, 0.7)",
                "0 0 10px rgba(139, 92, 246, 0.5)",
              ],
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
              boxShadow: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
          >
            {/* Глаза */}
            <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full bg-cyan-400">
              <motion.div
                className="absolute inset-0 rounded-full bg-cyan-300"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </div>
            <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-cyan-400">
              <motion.div
                className="absolute inset-0 rounded-full bg-cyan-300"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
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
              className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-cyan-400 rounded-full"
              animate={{
                width: ["40%", "60%", "40%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            {/* Антенна */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-2 h-8 bg-purple-400"
              animate={{
                height: [8, 10, 8],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <motion.div
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500"
                animate={{
                  boxShadow: [
                    "0 0 5px rgba(236, 72, 153, 0.5)",
                    "0 0 15px rgba(236, 72, 153, 0.8)",
                    "0 0 5px rgba(236, 72, 153, 0.5)",
                  ],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Иконки вокруг робота */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-900/50 p-2 rounded-full"
              animate={{
                y: [-4, -8, -4],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <BrainCircuit className="w-4 h-4 text-purple-300" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-cyan-900/50 p-2 rounded-full"
              animate={{
                y: [4, 8, 4],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
              }}
            >
              <Zap className="w-4 h-4 text-cyan-300" />
            </motion.div>
            <motion.div
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-pink-900/50 p-2 rounded-full"
              animate={{
                x: [-4, -8, -4],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            >
              <Sparkles className="w-4 h-4 text-pink-300" />
            </motion.div>
            <motion.div
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-green-900/50 p-2 rounded-full"
              animate={{
                x: [4, 8, 4],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1.5,
              }}
            >
              <Bot className="w-4 h-4 text-green-300" />
            </motion.div>
          </div>
        </div>

        {/* Цена */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
          animate={{
            y: ["50%", "40%", "50%"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            1990₽
          </div>
        </motion.div>
      </div>
    </div>
  )
}
