'use client'

import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { CheckCircle2, Shield, Laptop, Phone, Mail, MapPin, Wifi, Lock, GraduationCap, Wrench, ShoppingCart, FileCheck, Sparkles, Code, Clock, Star, Users, Briefcase, Brain, MessageCircle, ChevronDown, TrendingUp, Award, Calendar } from 'lucide-react'

export default function Home() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-teal-50 to-slate-200">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-16 pb-12 max-w-5xl">
        <div className="text-center mb-8 pt-8">
          <h1 className="text-7xl font-bold text-slate-800 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-slate-700">Votre concierge numérique <br/> <span className="text-teal-600">de confiance</span></span>
          </h1>
          <p className="text-lg text-slate-700 mb-1 max-w-3xl mx-auto leading-relaxed animate-fade-in-up mt-12" style={{ animationDelay: '0.2s' }}>
            Un PC lent ? Une imprimante qui boude ? Un site administratif incompréhensible ? Comment utiliser l'IA?
          </p>
          <p className="text-2xl font-semibold text-slate-800 mb-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Ne restez pas seul face au numérique.
          </p>

          {/* Prominent Phone Number */}
          <div className="mb-8 animate-fade-in-up mt-12" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-1">
              <a href="tel:+33744985723" className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-slate-800 hover:text-teal-600 transition-all hover:scale-105 cursor-pointer">
                <Phone className="w-7 h-7 md:w-8 md:h-8 animate-pulse-subtle" />
                <span>07 44 98 57 23</span>
              </a>
              <span className="hidden md:inline text-slate-400">ou</span>
              <a href="https://wa.me/33744985723" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all hover:scale-105 cursor-pointer shadow-lg">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">WhatsApp</span>
              </a>
            </div>
            <p className="text-sm text-slate-600">Disponible 7j/7 pour vos urgences • Réponse en moins de 2h</p>
          <div className="animate-fade-in-up mt-8" style={{ animationDelay: '0.5s' }}>
              <Button size="lg" onClick={scrollToContact} className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white text-lg px-8 py-6 shadow-lg shadow-slate-500/30 transition-all hover:scale-105 cursor-pointer">
                  Prendez rendez-vous maintenant!
              </Button>
          </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-4 mb-12 mt-12">
          <div className="bg-gradient-to-br from-white to-teal-50 backdrop-blur-sm rounded-xl p-4 border border-teal-200 shadow-sm text-center animate-fade-in-up hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '0.6s' }}>
            <Clock className="w-8 h-8 text-teal-600 mx-auto mb-2" />
            <p className="font-semibold text-slate-800">Intervention rapide</p>
            <p className="text-sm text-slate-600">Sous 48h en semaine</p>
          </div>
          <div className="bg-gradient-to-br from-white to-teal-50 backdrop-blur-sm rounded-xl p-4 border border-teal-200 shadow-sm text-center animate-fade-in-up hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '0.7s' }}>
            <Shield className="w-8 h-8 text-teal-600 mx-auto mb-2" />
            <p className="font-semibold text-slate-800">Garantie satisfaction</p>
            <p className="text-sm text-slate-600">Problème non résolu = remboursé</p>
          </div>
            <div className="bg-gradient-to-br from-white to-teal-50 backdrop-blur-sm rounded-xl p-4 border border-teal-200 shadow-sm text-center animate-fade-in-up hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '0.7s' }}>
                <Star className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <p className="font-semibold text-slate-800">Service de proximité</p>
                <p className="text-sm text-slate-600">Déplacement à domicile</p>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-4xl font-bold text-center mb-16 text-slate-800">
            J'interviens chez vous pour :
          </h3>

          {/* Dépannage & Installation */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center shadow-lg shadow-slate-500/30">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-slate-800">Dépannage & Installation</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <Laptop className="w-10 h-10 text-slate-700 mb-4 transition-all duration-300 group-hover:text-teal-600 group-hover:scale-110 group-hover:-rotate-6" />
                <h5 className="text-xl font-semibold mb-3 text-slate-800 transition-colors duration-300 group-hover:text-teal-600">Urgence classique</h5>
                <p className="text-slate-700 leading-relaxed">
                  Résolution des pannes PC/Mac, optimisation (lenteurs), configuration Wi-Fi, imprimantes, objets connectés.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <Wifi className="w-10 h-10 text-slate-700 mb-4 transition-all duration-300 group-hover:text-teal-600 group-hover:scale-110 group-hover:rotate-6" />
                <h5 className="text-xl font-semibold mb-3 text-slate-800 transition-colors duration-300 group-hover:text-teal-600">Installation</h5>
                <p className="text-slate-700 leading-relaxed">
                  Mise en service de vos nouveaux appareils pour que tout fonctionne parfaitement dès le premier jour.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <Briefcase className="w-10 h-10 text-slate-700 mb-4 transition-all duration-300 group-hover:text-teal-600 group-hover:scale-110 group-hover:-rotate-12" />
                <h5 className="text-xl font-semibold mb-3 text-slate-800 transition-colors duration-300 group-hover:text-teal-600">Support PME</h5>
                <p className="text-slate-700 leading-relaxed">
                  Assistance IT pour petites entreprises : réseau, sécurité, maintenance préventive et formation des équipes.
                </p>
              </div>
            </div>
          </div>

          {/* Formation & Découverte */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center shadow-lg shadow-slate-500/30">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-3xl font-bold text-slate-800">Formation & Découverte</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <Sparkles className="w-10 h-10 text-slate-700 mb-4 transition-all duration-300 group-hover:text-teal-600 group-hover:scale-110 group-hover:-rotate-12" />
                <h5 className="text-xl font-semibold mb-3 text-slate-800 transition-colors duration-300 group-hover:text-teal-600">Initiation à l'IA</h5>
                <p className="text-slate-700 leading-relaxed">
                  Démystifier l'IA, comment elle fonctionne et comment elle peut vous aider.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <Brain className="w-10 h-10 text-slate-700 mb-4 transition-all duration-300 group-hover:text-teal-600 group-hover:scale-110 group-hover:rotate-12" />
                <h5 className="text-xl font-semibold mb-3 text-slate-800 transition-colors duration-300 group-hover:text-teal-600">IA Prompting</h5>
                <p className="text-slate-700 leading-relaxed">
                  Apprenez à communiquer efficacement avec les outils d'IA pour obtenir les meilleurs résultats.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                <Code className="w-10 h-10 text-slate-700 mb-4 transition-all duration-300 group-hover:text-teal-600 group-hover:scale-110 group-hover:-rotate-6" />
                <h5 className="text-xl font-semibold mb-3 text-slate-800 transition-colors duration-300 group-hover:text-teal-600">Software Tutoring</h5>
                <p className="text-slate-700 leading-relaxed">
                  Support codage et aide aux projets web pour débutants et intermédiaires.
                </p>
              </div>
            </div>
          </div>

            {/* Conseil & Accompagnement */}
            <div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center shadow-lg shadow-slate-500/30">
                        <Shield className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-3xl font-bold text-slate-800">Conseil & Accompagnement</h4>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                        <ShoppingCart className="w-10 h-10 text-slate-700 mb-4 transition-all duration-300 group-hover:text-teal-600 group-hover:scale-110 group-hover:rotate-6" />
                        <h5 className="text-xl font-semibold mb-3 text-slate-800 transition-colors duration-300 group-hover:text-teal-600">Aide à l'achat</h5>
                        <p className="text-slate-700 leading-relaxed">
                            Je vous aide à choisir le bon matériel (PC, smartphone, TV, forfait internet...) selon vos vrais besoins et votre budget, en toute indépendance.
                        </p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                        <FileCheck className="w-10 h-10 text-slate-700 mb-4 transition-all duration-300 group-hover:text-teal-600 group-hover:scale-110 group-hover:-rotate-12" />
                        <h5 className="text-xl font-semibold mb-3 text-slate-800 transition-colors duration-300 group-hover:text-teal-600">Assistance administrative</h5>
                        <p className="text-slate-700 leading-relaxed">
                            Je vous accompagne pas à pas sur les sites web complexes (Impôts, Ameli, banque, prise de rendez-vous...). Fini l'angoisse de "mal cliquer".
                        </p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                        <Lock className="w-10 h-10 text-slate-700 mb-4 transition-all duration-300 group-hover:text-teal-600 group-hover:scale-110 group-hover:rotate-12" />
                        <h5 className="text-xl font-semibold mb-3 text-slate-800 transition-colors duration-300 group-hover:text-teal-600">Prévention & Sécurité</h5>
                        <p className="text-slate-700 leading-relaxed">
                            Conseils anti-arnaque concrets, sécurisation de vos comptes et protection de vos données.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-b from-white via-slate-100 to-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gradient-to-br from-white via-teal-50/30 to-slate-50 rounded-2xl p-12 text-center border border-teal-100 shadow-lg shadow-teal-500/10">
            <h3 className="text-3xl font-bold mb-6 text-slate-800">Mon approche</h3>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-2 group cursor-pointer">
                <CheckCircle2 className="w-6 h-6 text-slate-700 transition-all duration-300 group-hover:text-teal-600 group-hover:scale-125 group-hover:rotate-12" />
                <span className="text-xl font-semibold text-slate-800 transition-colors duration-300 group-hover:text-teal-600">Simple</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <CheckCircle2 className="w-6 h-6 text-slate-700 transition-all duration-300 group-hover:text-teal-600 group-hover:scale-125 group-hover:-rotate-12" />
                <span className="text-xl font-semibold text-slate-800 transition-colors duration-300 group-hover:text-teal-600">Rapide</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <CheckCircle2 className="w-6 h-6 text-slate-700 transition-all duration-300 group-hover:text-teal-600 group-hover:scale-125 group-hover:rotate-12" />
                <span className="text-xl font-semibold text-slate-800 transition-colors duration-300 group-hover:text-teal-600">Pédagogique</span>
              </div>
            </div>
            <p className="text-2xl text-slate-700 font-medium">
              Vous avez une question ? <span className="text-slate-800 font-bold">Vous avez votre contact.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-slate-200 via-teal-50/40 to-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-4xl font-bold text-center mb-4 text-slate-800">
            Ce que disent mes clients
          </h3>
          <p className="text-center text-slate-600 mb-12 text-lg">
            La satisfaction de mes clients est ma priorité
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200 flex flex-col justify-between">
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-teal-600 text-teal-600" />
                    ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "Dans le passé, j'ai été victime d'une escroquerie en ligne. Mais grâce à de précieux conseils et astuces j'ai appris à reconnaître les indices suspects."              </p>
              <p className="font-semibold text-slate-800">Roxane M.</p>
            </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200 flex flex-col justify-between">
                  <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-teal-600 text-teal-600" />
                      ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">
                  "Formidable !!!
                  Simple ! Rapide  mon imprimante ne marchait plus et mon PC était lent  ! Grasse a l’intervention d’Alex j’évite le changement de matériel
                  Le morale revient !!! Bravo !!!"
              </p>
              <p className="font-semibold text-slate-800">Florient, 68 ans</p>
              <p className="text-sm text-slate-600">Paris</p>
          </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200 flex flex-col justify-between">
                  <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-teal-600 text-teal-600" />
                      ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">
                "Mes enfants avaient du mal en maths. Grâce à ChatGPT et ses explications j'étais beaucoup plus à l'aise pour leur expliquer les choses, et j'ai pu rafraîchir mes propres connaissances."
              </p>
              <p className="font-semibold text-slate-800">Yvonne M.</p>
              <p className="text-sm text-slate-600">Maman de 2 enfants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-b from-slate-100 via-teal-50/30 to-slate-300 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-500/20 p-10 md:p-14 border border-slate-200">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">Contactez-moi</h2>
            <p className="text-center text-lg text-slate-700 mb-10">
              Pour un diagnostic ou un simple conseil
            </p>

            <div className="space-y-6 max-w-md mx-auto">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-500/30">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-700 font-medium">Téléphone</p>
                  <a href="tel:+33123456789" className="text-lg font-semibold text-slate-800 hover:text-slate-700">
                    07 44 98 57 23
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-500/30">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-700 font-medium">Email</p>
                  <a href="mailto:contact@concierge-numerique.fr" className="text-lg font-semibold text-slate-800 hover:text-slate-700 break-all">
                    contact@concierge-numerique.fr
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-500/30">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-700 font-medium">Zone d'intervention</p>
                  <p className="text-lg font-semibold text-slate-800">Le Perreux-sur-Marne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg mb-2">
            <strong className="text-white">Lebonclick</strong> — Concierge Numérique • Le Perreux-sur-Marne
          </p>
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}

