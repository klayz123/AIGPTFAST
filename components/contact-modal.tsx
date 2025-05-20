"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, CheckCircle, ExternalLink, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formState, setFormState] = useState<"form" | "payment" | "success">("form")
  const [paymentMethod, setPaymentMethod] = useState<"crypto" | "transfer">("transfer")
  const [copied, setCopied] = useState(false)
  const [paymentCode, setPaymentCode] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
    message: "",
  })

  // Генерация случайного кода для оплаты
  useEffect(() => {
    const generatePaymentCode = () => {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      let result = "AI-"
      for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      }
      setPaymentCode(result)
    }

    if (formState === "form") {
      generatePaymentCode()
    }
  }, [formState])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Переходим к выбору способа оплаты
    setFormState("payment")
  }

  const handlePayment = () => {
    // Имитация успешной оплаты
    setFormState("success")
  }

  const handleOpenTelegram = () => {
    window.open("https://t.me/Eden_s_ru", "_blank")
    setTimeout(() => {
      onClose()
      // Сбрасываем форму после закрытия
      setFormState("form")
      setFormData({
        name: "",
        email: "",
        telegram: "",
        message: "",
      })
    }, 500)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  // Расчет цены со скидкой для крипто
  const regularPrice = 1990
  const cryptoPrice = Math.round(regularPrice * 0.9) // 10% скидка

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Border glow effect */}
            <div className="absolute inset-0 p-0.5">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 opacity-70"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                />
              </div>
            </div>

            <div className="relative bg-gray-900/95 rounded-xl p-6 md:p-8">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-gray-800/50"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>

              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col items-center justify-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                      className="mb-6 text-green-400"
                    >
                      <CheckCircle className="h-16 w-16" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2 text-center">Заявка принята!</h3>
                    <p className="text-gray-400 text-center mb-6">
                      Для активации AI-ассистента, пожалуйста, напишите нам в Telegram и укажите ваш код оплаты:{" "}
                      <span className="font-bold text-purple-400">{paymentCode}</span>. Мы настроим вашего персонального
                      помощника в течение 24 часов после подтверждения оплаты.
                    </p>
                    <Button
                      onClick={handleOpenTelegram}
                      className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white"
                    >
                      <span className="relative z-10 flex items-center">
                        Открыть Telegram
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </span>
                    </Button>
                  </motion.div>
                ) : formState === "payment" ? (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="mb-6 text-center">
                      <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                        Оплата подключения
                      </h3>
                      <p className="text-gray-400">Выберите удобный способ оплаты для подключения AI-ассистента</p>
                      <div className="mt-2 text-center">
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                          1990₽
                        </span>
                        <span className="text-gray-400 ml-2">единоразовый платеж</span>
                      </div>
                    </div>

                    <Tabs
                      defaultValue="transfer"
                      className="w-full"
                      onValueChange={(value) => setPaymentMethod(value as any)}
                    >
                      <TabsList className="grid grid-cols-2 mb-6">
                        <TabsTrigger value="transfer" className="flex items-center gap-2">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3 10H21"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>Перевод</span>
                        </TabsTrigger>
                        <TabsTrigger value="crypto" className="flex items-center gap-2">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 22V16.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 12L19.5 7.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 12L4.5 7.5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>
                            Крипто <span className="text-xs text-green-400">-10%</span>
                          </span>
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="crypto" className="space-y-4">
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <div className="mb-2 flex justify-between items-center">
                            <p className="text-sm text-gray-400">Отправьте USDT (TRC-20) на адрес:</p>
                            <span className="text-xs px-2 py-1 bg-green-900/30 text-green-400 rounded-full">
                              Скидка 10%
                            </span>
                          </div>
                          <div className="flex items-center justify-between bg-gray-900 p-2 rounded">
                            <code className="text-xs text-purple-400 break-all">
                              TLZzCakNy66HrE4vahDmBPbLusC8ytTEbZ
                            </code>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="ml-2 h-8 px-2"
                              onClick={() => copyToClipboard("TLZzCakNy66HrE4vahDmBPbLusC8ytTEbZ")}
                            >
                              {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                            </Button>
                          </div>
                          <p className="text-sm text-gray-400 mt-4 mb-2">Сумма (USDT):</p>
                          <div className="flex items-center justify-between bg-gray-900 p-2 rounded">
                            <div className="flex items-center">
                              <code className="text-xs text-purple-400">20 USDT</code>
                              <span className="text-xs text-gray-500 ml-2 line-through">22 USDT</span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="ml-2 h-8 px-2"
                              onClick={() => copyToClipboard("20")}
                            >
                              {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                            </Button>
                          </div>
                          <p className="text-sm text-gray-400 mt-4 mb-2">Ваш код оплаты (сохраните его):</p>
                          <div className="flex items-center justify-between bg-gray-900 p-2 rounded">
                            <code className="text-xs text-purple-400">{paymentCode}</code>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="ml-2 h-8 px-2"
                              onClick={() => copyToClipboard(paymentCode)}
                            >
                              {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400">
                          После отправки криптовалюты, пожалуйста, напишите нам в Telegram и укажите ваш код оплаты для
                          подтверждения платежа.
                        </p>
                        <Button
                          onClick={handlePayment}
                          className="w-full relative group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white"
                        >
                          <span className="relative z-10 flex items-center">
                            Я оплатил криптовалютой
                            <CheckCircle className="ml-2 h-4 w-4" />
                          </span>
                        </Button>
                      </TabsContent>

                      <TabsContent value="transfer" className="space-y-4">
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                          <p className="text-sm text-gray-400 mb-2">Реквизиты для перевода:</p>
                          <div className="space-y-2">
                            <div>
                              <p className="text-xs text-gray-500">Банк получателя:</p>
                              <p className="text-sm text-white">Юмани Банк</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Номер карты:</p>
                              <div className="flex items-center justify-between">
                                <p className="text-sm text-white">2204 1201 2714 7607</p>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="ml-2 h-8 px-2"
                                  onClick={() => copyToClipboard("2204120127147607")}
                                >
                                  {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                                </Button>
                              </div>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Сумма:</p>
                              <div className="flex items-center justify-between">
                                <p className="text-sm text-white">1990 ₽</p>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="ml-2 h-8 px-2"
                                  onClick={() => copyToClipboard("1990")}
                                >
                                  {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                                </Button>
                              </div>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Комментарий к платежу (обязательно):</p>
                              <div className="flex items-center justify-between">
                                <p className="text-sm text-white">{paymentCode}</p>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="ml-2 h-8 px-2"
                                  onClick={() => copyToClipboard(paymentCode)}
                                >
                                  {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-400">
                          После выполнения перевода, пожалуйста, напишите нам в Telegram и укажите ваш код оплаты для
                          подтверждения платежа.
                        </p>
                        <Button
                          onClick={handlePayment}
                          className="w-full relative group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white"
                        >
                          <span className="relative z-10 flex items-center">
                            Я выполнил перевод
                            <CheckCircle className="ml-2 h-4 w-4" />
                          </span>
                        </Button>
                      </TabsContent>
                    </Tabs>

                    <div className="mt-6 pt-6 border-t border-gray-800">
                      <p className="text-sm text-gray-400 text-center">
                        Возникли вопросы? Напишите нам в{" "}
                        <a
                          href="https://t.me/Eden_s_ru"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          Telegram @Eden_s_ru
                        </a>
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="mb-6 text-center">
                      <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                        Подключить AI-ассистента
                      </h3>
                      <p className="text-gray-400">Заполните форму для подключения персонального ассистента</p>
                      <div className="mt-2 text-center">
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                          1990₽
                        </span>
                        <span className="text-gray-400 ml-2">единоразовый платеж</span>
                        <span className="ml-2 text-xs px-2 py-1 bg-green-900/30 text-green-400 rounded-full">
                          -10% при оплате крипто
                        </span>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          Имя
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-purple-500/20"
                          placeholder="Ваше имя"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-purple-500/20"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="telegram" className="block text-sm font-medium text-gray-300 mb-1">
                          Telegram
                        </label>
                        <Input
                          id="telegram"
                          name="telegram"
                          value={formData.telegram}
                          onChange={handleChange}
                          required
                          className="bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-purple-500/20"
                          placeholder="@username"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                          Что нужно от ассистента
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="bg-gray-800/50 border-gray-700 focus:border-purple-500 focus:ring-purple-500/20"
                          placeholder="Опишите ваши задачи и ожидания"
                        />
                      </div>

                      <input type="hidden" name="contactMethod" value="telegram" />

                      <Button
                        type="submit"
                        className="w-full relative group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white"
                      >
                        <span className="relative z-10 flex items-center">
                          Перейти к оплате
                          <Send className="ml-2 h-4 w-4" />
                        </span>
                        <div className="absolute inset-0 overflow-hidden rounded-md">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-600/60 to-cyan-600/60"
                            animate={{
                              x: ["0%", "100%", "0%"],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "loop",
                              ease: "linear",
                            }}
                          />
                        </div>
                      </Button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-gray-800">
                      <p className="text-sm text-gray-400 text-center">
                        Или напишите нам напрямую в{" "}
                        <a
                          href="https://t.me/Eden_s_ru"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          Telegram @Eden_s_ru
                        </a>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
