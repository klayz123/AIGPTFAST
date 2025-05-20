import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center space-x-2 text-sm text-gray-400">
        <li>
          <Link href="/" className="flex items-center hover:text-white transition-colors">
            <Home className="h-4 w-4 mr-1" />
            <span className="sr-only">Главная</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            {item.isCurrent ? (
              <span aria-current="page" className="font-medium text-white">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
