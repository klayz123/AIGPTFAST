import Head from "next/head"

interface MetaTagsProps {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  ogType?: string
  twitterCard?: string
}

export function MetaTags({
  title,
  description,
  keywords,
  ogImage = "/images/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
}: MetaTagsProps) {
  return (
    <Head>
      {/* Основные мета-теги */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="AI-ассистент" />
      <meta property="og:locale" content="ru_RU" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@ai_assistant" />
      <meta name="twitter:creator" content="@ai_assistant" />
    </Head>
  )
}
