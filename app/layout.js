// app/layout.tsx

import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Leather Cleaner & Conditioner for Furniture & Accessories',
  description: 'Restore the shine and softness of your leather furniture, purses, couches, and shoes with our premium leather cleaner and conditioner. Long-lasting care for all leather surfaces.',
  metadataBase: new URL('https://www.leathercleanerpro.com'),
  openGraph: {
    title: 'Premium Leather Cleaner & Conditioner for Furniture & Accessories',
    description: 'Restore the shine and softness of your leather furniture, purses, couches, and shoes with our premium leather cleaner and conditioner.',
    url: 'https://www.leathercleanerpro.com',
    siteName: 'Leather Cleaner Pro',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="leather cleaner, leather conditioner, couch leather cleaner, leather purse conditioner, leather care, professional leather cleaner, leather furniture cleaner"
        />
        <meta
          name="google-site-verification"
          content="7iXbjMfRv6bm70ZifhALUeNkezZlw0rucV0lJuYURcs"
        />
      </head>
      <body className="font-sans bg-white text-gray-800">
        {children}
      </body>
    </html>
  )
}
