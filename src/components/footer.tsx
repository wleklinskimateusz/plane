"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import type { Translations } from "@/translations/common/dictionary";

// Temporary sponsor data - replace with actual sponsors later
const sponsors = [
  { name: "Sponsor 1", logo: "/vercel.svg" },
  { name: "Sponsor 2", logo: "/vercel.svg" },
  { name: "Sponsor 3", logo: "/vercel.svg" },
  { name: "Sponsor 4", logo: "/vercel.svg" },
  { name: "Sponsor 5", logo: "/vercel.svg" },
];

export const Footer = ({ translations }: { translations: Translations }) => {
  const t = translations.footer;

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Sponsors Section */}
        <div className="mb-12">
          <h3 className="text-white text-lg font-semibold text-center mb-6">
            {t.sponsors.title}
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative w-32 h-24 bg-white/5 rounded-lg p-2 flex flex-col items-center justify-center gap-2"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={40}
                  height={40}
                  className="object-contain brightness-0 invert"
                />
                <span className="text-xs text-gray-400 text-center">
                  {sponsor.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Organization Info */}
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-white text-lg font-semibold">
              AGH Solar Plane
            </h3>
            <p className="text-sm max-w-sm">{t.organization.description}</p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/company/agh-solar-plane"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="hover:text-white"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/agh-solar-plane"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="hover:text-white"
              >
                GitHub
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-white text-lg font-semibold">
              {t.navigation.title}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  {t.navigation.home}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-white text-lg font-semibold">
              {t.contact.title}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>{t.contact.email}</li>
              <li>{t.contact.location}</li>
              <li>{t.contact.building}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>
            © {new Date().getFullYear()} AGH Solar Plane. {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
