# Concierge Numérique - Site Web

Site web professionnel pour le service de concierge numérique au Perreux-sur-Marne.

## Description

Site vitrine une page pour présenter les services de conseil, dépannage et accompagnement informatique à domicile.

**Design traditionnel et accessible** conçu spécifiquement pour un public senior :
- Texte large et très lisible (text-xl à text-4xl)
- Couleurs chaudes et rassurantes (ambre, bleu doux, vert)
- Mise en page claire avec beaucoup d'espace blanc
- Navigation simple et intuitive
- Style professionnel et chaleureux

## Technologies

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - Composants UI
- **Lucide React** - Icônes

## Développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Build Production

```bash
# Créer un build optimisé
npm run build

# Lancer le serveur de production
npm start
```

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx       # Layout principal avec métadonnées
│   ├── page.tsx         # Page d'accueil
│   └── globals.css      # Styles globaux
└── components/
    ├── ui/              # Composants shadcn/ui
    ├── hero-section.tsx # Section hero avec CTA
    └── contact-form.tsx # Formulaire de contact
```

## Sections du site

1. **Hero** - Titre principal et call-to-action
2. **Introduction** - Présentation du concierge numérique
3. **Services** - 3 catégories de services (Conseil, Dépannage, Formation)
4. **Approche** - Valeurs (Simple, Rapide, Pédagogique)
5. **Contact** - Formulaire et coordonnées
6. **Footer** - Informations légales

## Personnalisation

Pour personnaliser les informations de contact, modifiez les valeurs dans `src/app/page.tsx` :
- Téléphone
- Email
- Zone d'intervention

## Déploiement

Le site peut être déployé sur :
- [Vercel](https://vercel.com) (recommandé pour Next.js)
- [Netlify](https://netlify.com)
- Tout hébergeur supportant Node.js

## À faire

- [ ] Ajouter les coordonnées réelles (téléphone, email)
- [ ] Configurer l'envoi du formulaire de contact (API, email service)
- [ ] Ajouter Google Analytics ou autre tracking
- [ ] Optimiser les images SEO
- [ ] Ajouter un favicon personnalisé

## License

© 2025 Alexander McLean-Janet - Tous droits réservés

