'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbNavProps {
  sectionLabel: 'Conditions' | 'Procedures'
  pageTitle: string
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
        <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
          <li>
            <Link className="transition-colors duration-150 hover:text-neutral-800" href="/">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-neutral-300">
            /
          </li>
          <li>
            <Link className="transition-colors duration-150 hover:text-neutral-800" href={sectionPath}>
              {sectionName}
            </Link>
          </li>
          <li aria-hidden="true" className="text-neutral-300">
            /
          </li>
          <li className="font-medium text-neutral-800">{pageTitle}</li>
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
