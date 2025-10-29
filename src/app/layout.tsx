import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#14b8a6',
}

export const metadata: Metadata = {
  title: "Lebonclick - Concierge Numérique Le Perreux-sur-Marne | Alexander McLean-Janet",
  description: "Votre concierge numérique au Perreux-sur-Marne. Conseil, dépannage, accompagnement informatique à domicile. PC lent, imprimante, sites administratifs, aide à l'achat.",
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
    description: "Votre concierge numérique au Perreux-sur-Marne. Intervention rapide et pédagogique.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
