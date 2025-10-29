# Configuration Notes

## ESLint Warnings in IDE

Si vous voyez des avertissements ESLint concernant les apostrophes et guillemets dans l'IDE, vous pouvez :

1. **Redémarrer l'IDE** - Cela force le rechargement de la configuration ESLint
2. **Ignorer les avertissements** - Le build fonctionne parfaitement malgré ces avertissements
3. **Vérifier que le build fonctionne** :
   ```bash
   npm run build
   ```

La règle `react/no-unescaped-entities` est désactivée dans `eslint.config.mjs` pour permettre l'utilisation naturelle du français avec apostrophes et guillemets.

## Prochaines étapes

### 1. Configurer les informations de contact

Dans `src/app/page.tsx`, remplacer :
```typescript
<a href="tel:+33" className="text-blue-600 hover:underline">
  À renseigner
</a>
```

Par votre numéro :
```typescript
<a href="tel:+33612345678" className="text-blue-600 hover:underline">
  06 12 34 56 78
</a>
```

Et l'email :
```typescript
<a href="mailto:votre.email@exemple.fr" className="text-blue-600 hover:underline">
  votre.email@exemple.fr
</a>
```

### 2. Configurer l'envoi du formulaire

Le formulaire dans `src/components/contact-form.tsx` affiche actuellement une alerte. Vous pouvez :

**Option A - Utiliser un service email (recommandé)**
- [Resend](https://resend.com) - Gratuit pour 3000 emails/mois
- [SendGrid](https://sendgrid.com) - Gratuit pour 100 emails/jour
- [EmailJS](https://www.emailjs.com) - Simple pour côté client

**Option B - API Route Next.js**
Créer `src/app/api/contact/route.ts` :
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Envoyer l'email via votre service
  // ...
  
  return NextResponse.json({ success: true });
}
```

### 3. Ajouter Google Analytics

Dans `src/app/layout.tsx`, ajouter le script Analytics dans le `<head>`.

### 4. Favicon personnalisé

Remplacer `src/app/favicon.ico` par votre propre favicon.

### 5. Images

Ajouter des images dans `/public` et les utiliser avec le composant `Image` de Next.js.

## Déploiement sur Vercel

1. Créer un compte sur [Vercel](https://vercel.com)
2. Connecter votre repo GitHub
3. Vercel détectera automatiquement Next.js
4. Cliquer "Deploy"

C'est tout ! Vercel configure automatiquement :
- SSL/HTTPS
- CDN global
- Déploiements automatiques à chaque push
- Preview deployments pour chaque PR

