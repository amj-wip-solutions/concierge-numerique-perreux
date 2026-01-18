'use client'

import Image from 'next/image'
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`border-b-2 border-teal-500 shadow-md sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Retour en haut"
          >
            <Image
              src="/logo.svg"
              alt="Lebonclick Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 rotate-45 scale-[175%]"
              priority
            />
            <div className="text-left">
              <h1 className="text-xl md:text-2xl font-bold text-slate-800">
                Lebonclick
              </h1>
              <p className="text-xs md:text-sm text-slate-600">
                Votre concierge numérique
              </p>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="flex items-center gap-3 md:gap-6">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm md:text-base font-semibold text-slate-700 hover:text-teal-600 transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-sm md:text-base font-semibold text-slate-700 hover:text-teal-600 transition-colors cursor-pointer"
            >
              Avis
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm md:text-base font-semibold bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
