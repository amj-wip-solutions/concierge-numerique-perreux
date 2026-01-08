'use client'

import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import ServicesAndPricing from './services-pricing' // IMPORT THE NEW COMPONENT
import {
    CheckCircle2, Shield, Phone, MapPin,
    Star, MessageCircle, Smile, Zap, AlertTriangle
} from 'lucide-react'

export default function Home() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-teal-50 to-slate-200 font-sans">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="container mx-auto px-6 pt-8 pb-12 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 pt-8">

                    {/* Left Column: Text */}
                    <div className="lg:w-3/5 text-center lg:text-left">
                        <div className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full font-semibold text-sm mb-6 animate-fade-in-up">
                            📍 Intervention à domicile : Le Perreux & Alentours (94)
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s' }}>
                            Aide Informatique & <br/>
                            <span className="text-teal-600">Formation IA à Domicile</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Un ordinateur bloqué ? Une imprimante capricieuse ? Peur des arnaques sur Internet ?
                            <br/>
                            <span className="font-semibold text-slate-900">Je suis là pour vous aider, avec patience et pédagogie.</span>
                        </p>

                        {/* Call to Actions */}
                        <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Button
                                size="lg"
                                onClick={scrollToContact}
                                className="bg-slate-800 hover:bg-slate-900 text-white text-xl px-8 py-7 h-auto rounded-xl shadow-xl shadow-slate-500/20 transition-all hover:scale-105 w-full sm:w-auto"
                            >
                                Prendre rendez-vous
                            </Button>
                            <a
                                href="tel:+33744985723"
                                className="flex items-center gap-3 text-2xl font-bold text-slate-800 hover:text-teal-600 transition-all px-6 py-4"
                            >
                                <Phone className="w-6 h-6 animate-pulse" />
                                07 44 98 57 23
                            </a>
                        </div>
                        <p className="text-slate-600 italic text-lg">Disponible 7j/7 • Déplacement gratuit au Perreux</p>
                    </div>

                    {/* Right Column: Image/Trust */}
                    <div className="lg:w-2/5 relative animate-fade-in-up hidden md:block" style={{ animationDelay: '0.5s' }}>
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 border-4 border-white shadow-2xl flex items-center justify-center relative overflow-hidden">
                            <div className="text-center p-6">
                                {/* REPLACE WITH YOUR REAL PHOTO */}
                                <div className="w-24 h-24 bg-slate-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-white text-xs">Votre Photo Ici</span>
                                </div>
                                <p className="text-xl font-bold text-slate-700">Alex McLean-Janet</p>
                                <p className="text-slate-600">Votre Expert de Confiance</p>
                            </div>
                        </div>

                        {/* Trust Badges floating */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-teal-100 flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-full">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-800">100% Sécurisé</p>
                                <p className="text-sm text-slate-600">Formation Anti-Arnaque</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Indicators Bar */}
                <div className="grid md:grid-cols-3 gap-6 mt-20">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-teal-100 shadow-sm flex items-center gap-4">
                        <Smile className="w-10 h-10 text-teal-600" />
                        <div>
                            <p className="font-bold text-slate-800 text-lg">Pédagogie & Patience</p>
                            <p className="text-slate-600">J'explique tout simplement</p>
                        </div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-teal-100 shadow-sm flex items-center gap-4">
                        <Zap className="w-10 h-10 text-teal-600" />
                        <div>
                            <p className="font-bold text-slate-800 text-lg">Intervention Rapide</p>
                            <p className="text-slate-600">Sous 24h/48h à domicile</p>
                        </div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-teal-100 shadow-sm flex items-center gap-4">
                        <Star className="w-10 h-10 text-teal-600" />
                        <div>
                            <p className="font-bold text-slate-800 text-lg">Satisfait ou Remboursé</p>
                            <p className="text-slate-600">Zéro risque pour vous</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SAP BANNER (CRITICAL FOR CONVERSION) */}
            <section className="bg-teal-600 py-10 shadow-lg relative z-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                        {/* Logo Block */}
                        <div className="bg-white p-3 rounded-lg shadow-md flex-shrink-0">
                            <span className="font-bold text-teal-800 text-xl border-2 border-teal-800 p-1 inline-block">S.A.P.</span>
                        </div>

                        {/* Text Block */}
                        <div className="text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                Agréé Service à la Personne
                            </h3>
                            <p className="text-teal-50 text-xl">
                                Une heure à 70€ ne vous coûte que <span className="font-bold text-white underline decoration-yellow-400 decoration-4 underline-offset-4">35€</span>.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block h-12 w-px bg-teal-400 mx-4"></div>

                        {/* Benefits Block */}
                        <div className="flex flex-col items-start gap-2">
                            <div className="flex items-center gap-2 bg-teal-700/50 px-4 py-2 rounded-lg border border-teal-500">
                                <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                                <span className="text-white font-medium">50% Crédit d'Impôt</span>
                            </div>
                            <div className="flex items-center gap-2 bg-teal-700/50 px-4 py-2 rounded-lg border border-teal-500">
                                <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                                <span className="text-white font-medium">Avance Immédiate (Optionnel)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SAFETY SECTION */}
            <section className="bg-red-50 border-y border-red-100 py-16">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-6 shadow-sm">
                        <AlertTriangle className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Vous avez reçu un email ou SMS suspect ?
                    </h3>
                    <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                        <span className="font-bold text-red-700">Ne cliquez sur rien.</span> Dans le doute, appelez-moi. Je vérifie pour vous si c'est une arnaque ou un message officiel (Impôts, Ameli, Banque, Colis).
                    </p>
                    <div className="bg-white inline-flex items-center gap-3 rounded-xl px-8 py-4 shadow-md border border-red-200">
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <p className="font-bold text-slate-800 text-lg text-left">
                            Formation "Anti-Arnaque" incluse
                        </p>
                    </div>
                </div>
            </section>

            {/* NEW DYNAMIC SERVICES & PRICING SECTION */}
            {/* This replaces the old hardcoded grid */}
            <ServicesAndPricing />

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h3 className="text-4xl font-bold text-center mb-4 text-slate-800">
                        Mes clients témoignent
                    </h3>
                    <p className="text-center text-slate-600 mb-12 text-xl">
                        Leur satisfaction est ma meilleure publicité
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-slate-700 mb-6 text-lg italic leading-relaxed">
                                "Dans le passé, j'ai été victime d'une escroquerie. Grâce à vos astuces, j'ai appris à reconnaître les signes suspects. Je suis bien plus vigilante !"</p>
                            <p className="font-bold text-slate-900 text-lg">— Roxane M., Le Perreux</p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-slate-700 mb-6 text-lg italic leading-relaxed">
                                "Formidable ! Simple et rapide. Mon imprimante ne marchait plus et mon PC était lent. Grâce à Alex, j’évite le changement de matériel."
                            </p>
                            <p className="font-bold text-slate-900 text-lg">— Florient, Nogent</p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-slate-700 mb-6 text-lg italic leading-relaxed">
                                "Alex m'a été d'un grand soutien pour mes problèmes informatiques. Il est très à l'écoute et intervient rapidement."
                            </p>
                            <p className="font-bold text-slate-900 text-lg">— Yvonne D., Bry-sur-Marne</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-gradient-to-b from-slate-100 via-teal-50/30 to-slate-300 py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-slate-200">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">Besoin d'aide ?</h2>
                        <p className="text-center text-xl text-slate-700 mb-12">
                            Appelez-moi pour un diagnostic gratuit par téléphone.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Phone Card */}
                            <a href="tel:+33744985723" className="flex flex-col items-center p-8 bg-slate-50 rounded-2xl border-2 border-slate-100 hover:border-teal-500 transition-all cursor-pointer group">
                                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Phone className="w-8 h-8 text-white" />
                                </div>
                                <p className="text-slate-600 font-semibold mb-1">Par téléphone</p>
                                <p className="text-3xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">07 44 98 57 23</p>
                                <p className="text-sm text-teal-600 mt-2 font-medium">Réponse rapide</p>
                            </a>

                            {/* Whatsapp Card */}
                            <a href="https://wa.me/33744985723" target="_blank" className="flex flex-col items-center p-8 bg-green-50 rounded-2xl border-2 border-green-100 hover:border-green-500 transition-all cursor-pointer group">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <MessageCircle className="w-8 h-8 text-white" />
                                </div>
                                <p className="text-green-800 font-semibold mb-1">Par WhatsApp</p>
                                <p className="text-3xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">Message</p>
                                <p className="text-sm text-green-600 mt-2 font-medium">Idéal pour envoyer une photo</p>
                            </a>
                        </div>

                        <div className="mt-12 flex items-center justify-center gap-2 text-slate-600 bg-slate-50 py-4 rounded-xl">
                            <MapPin className="w-5 h-5 text-slate-500" />
                            <span className="text-lg">Zone : Le Perreux, Nogent, Bry (94)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer with SEO Text & Legal SAP */}
            <footer className="bg-slate-900 text-slate-300 py-12">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 mb-12 border-b border-slate-800 pb-12">
                        <div>
                            <h4 className="text-white text-xl font-bold mb-4">Lebonclick</h4>
                            <p className="text-slate-400">
                                Votre partenaire de confiance pour l'informatique à domicile.
                                Pédagogie, sécurité et patience pour les seniors.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white text-xl font-bold mb-4">Contact & Légal</h4>
                            <p className="mb-2 font-bold text-white">07 44 98 57 23</p>
                            <p>alex@lebonclick.fr</p>
                            <p className="mt-4 text-sm text-slate-500">SIRET : [VOTRE NUMERO]</p>
                            <p className="text-sm text-slate-500">Déclaration SAP : [VOTRE NUMERO]</p>
                        </div>
                        <div>
                            <h4 className="text-white text-xl font-bold mb-4">Horaires</h4>
                            <p>Lundi - Vendredi : 18h - 20h</p>
                            <p>Samedi : 9h - 18h</p>
                            <p>Dimanche : Urgences uniquement</p>
                        </div>
                    </div>

                    {/* Local SEO Block - Critical for Google Ranking */}
                    <div className="text-sm text-slate-500 mb-8">
                        <p className="font-semibold text-slate-400 mb-2">Zones d'intervention prioritaires dans le Val-de-Marne (94) :</p>
                        <p className="leading-relaxed">
                            Dépannage informatique Le Perreux-sur-Marne (94170) • Assistance PC Nogent-sur-Marne (94130) •
                            Cours informatique Bry-sur-Marne (94360) • Formation Internet Seniors Neuilly-Plaisance (93360) •
                            Aide administrative Fontenay-sous-Bois (94120) • Installation Imprimante Champigny-sur-Marne (94500).
                        </p>
                    </div>

                    <div className="text-center text-slate-600 text-sm">
                        &copy; {new Date().getFullYear()} Lebonclick. Tous droits réservés.
                    </div>
                </div>
            </footer>

            {/* Sticky Mobile Action Bar - Visible only on mobile */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex justify-between gap-4">
                <a href="tel:+33744985723" className="flex-1 bg-slate-800 text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 font-bold shadow-lg active:scale-95 transition-transform">
                    <Phone className="w-5 h-5" />
                    Appeler
                </a>
                <a href="https://wa.me/33744985723" className="flex-1 bg-green-500 text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 font-bold shadow-lg active:scale-95 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                </a>
            </div>
        </div>
    )
}