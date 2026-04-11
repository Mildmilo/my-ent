'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbNavProps {
  sectionLabel: 'Conditions' | 'Procedures'
  pageTitle: string
}

function ChevronSeparator() {
  return (
    <li aria-hidden="true" className="flex items-center text-neutral-300">
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.21967 4.46967a.75.75 0 011.06066 0l5 5a.75.75 0 010 1.06066l-5 5a.75.75 0 11-1.06066-1.06066L11.6893 10 7.21967 5.53033a.75.75 0 010-1.06066z"
        />
      </svg>
    </li>
  )
}

export function BreadcrumbNav({ sectionLabel, pageTitle }: BreadcrumbNavProps) {
  const pathname = usePathname()
  const sectionPath = sectionLabel === 'Conditions' ? '/conditions' : '/procedures'
  const sectionName = sectionLabel
  const currentUrl = pathname ? `https://my-ent.com.au${pathname}` : undefined

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://my-ent.com.au/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: sectionName,
        item: `https://my-ent.com.au${sectionPath}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pageTitle,
        ...(currentUrl ? { item: currentUrl } : {}),
      },
    ],
  }

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-400">
          <li>
            <Link className="transition-colors duration-150 hover:text-neutral-800" href="/">
              Home
            </Link>
          </li>
          <ChevronSeparator />
          <li>
            <Link className="transition-colors duration-150 hover:text-neutral-800" href={sectionPath}>
              {sectionName}
            </Link>
          </li>
          <ChevronSeparator />
          <li aria-current="page" className="text-teal-400">
            {pageTitle}
          </li>
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
