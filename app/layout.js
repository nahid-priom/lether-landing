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
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-4">Leather CPR Cleaner</h3>
                <p>Bringing your leather back to life since 1999</p>
              </div>
              <div className="mb-6 md:mb-0">
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-amber-300">Contact Us</a></li>
                  <li><a href="#" className="hover:text-amber-300">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-amber-300">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-amber-300">Facebook</a>
                  <a href="#" className="hover:text-amber-300">Instagram</a>
                  <a href="#" className="hover:text-amber-300">Twitter</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p>© 2025 Leather CPR Cleaner. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}