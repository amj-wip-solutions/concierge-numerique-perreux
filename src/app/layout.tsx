import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

// Inter: Modern, highly readable sans-serif - perfect for body text and UI
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Lora: Warm, friendly serif - perfect for headings to build trust
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#14b8a6',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://lebonclick.fr'),
  title: {
    default: "Lebonclick - Aide Informatique Le Perreux-sur-Marne (94) | IA & Assistance Seniors",
    template: "%s | Lebonclick - Concierge Numérique"
  },
  description: "Service d'aide informatique à domicile au Perreux-sur-Marne (94). Formation IA, intelligence artificielle pour seniors. Dépannage PC, assistance administrative, prévention arnaques. Intervention rapide Val-de-Marne.",
  keywords: [
    // Mots-clés principaux - IA et intelligence artificielle
    "intelligence artificielle",
    "IA",
    "formation IA seniors",
    "initiation intelligence artificielle",
    "apprendre IA",
    "ChatGPT seniors",
    "IA pour débutants",

    // Localisation géographique
    "Le Perreux-sur-Marne",
    "Perreux sur Marne",
    "94170",
    "Val-de-Marne",
    "94",
    "Nogent-sur-Marne",
    "Neuilly-sur-Marne",
    "Bry-sur-Marne",
    "Champigny-sur-Marne",
    "Fontenay-sous-Bois",

    // Services informatiques
    "aide informatique",
    "assistance informatique",
    "dépannage informatique",
    "réparation ordinateur",
    "PC lent",
    "aide informatique seniors",
    "aide informatique personnes âgées",
    "cours informatique seniors",
    "formation informatique seniors",
    "assistance informatique à domicile",

    // Services spécifiques
    "aide administrative en ligne",
    "impots.gouv.fr aide",
    "ameli assistance",
    "prévention arnaques internet",
    "sécurité informatique seniors",
    "installation imprimante",
    "configuration wifi",
    "aide achat ordinateur",

    // Concierge numérique
    "concierge numérique",
    "concierge digital",
    "assistance numérique",
    "aide numérique",
    "inclusion numérique",
    "fracture numérique",

    // Support TPE/PME
    "dépannage informatique entreprise",
    "assistance IT TPE",
    "maintenance informatique",
  ].join(", "),
  authors: [{ name: "Alexander McLean-Janet" }],
  creator: "Alexander McLean-Janet",
  category: "Services informatiques",
  classification: "Aide informatique et formation IA",
  icons: {
    icon: [
      { url: '/icon', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lebonclick.fr",
    siteName: "Lebonclick - Aide Informatique & Formation IA",
    title: "Lebonclick - Aide Informatique & IA au Perreux-sur-Marne (94)",
    description: "Expert en aide informatique à domicile et formation intelligence artificielle pour seniors au Perreux-sur-Marne. Dépannage PC, assistance administrative, prévention arnaques. Intervention rapide 07 44 98 57 23",
    images: [
      {
        url: 'https://lebonclick.fr/opengraph-image',
        secureUrl: 'https://lebonclick.fr/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Lebonclick - Aide Informatique & Formation IA - Le Perreux-sur-Marne - 07 44 98 57 23',
        type: 'image/png',
      },
      {
        url: 'https://lebonclick.fr/og-image.png',
        secureUrl: 'https://lebonclick.fr/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lebonclick - Votre concierge numérique de confiance',
        type: 'image/png',
      },
      {
        url: 'https://lebonclick.fr/favicon.png',
        secureUrl: 'https://lebonclick.fr/favicon.png',
        width: 512,
        height: 512,
        alt: 'Lebonclick Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lebonclick - Aide Informatique & IA Le Perreux-sur-Marne",
    description: "Formation IA pour seniors, dépannage informatique, assistance administrative. Intervention rapide au Perreux-sur-Marne (94).",
    images: ['https://lebonclick.fr/twitter-image'],
    creator: '@lebonclick',
    site: '@lebonclick',
  },
  alternates: {
    canonical: 'https://lebonclick.fr',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Lebonclick',
    image: 'https://lebonclick.fr/og-image.png',
    description: "Service d'aide informatique à domicile et formation intelligence artificielle pour seniors au Perreux-sur-Marne (94). Dépannage PC, assistance administrative, prévention arnaques.",
    '@id': 'https://lebonclick.fr',
    url: 'https://lebonclick.fr',
    telephone: '+33744985723',
    email: 'alex@lebonclick.fr',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Le Perreux-sur-Marne',
      addressLocality: 'Le Perreux-sur-Marne',
      postalCode: '94170',
      addressRegion: 'Val-de-Marne',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8422,
      longitude: 2.5048,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Le Perreux-sur-Marne',
      },
      {
        '@type': 'City',
        name: 'Nogent-sur-Marne',
      },
      {
        '@type': 'City',
        name: 'Neuilly-sur-Marne',
      },
      {
        '@type': 'City',
        name: 'Bry-sur-Marne',
      },
      {
        '@type': 'City',
        name: 'Champigny-sur-Marne',
      },
      {
        '@type': 'City',
        name: 'Fontenay-sous-Bois',
      },
    ],
    serviceType: [
      'Aide informatique',
      'Formation intelligence artificielle',
      'Dépannage informatique',
      'Assistance administrative numérique',
      'Prévention arnaques internet',
      'Formation IA seniors',
      'Support informatique TPE',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    sameAs: [
      'https://wa.me/33744985723',
    ],
    founder: {
      '@type': 'Person',
      name: 'Alexander McLean-Janet',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '3',
    },
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${lora.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
