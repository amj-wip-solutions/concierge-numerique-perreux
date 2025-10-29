'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle2, Shield, Laptop, Phone, Mail, MapPin, Wifi, Lock, GraduationCap, Wrench, ShoppingCart, FileCheck, Sparkles, Code, Clock, Star, Users, Briefcase } from 'lucide-react'

export default function Home() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-16 pb-12 max-w-5xl">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              🏡 Service local • Le Perreux-sur-Marne
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Votre concierge numérique<br />
            <span className="bg-gradient-to-r from-slate-700 via-teal-600 to-slate-700 bg-clip-text text-transparent">de confiance</span>
          </h1>
          <p className="text-xl text-slate-700 mb-4 max-w-3xl mx-auto leading-relaxed">
            Un PC lent ? Une imprimante qui boude ? Un site administratif incompréhensible ?
          </p>
          <p className="text-2xl font-semibold text-slate-800 mb-6">
            Ne restez pas seul face au numérique.
          </p>

          {/* Prominent Phone Number */}
          <div className="mb-8">
            <a href="tel:+33651234567" className="inline-flex items-center gap-3 text-3xl font-bold text-slate-800 hover:text-teal-600 transition-colors">
              <Phone className="w-8 h-8" />
              <span>06 51 23 45 67</span>
            </a>
            <p className="text-sm text-slate-600 mt-2">Disponible 7j/7 pour vos urgences</p>
          </div>

          <Button size="lg" onClick={scrollToContact} className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white text-lg px-8 py-6 shadow-lg shadow-slate-500/30">
            Prendre rendez-vous gratuitement
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-4 mb-12 mt-12">
          <div className="bg-gradient-to-br from-white to-teal-50 backdrop-blur-sm rounded-xl p-4 border border-teal-200 shadow-sm text-center">
            <Clock className="w-8 h-8 text-teal-600 mx-auto mb-2" />
            <p className="font-semibold text-slate-800">Intervention rapide</p>
            <p className="text-sm text-slate-600">Sous 48h en semaine</p>
          </div>
            <div className="bg-gradient-to-br from-white to-teal-50 backdrop-blur-sm rounded-xl p-4 border border-teal-200 shadow-sm text-center">
            <Star className="w-8 h-8 text-teal-600 mx-auto mb-2" />
            <p className="font-semibold text-slate-800">Service de proximité</p>
            <p className="text-sm text-slate-600">Déplacement à domicile</p>
          </div>
          <div className="bg-gradient-to-br from-white to-teal-50 backdrop-blur-sm rounded-xl p-4 border border-teal-200 shadow-sm text-center">
            <Users className="w-8 h-8 text-teal-600 mx-auto mb-2" />
            <p className="font-semibold text-slate-800">Pédagogue & Patient</p>
            <p className="text-sm text-slate-600">Adapté à tous les âges</p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-200 shadow-lg shadow-slate-500/10">
          <p className="text-lg text-slate-700 leading-relaxed text-center">
            Votre concierge numérique de quartier au Perreux-sur-Marne.
            Mon objectif est simple : être votre <strong className="text-slate-800">interlocuteur de confiance</strong> pour toutes vos questions technologiques,
            des plus simples aux plus complexes. <strong className="text-teal-700">Vous ne serez plus jamais seul face à la technologie.</strong>
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-b from-teal-50/50 via-slate-100 to-teal-50/30 py-20">
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
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 transition-all">
                <Laptop className="w-10 h-10 text-slate-700 mb-4" />
                <h5 className="text-xl font-semibold mb-3 text-slate-800">Urgence classique</h5>
                <p className="text-slate-700 leading-relaxed">
                  Résolution des pannes PC/Mac, optimisation (lenteurs), configuration Wi-Fi, imprimantes, objets connectés.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 transition-all">
                <Wifi className="w-10 h-10 text-slate-700 mb-4" />
                <h5 className="text-xl font-semibold mb-3 text-slate-800">Installation</h5>
                <p className="text-slate-700 leading-relaxed">
                  Mise en service de vos nouveaux appareils pour que tout fonctionne parfaitement dès le premier jour.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 transition-all">
                <Briefcase className="w-10 h-10 text-slate-700 mb-4" />
                <h5 className="text-xl font-semibold mb-3 text-slate-800">Support PME</h5>
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
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 transition-all">
                <Sparkles className="w-10 h-10 text-slate-700 mb-4" />
                <h5 className="text-xl font-semibold mb-3 text-slate-800">Initiation à l'IA</h5>
                <p className="text-slate-700 leading-relaxed">
                  Démystifier ChatGPT pour vous et vos enfants (y compris pour surmonter les blocages scolaires, comme en maths !).
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 transition-all">
                <Sparkles className="w-10 h-10 text-slate-700 mb-4" />
                <h5 className="text-xl font-semibold mb-3 text-slate-800">AI Prompting</h5>
                <p className="text-slate-700 leading-relaxed">
                  Apprenez à communiquer efficacement avec les outils d'IA pour obtenir les meilleurs résultats.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 transition-all">
                <Code className="w-10 h-10 text-slate-700 mb-4" />
                <h5 className="text-xl font-semibold mb-3 text-slate-800">Software Tutoring</h5>
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
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 transition-all">
                        <ShoppingCart className="w-10 h-10 text-slate-700 mb-4" />
                        <h5 className="text-xl font-semibold mb-3 text-slate-800">Aide à l'achat</h5>
                        <p className="text-slate-700 leading-relaxed">
                            Je vous aide à choisir le bon matériel (PC, smartphone, TV, forfait internet...) selon vos vrais besoins et votre budget, en toute indépendance.
                        </p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 transition-all">
                        <FileCheck className="w-10 h-10 text-slate-700 mb-4" />
                        <h5 className="text-xl font-semibold mb-3 text-slate-800">Assistance administrative</h5>
                        <p className="text-slate-700 leading-relaxed">
                            Je vous accompagne pas à pas sur les sites web complexes (Impôts, Ameli, banque, prise de rendez-vous...). Fini l'angoisse de "mal cliquer".
                        </p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-teal-100 hover:shadow-lg hover:shadow-teal-500/20 hover:border-teal-200 transition-all">
                        <Lock className="w-10 h-10 text-slate-700 mb-4" />
                        <h5 className="text-xl font-semibold mb-3 text-slate-800">Prévention & Sécurité</h5>
                        <p className="text-slate-700 leading-relaxed">
                            Conseils anti-arnaque concrets, sécurisation de vos comptes et protection de vos données.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-b from-teal-50/30 via-slate-100 to-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gradient-to-br from-white via-teal-50/30 to-slate-50 rounded-2xl p-12 text-center border border-teal-100 shadow-lg shadow-teal-500/10">
            <h3 className="text-3xl font-bold mb-6 text-slate-800">Mon approche</h3>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-slate-700" />
                <span className="text-xl font-semibold text-slate-800">Simple</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-slate-700" />
                <span className="text-xl font-semibold text-slate-800">Rapide</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-slate-700" />
                <span className="text-xl font-semibold text-slate-800">Pédagogique</span>
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
            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-teal-600 text-teal-600" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">
                "Enfin quelqu'un qui prend le temps d'expliquer sans me faire sentir incompétente ! Mon ordinateur est comme neuf et j'ai même appris à faire mes démarches en ligne."
              </p>
              <p className="font-semibold text-slate-800">Marie, 68 ans</p>
              <p className="text-sm text-slate-600">Le Perreux-sur-Marne</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-teal-600 text-teal-600" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">
                "Intervention rapide pour notre PME. Réseau configuré, sécurité renforcée, et formation de l'équipe. Service pro et tarifs honnêtes."
              </p>
              <p className="font-semibold text-slate-800">Thomas D.</p>
              <p className="text-sm text-slate-600">Gérant, Petite entreprise locale</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-teal-600 text-teal-600" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">
                "Mes enfants avaient du mal en maths. Grâce à ChatGPT et ses explications, ils comprennent mieux et gagnent en autonomie. Merci !"
              </p>
              <p className="font-semibold text-slate-800">Sophie M.</p>
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
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-500/30">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-700 font-medium">Téléphone</p>
                  <a href="tel:+33123456789" className="text-lg font-semibold text-slate-800 hover:text-slate-700">
                    06 XX XX XX XX
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200">
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

            <div className="mt-10 text-center">
              <Button size="lg" className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white text-lg px-10 py-6 shadow-lg shadow-slate-500/30">
                Demander un rendez-vous
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg mb-2">
            <strong className="text-white">Concierge Numérique</strong> — Le Perreux-sur-Marne
          </p>
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}

