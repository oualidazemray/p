// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundEffect from "@/components/BackgroundEffect";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Oualid Azemray | Portfolio Génie Informatique",
  description:
    "Portfolio de Oualid Azemray, étudiant en génie informatique à l'ENSMR, présentant ses projets, compétences et expériences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="!scroll-smooth">
      <body
        className={`${poppins.className} bg-[#0B0E1A] text-slate-100 antialiased`}
      >
        <BackgroundEffect />

        {/* Responsive container with padding */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow w-full px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
