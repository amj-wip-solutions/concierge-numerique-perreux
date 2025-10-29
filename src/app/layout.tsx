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
  title: "Lebonclick - Concierge Numérique",
  description: "Votre concierge numérique. Conseil, dépannage, accompagnement informatique à domicile. PC lent, imprimante, sites administratifs, aide à l'achat, IA, nous sommes présent pour toute vos questions tech.",
  keywords: "concierge numérique, dépannage informatique, Le Perreux-sur-Marne, assistance informatique, aide informatique seniors, réparation PC, installation imprimante",
  authors: [{ name: "Alexander McLean-Janet" }],
  creator: "Alexander McLean-Janet",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lebonclick.fr",
    siteName: "Lebonclick - Concierge Numérique",
    title: "Lebonclick - Votre concierge numérique de confiance",
    description: "Service de proximité au Perreux-sur-Marne. Dépannage, conseil et accompagnement informatique. Intervention rapide, pédagogue et patient.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lebonclick - Concierge Numérique",
    description: "Votre concierge numérique. Intervention rapide et pédagogique.",
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
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${lora.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
