import type { Metadata, Viewport } from "next";
import {Inter, Manrope} from "next/font/google";
import "./globals.css";

// Configure Manrope for Headings
const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
});

// Configure Inter for Body
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5, // Allows seniors to zoom
    themeColor: '#14b8a6',
}

export const metadata: Metadata = {
    metadataBase: new URL('https://lebonclick.fr'),
    title: {
        default: "Assistance Informatique à Domicile | Le Perreux-sur-Marne & Paris | Lebonclick",
        template: "%s | Lebonclick"
    },
    description: "Dépannage informatique, assistance administrative et formation IA à domicile. Agréé Service à la Personne (50% de crédit d'impôt). Déplacement au Perreux, 94 et Paris.",
    keywords: [
        "Assistance informatique domicile",
        "Dépannage informatique Le Perreux-sur-Marne",
        "Prestataire informatique Val-de-Marne",
        "Assistance informatique et internet à domicile",
        "Formation internet seniors",
        "Formation IA ChatGPT domicile",
        "Service à la personne informatique 94",
        "Crédit impôt aide informatique",
    ],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    // JSON-LD for Google Local Business + Services
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Lebonclick',
        image: 'https://lebonclick.fr/og-image.png',
        '@id': 'https://lebonclick.fr/',
        url: 'https://lebonclick.fr/',
        description: "Support Informatique, Dépannage, formation IA et assistance administrative à domicile au Perreux-sur-Marne, Val-de-Marne et Paris. Prestataire agréé Service à la Personne.",
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Le Perreux-sur-Marne',
            postalCode: '94170',
            addressRegion: 'Île-de-France',
            addressCountry: 'FR',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 48.8422,
            longitude: 2.5048,
        },
        telephone: '+33744985723',
        priceRange: '50€ - 100€',
        areaServed: [
            "Le Perreux-sur-Marne",
            "Nogent-sur-Marne",
            "Bry-sur-Marne",
            "Neuilly-Plaisance",
            "Champigny-sur-Marne",
            "Vincennes",
            "Paris",
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services Informatiques Domicile",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dépannage PC/Mac Domicile" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Formation IA (ChatGPT) & Numérique" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Assistance Administrative & Sécurité" } }
            ]
        }
    };

    return (
        <html lang="fr">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </head>
        <body className={`${inter.variable} ${manrope.variable} antialiased font-sans`}>
        {children}
        </body>
        </html>
    );
}