// app/fonts.ts
import localFont from "next/font/local";

// Le chemin part de la racine du projet.
export const fontValorant = localFont({
  src: "./Valorant Font.ttf",
  variable: "--font-valorant",
  display: "swap",
});

export const fontVotrag = localFont({
  src: [
    {
      path: "./fonts/votrag/Votrag-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/votrag/Votrag.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/votrag/Votrag-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-votrag",
  display: "swap",
});
