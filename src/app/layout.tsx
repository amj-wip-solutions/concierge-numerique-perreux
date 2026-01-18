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
        default: "Dépannage Informatique & Formation Seniors | Le Perreux (94)",
        template: "%s | Lebonclick"
    },
    description: "Expert patience pour seniors : Dépannage ordinateur, tablette, Internet à domicile. Agréé Service à la Personne (-50% crédit d'impôt). Le Perreux, Nogent, Bry.",
    keywords: [
        "Dépannage informatique Le Perreux",
        "Formation internet seniors",
        "Assistance informatique domicile 94",
        "Installation imprimante",
        "Cours tablette senior",
        "Service à la personne informatique"
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
        image: 'https://lebonclick.fr/og-image.png', // Make sure to add this image later
        description: "Service d'aide informatique à domicile agréé SAP pour seniors au Perreux-sur-Marne.",
        address: {
            '@type': 'PostalAddress',
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
        telephone: '+33744985723',
        priceRange: '$$',
        areaServed: ["Le Perreux-sur-Marne", "Nogent-sur-Marne", "Bry-sur-Marne", "Neuilly-Plaisance", "Champigny-sur-Marne"],
        // Crucial for SAP visibility
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services Informatiques Domicile",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dépannage PC/Mac Domicile" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Formation Internet Seniors" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Assistance Administrative" } }
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