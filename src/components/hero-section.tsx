"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-gradient-to-br from-slate-700 to-slate-800 text-white py-12 px-6 border-b-4 border-slate-600 min-h-[70vh] max-h-[100vh] flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Votre concierge numérique au Perreux-sur-Marne
          </h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 inline-block">
            <p className="text-xl md:text-2xl font-semibold text-slate-100">
              Conseil · Dépannage · Accompagnement
            </p>
          </div>
          <div className="bg-white text-gray-800 rounded-lg p-6 shadow-xl max-w-3xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed">
              Un ordinateur lent ? Une imprimante qui ne fonctionne plus ?<br/>
              Un site administratif compliqué ? Un doute avant un achat ?<br/>
              Un email suspect ?
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 mb-6 inline-block">
            <p className="text-xl md:text-2xl font-bold text-white">
              Ne restez pas seul face au numérique
            </p>
          </div>
          <div>
            <Button
              size="lg"
              className="text-xl px-10 py-6 bg-blue-600 text-white hover:bg-blue-700 font-bold shadow-xl transition-colors"
              onClick={scrollToContact}
            >
              ☎️ Contactez-moi maintenant
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

