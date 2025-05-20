"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

type FaqItem = {
  question: string
  answer: string
}

interface FaqSectionProps {
  openModal: () => void
}

export function FaqSection({ openModal }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FaqItem[] = [
    {
      question: "Что такое AI-ассистент в Telegram?",
      answer:
        "AI-ассистент в Telegram — это персональный помощник на базе GPT, который доступен через мессенджер Telegram. Он может отвечать на вопросы, искать информацию, анализировать изображения, обрабатывать голосовые сообщения и помогать с различными задачами.",
    },
    {
      question: "Сколько стоит подключение AI-ассистента?",
      answer:
        "Стоимость подключения AI-ассистента составляет 1990 рублей. Это единоразовый платеж без скрытых платежей и ежемесячных подписок.",
    },
    {
      question: "Как подключить AI-ассистента?",
      answer:
        "Для подключения AI-ассистента заполните форму на нашем сайте и выберите удобный способ оплаты. После подтверждения платежа мы настроим вашего персонального ассистента под ваши задачи.",
    },
    {
      question: "Какие возможности у AI-ассистента?",
      answer:
        "AI-ассистент на базе GPT может отвечать на вопросы, искать информацию, анализировать изображения, обрабатывать голосовые сообщения, интегрироваться с Notion и Google Таблицами, помогать с составлением текстов, переводами, анализом данных и многими другими задачами.",
    },
    {
      question: "Как ассистент обучается и адаптируется?",
      answer:
        "Ассистент имеет длительную память, которая позволяет ему запоминать историю ваших взаимодействий, предпочтения и стиль общения. С каждым разговором он становится более персонализированным и лучше понимает ваши потребности.",
    },
    {
      question: "Как обеспечивается безопасность данных?",
      answer:
        "Мы используем шифрование и защиту всей передаваемой информации. Не требуется подключать сторонние сервисы или передавать доступы к вашим аккаунтам.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-400 text-sm">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-gray-300">Ответы на самые популярные вопросы о нашем AI-ассистенте</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="border border-gray-800 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <button
                  className="flex justify-between items-center w-full p-5 text-left"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-medium">{item.question}</h3>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-purple-400" />
                    ) : (
                      <Plus className="h-5 w-5 text-purple-400" />
                    )}
                  </div>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                  aria-hidden={openIndex !== index}
                >
                  <p className="text-gray-400">{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">Остались вопросы? Оформите заявку на подключение:</p>
            <Button
              onClick={openModal}
              className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white"
            >
              <span className="relative z-10 flex items-center">
                Подключить за 1990₽
                <ExternalLink className="ml-2 h-4 w-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
