import Script from "next/script"

export function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI-ассистент",
    url: "https://ai-assistant.example.com",
    logo: "https://ai-assistant.example.com/images/logo.png",
    sameAs: ["https://t.me/Eden_s_ru"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "KolmanKlayz@yandex.ru",
      contactType: "customer service",
      availableLanguage: ["Russian", "English"],
    },
  }

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI-ассистент в Telegram на базе GPT",
    description:
      'Персональный AI-помощник на базе GPT, доступный через Telegram. Обрабатывает изображения, "Персональный AI-помощник на базе GPT, доступный через Telegram. Обрабатывает изображения, голосовые сообщения и имеет длительную память, которая обучается и подстраивается под пользователя.',
    image: "https://ai-assistant.example.com/images/product.jpg",
    brand: {
      "@type": "Brand",
      name: "AI-ассистент",
    },
    offers: {
      "@type": "Offer",
      price: "1990",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      url: "https://ai-assistant.example.com",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Что такое AI-ассистент в Telegram?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI-ассистент в Telegram — это персональный помощник на базе GPT, который доступен через мессенджер Telegram. Он может отвечать на вопросы, искать информацию, обрабатывать изображения, распознавать голосовые сообщения и адаптироваться под ваши потребности.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоит подключение AI-ассистента?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Стоимость подключения AI-ассистента составляет 1990 рублей. Это единоразовый платеж без скрытых платежей и ежемесячных подписок.",
        },
      },
      {
        "@type": "Question",
        name: "Как связаться с поддержкой?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Вы можете связаться с нами через Telegram @Eden_s_ru или по электронной почте KolmanKlayz@yandex.ru.",
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
      />
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  )
}
