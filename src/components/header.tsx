'use client'

import Image from 'next/image'
import { Phone } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`border-b-2 border-teal-500 shadow-md sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Lebonclick Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 rotate-45"
              priority
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-800">
                Lebonclick
              </h1>
              <p className="text-xs md:text-sm text-slate-600">
                Votre concierge numérique
              </p>
            </div>
          </div>

          {/* Phone Number - Desktop */}
          <a
            href="tel:+33744985723"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-2 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all hover:scale-105 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg font-bold">07 44 98 57 23</span>
          </a>

          {/* Phone Number - Mobile */}
          <a
            href="tel:+33744985723"
            className="md:hidden flex items-center gap-1.5 bg-teal-600 text-white px-3 py-1.5 rounded-lg hover:bg-teal-700 transition-all shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-bold">Appeler</span>
          </a>
        </div>
      </div>
    </header>
  )
}
