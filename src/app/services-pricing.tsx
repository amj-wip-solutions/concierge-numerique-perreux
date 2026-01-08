'use client'

import { useState } from 'react'
import { CheckCircle2, Sparkles, Wrench, Wifi, BookOpen, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

const pricingCategories = [
    {
        id: 'depannage',
        label: 'Dépannage',
        icon: <Wrench className="w-5 h-5" />,
        items: [
            {
                title: "Intervention Classique",
                desc: "Pour les problèmes courants : lenteurs, virus, publicités, email bloqué.",
                price: "70€",
                netPrice: "35€",
                unit: "/ heure",
                features: ["Déplacement inclus (Le Perreux)", "1ère heure indivisible", "Puis facturé au ¼ d'heure"]
            },
            {
                title: "Nettoyage & Optimisation",
                desc: "Votre PC est lent ? Grand nettoyage de printemps pour lui redonner sa jeunesse.",
                price: "110€",
                netPrice: "55€",
                unit: "forfait",
                features: ["Suppression virus & malwares", "Mises à jour sécurité", "Durée : env. 1h30"]
            },
            {
                title: "Sauvegarde Données",
                desc: "Sécurisation de vos photos et documents sur disque externe ou Cloud.",
                price: "90€",
                netPrice: "45€",
                unit: "forfait",
                features: ["Config sauvegarde auto", "Transfert de données", "Tri des dossiers"]
            }
        ]
    },
    {
        id: 'installation',
        label: 'Installation',
        icon: <Wifi className="w-5 h-5" />,
        items: [
            {
                title: "Mise en Route PC/Mac",
                desc: "Vous avez un nouvel ordinateur ? Je m'occupe de tout de A à Z.",
                price: "140€",
                netPrice: "70€",
                unit: "forfait",
                features: ["Démarrage & Comptes", "Imprimante & Wifi", "Transfert anciennes données", "Durée : env. 2h"]
            },
            {
                title: "Box Internet & TV",
                desc: "Installation nouvelle Box, décodeur TV et connexion de vos appareils.",
                price: "80€",
                netPrice: "40€",
                unit: "forfait",
                features: ["Branchement Box", "Connexion Wifi partout", "Explication fonctionnement"]
            },
            {
                title: "Smartphone & Tablette",
                desc: "Configuration initiale, transfert contacts, WhatsApp.",
                price: "70€",
                netPrice: "35€",
                unit: "forfait",
                features: ["Transfert données", "Installation applis", "Réglage taille texte"]
            }
        ]
    },
    {
        id: 'formation',
        label: 'Formation',
        icon: <BookOpen className="w-5 h-5" />,
        items: [
            {
                title: "Cours à l'unité",
                desc: "Apprendre un sujet précis (Excel, Photos, Email, Internet).",
                price: "70€",
                netPrice: "35€",
                unit: "/ heure",
                features: ["Sujet au choix", "Sur votre matériel", "Support mémo inclus"]
            },
            {
                title: "Initiation IA",
                desc: "Découvrez ChatGPT et comment l'IA peut écrire vos courriers.",
                price: "140€",
                netPrice: "70€",
                unit: "forfait 2h",
                features: ["Créer un compte", "Apprendre à dialoguer", "Exemples concrets"]
            },
            {
                title: "Gestion Mots de Passe",
                desc: "Ne perdez plus jamais vos codes d'accès.",
                price: "80€",
                netPrice: "40€",
                unit: "forfait",
                features: ["Audit sécurité", "Carnet sécurisé", "Nettoyage anciens codes"]
            }
        ]
    },
    {
        id: 'admin',
        label: 'Administratif',
        icon: <FileText className="w-5 h-5" />,
        items: [
            {
                title: "Papiers en Ligne",
                desc: "Aide pour Impots.gouv, Ameli, Doctolib, ANTS.",
                price: "70€",
                netPrice: "35€",
                unit: "/ heure",
                features: ["Confidentialité totale", "Scan de documents", "Création d'espace"]
            },
            {
                title: "Aide à l'Achat",
                desc: "Je vous conseille pour acheter le bon matériel au juste prix.",
                price: "40€",
                netPrice: "20€",
                unit: "forfait",
                features: ["Analyse besoins", "Sélection 3 modèles", "Remboursé si installation"]
            }
        ]
    }
]

export default function ServicesAndPricing() {
    const [activeTab, setActiveTab] = useState('depannage')

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="py-20 bg-slate-50" id="tarifs">
            <div className="container mx-auto px-6 max-w-6xl">

                <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold text-slate-800 mb-4">
                        Tarifs clairs & Crédit d'Impôt
                    </h3>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Profitez de mon expertise à moitié prix grâce à l'agrément Service à la Personne.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 rounded-full px-4 py-1 mt-6">
                        <Sparkles className="w-4 h-4 text-teal-700" />
                        <span className="text-sm font-bold text-teal-800">50% Remboursés par l'État</span>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {pricingCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                                activeTab === cat.id
                                    ? 'bg-slate-800 text-white shadow-lg scale-105'
                                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                            }`}
                        >
                            {cat.icon}
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up mb-16">
                    {pricingCategories
                        .find(c => c.id === activeTab)
                        ?.items.map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-teal-400 transition-all duration-300 flex flex-col">
                                <div className="mb-6">
                                    <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                                    <p className="text-slate-500 text-sm min-h-[40px]">{item.desc}</p>
                                </div>
                                <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                                    <div className="flex justify-center items-baseline gap-2 mb-1">
                                        <span className="text-4xl font-bold text-teal-600">{item.netPrice}</span>
                                        <span className="text-slate-500 text-sm">{item.unit}</span>
                                    </div>
                                    <p className="text-xs text-teal-700 font-medium">Votre reste à charge</p>
                                    <div className="mt-3 pt-3 border-t border-slate-200">
                                        <p className="text-xs text-slate-400">
                                            Prix public : <span className="line-through">{item.price}</span>
                                        </p>
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-8 flex-grow">
                                    {item.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-600">
                                            <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button onClick={scrollToContact} className="w-full bg-slate-800 hover:bg-slate-900 text-white">
                                    Choisir ce forfait
                                </Button>
                            </div>
                        ))}
                </div>

                {/* The Subscription Alternative (Carnet d'Heures) */}
                <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold mb-4 border border-white/30">
                                BEST-SELLER TRANQUILLITÉ
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Le Carnet "10 Heures"</h3>
                            <p className="text-teal-50 text-lg mb-6">
                                Achetez vos heures à l'avance. Utilisez-les quand vous voulez (dépannage, cours, ou simple question).
                                Prioritaire sur le planning.
                            </p>
                            <ul className="space-y-2 mb-8">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                                    <span>Valable 1 an • Fractionnable (min 30 min)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white text-slate-800 p-6 rounded-xl text-center min-w-[280px]">
                            <p className="text-slate-400 text-sm line-through mb-1">Valeur : 700€</p>
                            <p className="text-5xl font-bold text-teal-600 mb-2">300€</p>
                            <p className="font-bold text-slate-600 text-sm">Net de votre poche</p>
                            <p className="text-xs text-slate-400 mt-2">(Après Crédit Impôt)</p>
                            <Button onClick={scrollToContact} className="w-full mt-4 bg-slate-900 text-white hover:bg-slate-800">
                                Commander
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}