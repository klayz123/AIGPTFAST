"use client"

import { Sparkles, Smartphone, Brain, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvantagesSectionProps {
  openModal: () => void
}

export function AdvantagesSection({ openModal }: AdvantagesSectionProps) {
  const advantages = [
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Прямо в Telegram",
      description:
        "Не нужно устанавливать дополнительные приложения или создавать новые аккаунты. Ассистент работает в привычном для вас мессенджере.",
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Мощный GPT-движок",
      description:
        "В основе ассистента лежит передовая модель GPT, которая обеспечивает высокое качество ответов и понимание контекста.",
    },
    {
      icon: <ImageIcon className="h-12 w-12" />,
      title: "Обработка медиа",
      description:
        "Ассистент умеет анализировать изображения и обрабатывать голосовые сообщения, что расширяет возможности взаимодействия.",
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Адаптивное обучение",
      description:
        "Ассистент запоминает ваши предпочтения и подстраивается под ваш стиль общения с каждым взаимодействием.",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-sm">
              Преимущества
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Почему это выгодно для вас
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              AI-ассистент в Telegram — это удобный и эффективный способ автоматизировать рутинные задачи и получить
              доступ к мощным возможностям искусственного интеллекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center text-purple-400">
                    {advantage.icon}
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{advantage.title}</h3>
                    <p className="text-gray-400">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-xl p-8 border border-purple-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Всего за{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">1990₽</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Единоразовая оплата за подключение без скрытых платежей и ежемесячных подписок. Получите доступ к
              персональному AI-ассистенту на базе GPT прямо сейчас!
            </p>
            <Button
              onClick={openModal}
              size="lg"
              className="relative z-10 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8"
            >
              <span className="flex items-center">
                Подключить за 1990₽
                <Smartphone className="ml-2 h-5 w-5" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
