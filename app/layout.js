import './globals.css'
export const metadata = {
  title: 'Leather CPR Cleaner - Bring Your Leather Back to Life',
  description: 'Restore, protect, and revitalize your leather in one easy step with Leather CPR Cleaner.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-800">
        {children}
        
      </body>
    </html>
  )
}