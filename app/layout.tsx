import type React from "react"
import "@/app/globals.css"
import { Jost } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Preloader } from "@/components/preloader"
import type { Metadata } from "next"

const jost = Jost({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jost",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AI-ассистент в Telegram | Умный, персональный, всегда на связи",
  description:
    "Подключите персонального AI-ассистента на базе GPT через Telegram. Доступен 24/7, интегрируется с вашими сервисами, понимает контекст.",
  keywords: [
    "AI-ассистент",
    "Telegram бот",
    "GPT",
    "искусственный интеллект",
    "чат-бот",
    "персональный помощник",
    "автоматизация",
    "Notion интеграция",
  ],
  authors: [{ name: "AI Assistant Team" }],
  creator: "AI Assistant Team",
  publisher: "AI Assistant Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://ai-assistant.example.com/",
    title: "AI-ассистент в Telegram | Умный, персональный, всегда на связи",
    description:
      "Подключите персонального AI-ассистента на базе GPT через Telegram. Доступен 24/7, интегрируется с вашими сервисами, понимает контекст.",
    siteName: "AI-ассистент",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI-ассистент в Telegram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-ассистент в Telegram | Умный, персональный, всегда на связи",
    description:
      "Подключите персонального AI-ассистента на базе GPT через Telegram. Доступен 24/7, интегрируется с вашими сервисами, понимает контекст.",
    images: ["/images/twitter-image.jpg"],
    creator: "@Eden_s_ru",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  alternates: {
    canonical: "https://ai-assistant.example.com",
    languages: {
      "ru-RU": "https://ai-assistant.example.com",
      "en-US": "https://ai-assistant.example.com/en",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning>
      <body className={`${jost.variable} font-jost bg-black text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Preloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
