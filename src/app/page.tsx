'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import ServicesAndPricing from './services-pricing'
import {
    Shield, Phone, MapPin,
    Star, MessageCircle, AlertTriangle, Euro, FileCheck, CheckCircle2, Zap, Smile
} from 'lucide-react'

export default function Home() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Header Component */}
            <Header />

            {/* HERO SECTION */}
            <section className="container mx-auto px-6 pt-12 pb-16 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 pt-16">

                    {/* Left Column */}
                    <div className="lg:w-3/5 text-center lg:text-left">

                        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Votre Informatique, <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-700">
                                Simple & Accessible.
                            </span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            Dépannage, formation IA et assistance administrative à domicile. <br/>
                            <strong>Ne payez que 50% de la facture</strong> grâce au crédit d'impôt immédiat.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Button
                                size="lg"
                                onClick={scrollToContact}
                                className="bg-slate-900 hover:bg-slate-800 text-white text-lg px-8 py-6 rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
                            >
                                Prendre rendez-vous
                            </Button>
                            <Button
                                size="lg"
                                asChild
                                className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
                            >
                                <a href="tel:+33744985723" className="flex items-center justify-center gap-2">
                                    <Phone className="w-5 h-5" />
                                    07 44 98 57 23
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Value Card */}
                    <div className="lg:w-2/5 w-full max-w-sm mx-auto animate-pop-in" style={{ animationDelay: '0.5s' }}>
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300 relative">

                            {/* Visual SAP Badge in Top Right Corner */}
                            <div className="absolute top-0 left-0 w-16 h-16 -rotate-12 scale-250 opacity-90">
                                <Image
                                    src="/sap-logo.svg"
                                    alt="Logo Service à la Personne"
                                    width={64}
                                    height={64}
                                    className="object-contain"
                                />
                            </div>

                            <div className="text-center border-b border-slate-100 pb-6 mb-6 pt-2">
                                <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Votre avantage fiscal</p>
                                <div className="flex items-center justify-center gap-4 mt-2">
                                    <div className="text-right">
                                        <p className="text-sm text-slate-400 line-through">70€ /h</p>
                                        <p className="text-3xl font-bold text-slate-900">35€<span className="text-sm font-normal text-slate-500">/h</span></p>
                                    </div>
                                    <div className="bg-teal-100 text-teal-700 font-bold px-3 py-1 rounded-lg text-sm">
                                        -50%
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500 mt-2">Après Crédit d'Impôt*</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Shield className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-sm text-slate-600">Prestataire agréé Service à la Personne</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Euro className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-sm text-slate-600">Avance immédiate du crédit d'impôt</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FileCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-sm text-slate-600">Attestation fiscale fournie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid md:grid-cols-3 gap-4 mb-12 mt-20">
                    <div className="bg-gradient-to-br from-white to-teal-50 backdrop-blur-sm rounded-xl p-4 border border-teal-200 shadow-sm text-center animate-fade-in-up hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '0.6s' }}>
                        <Smile className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                        <p className="font-semibold text-slate-800">Pédagogie & Patience</p>
                        <p className="text-sm text-slate-600">J'explique tout, sans jargon</p>
                    </div>
                    <div className="bg-gradient-to-br from-white to-teal-50 backdrop-blur-sm rounded-xl p-4 border border-teal-200 shadow-sm text-center animate-fade-in-up hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '0.7s' }}>
                        <Zap className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                        <p className="font-semibold text-slate-800">Intervention rapide</p>
                        <p className="text-sm text-slate-600">Sous 48h en semaine</p>
                    </div>
                    <div className="bg-gradient-to-br from-white to-teal-50 backdrop-blur-sm rounded-xl p-4 border border-teal-200 shadow-sm text-center animate-fade-in-up hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '0.8s' }}>
                        <Star className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                        <p className="font-semibold text-slate-800">Service de proximité</p>
                        <p className="text-sm text-slate-600">Déplacement à domicile</p>
                    </div>
                </div>
            </section>

            {/* DYNAMIC SERVICES SECTION */}
            <div id="services">
                <ServicesAndPricing />
            </div>

            {/* SAFETY SECTION */}
            <section className="bg-red-50 border-y border-red-100 py-16">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-6 shadow-sm">
                        <AlertTriangle className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Vous avez reçu un email ou SMS suspect ?
                    </h3>
                    <p className="text-lg text-slate-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                        <span className="font-bold text-red-700">Ne cliquez sur rien.</span> Dans le doute, appelez-moi. Je vérifie pour vous si c'est une arnaque ou un message officiel (Impôts, Ameli, Banque, Colis).
                    </p>
                    <div className="bg-white inline-flex items-center gap-3 rounded-xl px-6 py-3 shadow-md border border-red-200">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <p className="font-bold text-slate-800 text-base text-left">
                            Formation "Anti-Arnaque" incluse
                        </p>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section id="testimonials" className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">Avis Clients</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Review 1 */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <div className="flex text-yellow-400 mb-3">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-slate-700 italic mb-4 leading-relaxed">
                                    "Grâce à vos astuces, j'ai appris à reconnaître les arnaques. Je suis bien plus vigilante et rassurée !"
                                </p>
                            </div>
                            <p className="font-bold text-slate-900 text-sm">— Roxane M.</p>
                        </div>
                        {/* Review 2 */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <div className="flex text-yellow-400 mb-3">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-slate-700 italic mb-4 leading-relaxed">
                                    "Simple et rapide. Mon PC était lent, maintenant tout fonctionne. J'ai évité de racheter du matériel."
                                </p>
                            </div>
                            <p className="font-bold text-slate-900 text-sm">— Florient</p>
                        </div>
                        {/* Review 3 */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <div className="flex text-yellow-400 mb-3">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-slate-700 italic mb-4 leading-relaxed">
                                    "Très à l'écoute et intervient rapidement. Je recommande vivement pour les seniors."
                                </p>
                            </div>
                            <p className="font-bold text-slate-900 text-sm">— Yvonne D.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION - Light, Clean, Inviting */}
            <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 to-white text-slate-900">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Besoin d'aide ?</h2>
                    <p className="text-lg text-slate-600 mb-10">Je suis disponible du Lundi au Samedi, de 9h à 19h.</p>

                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <a href="tel:+33744985723" className="group flex items-center justify-center gap-4 bg-white text-slate-900 p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all cursor-pointer">
                            <div className="bg-teal-50 p-3 rounded-full group-hover:bg-teal-100 transition-colors">
                                <Phone className="w-6 h-6 text-teal-600" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-slate-500 font-semibold">Appelez-moi</p>
                                <p className="text-xl font-bold">07 44 98 57 23</p>
                            </div>
                        </a>

                        <a href="https://wa.me/33744985723" target="_blank" className="group flex items-center justify-center gap-4 bg-[#25D366] text-white p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-[#20bd5a] transition-all cursor-pointer">
                            <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-white/90 font-semibold">WhatsApp</p>
                                <p className="text-xl font-bold">Envoyer un message</p>
                            </div>
                        </a>
                    </div>

                    {/* FIXED: Full town names */}
                    <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal-600" /> Le Perreux-sur-Marne</span>
                        <span className="hidden md:inline text-slate-300">•</span>
                        <span>Bry-sur-Marne</span>
                        <span className="hidden md:inline text-slate-300">•</span>
                        <span>Nogent-sur-Marne</span>
                        <span className="hidden md:inline text-slate-300">•</span>
                        <span>Champigny-sur-Marne</span>
                    </div>
                </div>
            </section>

            {/* LEGAL FOOTER */}
            <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-sm">
                <div className="container mx-auto px-6 text-center">

                    {/* SAP Logos Row */}
                    <div className="flex flex-wrap justify-center items-center gap-20 mb-10 bg-white/5 p-6 rounded-2xl mx-auto">
                        <a
                            href="https://www.servicesalapersonne.gouv.fr/je-suis-un-particulier"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 relative transition-transform hover:scale-200 cursor-pointer"
                        >
                            <Image
                                src="/sap-logo.svg"
                                alt="Service à la personne"
                                fill
                                className="object-contain"
                            />
                        </a>
                        <a
                            href="https://www.acces-sap.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-32 h-12 relative transition-transform hover:scale-200 cursor-pointer"
                        >
                            <Image
                                src="/acces-sap-logo.svg"
                                alt="Accès SAP"
                                fill
                                className="object-contain"
                            />
                        </a>
                        <a
                            href="https://www.urssaf.fr/accueil/services/services-particuliers/service-avance-immediate.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-32 h-12 relative transition-transform hover:scale-200 cursor-pointer"
                        >
                            <Image
                                src="/urssaf-logo.svg"
                                alt="Avance immédiate Urssaf"
                                fill
                                className="object-contain"
                            />
                        </a>
                    </div>

                    <div className="space-y-6">
                        <p className="font-semibold text-white text-xl">Lebonclick — Assistance Informatique à domicile</p>

                        {/* FIXED: Increased text size for SIRET */}
                        <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-8 text-slate-300 font-mono text-sm md:text-base">
                            <p>SIRET : 942 359 886 00028</p>
                            <span className="hidden md:block text-slate-600">|</span>
                            <p>N° SAP : B 532 923 984</p>
                        </div>

                        {/* FIXED: Increased text size for Legal Disclaimer (text-sm instead of xs) */}
                        <p className="max-w-4xl mx-auto text-sm text-slate-400 leading-relaxed pt-6 border-t border-slate-900">
                            *Selon l'article 199 sexdecies du Code Général des Impôts. Le crédit d'impôt est déduit de vos impôts ou remboursé si vous êtes non imposable.
                            Prestations exclusivement réalisées au domicile des particuliers.
                        </p>

                        <p className="text-sm text-slate-500 pt-2">
                            &copy; {new Date().getFullYear()} Lebonclick. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}