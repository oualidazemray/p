// components/Footer.tsx
import React from "react";
import { portfolioData } from "@/data";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-slate-400 border-t border-slate-800">
      <p>
        © {new Date().getFullYear()} {portfolioData.name}. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
