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
  title: "LeBonClick - Concierge Numérique Le Perreux-sur-Marne | Alexander McLean-Janet",
  description: "Votre concierge numérique au Perreux-sur-Marne. Conseil, dépannage, accompagnement informatique à domicile. PC lent, imprimante, sites administratifs, aide à l'achat.",
  keywords: "concierge numérique, dépannage informatique, Le Perreux-sur-Marne, assistance informatique, aide informatique seniors, réparation PC, installation imprimante",
  authors: [{ name: "Alexander McLean-Janet" }],
  creator: "Alexander McLean-Janet",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lebonclick.fr",
    siteName: "LeBonClick - Concierge Numérique",
    title: "LeBonClick - Votre concierge numérique de confiance",
    description: "Service de proximité au Perreux-sur-Marne. Dépannage, conseil et accompagnement informatique. Intervention rapide, pédagogue et patient.",
    images: [
      {
        url: "/logo.svg",
        width: 2000,
        height: 2000,
        alt: "LeBonClick Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeBonClick - Concierge Numérique",
    description: "Votre concierge numérique au Perreux-sur-Marne. Intervention rapide et pédagogique.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
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
