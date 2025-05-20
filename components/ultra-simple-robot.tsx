"use client"

import { useState, useEffect } from "react"
import { Bot, User } from "lucide-react"

export function UltraSimpleRobot() {
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
            <div
              key={index}
              className={`flex items-start gap-2 mb-2 ${
                message.sender === "bot" ? "justify-start" : "justify-end"
              } transition-opacity duration-300 ${currentMessage === index ? "opacity-100" : "opacity-0"}`}
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
            </div>
          ))}
        </div>
      </div>

      {/* Статичный робот без анимаций */}
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative">
          {/* Фоновый круг */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-cyan-600/30 blur-xl"></div>

          {/* Голова робота */}
          <div className="relative z-10">
            <div className="w-32 h-32 rounded-full bg-gradient-to-b from-purple-500 to-purple-700">
              {/* Глаза */}
              <div className="absolute top-1/3 left-1/4 w-6 h-6 rounded-full bg-cyan-400"></div>
              <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-cyan-400"></div>

              {/* Рот */}
              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-cyan-400 rounded-full"></div>

              {/* Антенна */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-2 h-8 bg-purple-400">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500"></div>
              </div>
            </div>
          </div>

          {/* Цена */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              1990₽
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
