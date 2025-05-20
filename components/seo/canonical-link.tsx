import Head from "next/head"

interface CanonicalLinkProps {
  path?: string
}

export function CanonicalLink({ path = "" }: CanonicalLinkProps) {
  const baseUrl = "https://ai-assistant.example.com"
  const canonicalUrl = path ? `${baseUrl}/${path}` : baseUrl

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  )
}
