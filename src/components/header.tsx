import Image from 'next/image'
import { Phone } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white border-b-4 border-teal-500 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.svg"
              alt="LeBonClick Logo"
              width={60}
              height={60}
              className="w-12 h-12 md:w-16 md:h-16"
              priority
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                LeBonClick
              </h1>
              <p className="text-sm md:text-base text-slate-600">
                Votre concierge numérique
              </p>
            </div>
          </div>

          {/* Phone Number - Desktop */}
          <a
            href="tel:+33744985723"
            className="hidden md:flex items-center gap-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-3 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all hover:scale-105 shadow-lg"
          >
            <Phone className="w-6 h-6" />
            <span className="text-xl font-bold">07 44 98 57 23</span>
          </a>

          {/* Phone Number - Mobile */}
          <a
            href="tel:+33744985723"
            className="md:hidden flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-all shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg font-bold">Appeler</span>
          </a>
        </div>
      </div>
    </header>
  )
}

