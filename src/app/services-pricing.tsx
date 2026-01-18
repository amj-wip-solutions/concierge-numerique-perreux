'use client'

import {
    Wrench, // Dépannage
    ShieldCheck, // Sécurité & Admin
    ShoppingCart, // Achat & Conseil
    BrainCircuit, // IA & Formation
    CheckCircle2
} from 'lucide-react'

export default function ServicesAndPricing() {
    const services = [
        {
            icon: <Wrench className="w-8 h-8 text-teal-600" />,
            title: "Dépannage & Technique",
            description: "Je règle les pannes matérielles et logicielles du quotidien.",
            items: [
                "Imprimantes & Scanners",
                "WiFi & Connexion Internet",
                "PC lent & Nettoyage",
                "Transfert de photos/données"
            ]
        },
        {
            icon: <ShoppingCart className="w-8 h-8 text-teal-600" />,
            title: "Conseil & Achat",
            description: "Je vous aide à choisir et installer le matériel adapté à vos besoins.",
            items: [
                "Aide à l'achat (PC, Tel, TV)",
                "Conseil Forfaits (Internet/Mobile)",
                "Mise en service à domicile",
                "Installation logiciels"
            ]
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
            title: "Admin & Sécurité",
            description: "Naviguez sans crainte et gérez vos démarches sans stress.",
            items: [
                "Aide Admin (Impôts, Ameli...)",
                "Détection des Arnaques",
                "Mots de passe sécurisés",
                "Nettoyage virus/pubs"
            ]
        },
        {
            icon: <BrainCircuit className="w-8 h-8 text-teal-600" />,
            title: "Formation & IA",
            description: "Apprenez à maîtriser vos outils et découvrez l'IA.",
            items: [
                "Initiation ChatGPT & IA",
                "Prompting (Parler à l'IA)",
                "Formation Smartphone/PC",
                "Classement Emails & Photos"
            ]
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Mes Services</h3>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Une offre complète pour votre vie numérique. <br/>
                        <span className="font-semibold text-teal-700">Pédagogie et patience garanties.</span>
                    </p>
                </div>

                {/* 4 Columns Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-teal-100 transition-all duration-300 group flex flex-col h-full">
                            <div className="bg-teal-50 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h4>
                            <p className="text-slate-600 mb-5 text-sm leading-relaxed min-h-[40px]">
                                {service.description}
                            </p>

                            {/* Separator */}
                            <div className="w-full h-px bg-slate-100 mb-5"></div>

                            <ul className="space-y-3 flex-grow">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        <span className="leading-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Pricing Bar */}
                <div className="bg-slate-900 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden shadow-2xl max-w-5xl mx-auto">
                    {/* Decoration background */}
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-teal-500 rounded-full opacity-20 blur-3xl"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="text-center md:text-left">
                            <h4 className="text-3xl font-bold mb-2">Tarif Unique</h4>
                            <p className="text-slate-300 text-lg">Pas de frais cachés. Déplacement inclus*.</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right hidden md:block">
                                <p className="text-sm text-slate-400">Prix public</p>
                                <p className="text-2xl font-bold line-through decoration-red-500 decoration-2">70€ /h</p>
                            </div>
                            <div className="bg-white text-slate-900 px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-lg transform md:scale-110">
                                {/* Increased label size */}
                                <p className="text-xs md:text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">Coût réel pour vous</p>
                                <p className="text-3xl md:text-4xl font-extrabold text-teal-600">35€ <span className="text-lg md:text-xl text-slate-400 font-normal">/h</span></p>
                            </div>
                        </div>
                    </div>

                    {/* FIXED: Increased font size (text-sm) and full town names */}
                    <div className="text-sm text-slate-300 mt-8 text-center md:text-left border-t border-slate-700 pt-6 leading-relaxed opacity-90">
                        <p className="mb-2">
                            *Déplacement offert : Le Perreux-sur-Marne, Nogent-sur-Marne, Bry-sur-Marne, Champigny-sur-Marne, Neuilly-Plaisance.
                        </p>
                        <p>
                            Première heure indivisible, puis facturation au ¼ d'heure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}