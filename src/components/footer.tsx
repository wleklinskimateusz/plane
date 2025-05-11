"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Translations } from "@/translations/common/dictionary";
import { organizationConfig } from "@/config/organization";
import Link from "next/link";

export const Footer = ({
  translations: { sponsors, organization, contact, copyright },
}: {
  translations: Translations["footer"];
}) => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Sponsors Section */}
        <div className="mb-12">
          <h3 className="text-white text-lg font-semibold text-center mb-6">
            {sponsors.title}
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {sponsors.list.map((sponsor, index) => (
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
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
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
            <p className="text-sm max-w-sm">{organization.description}</p>
            <div className="flex space-x-4">
              <motion.a
                href={organizationConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="hover:text-white"
              >
                Instagram
              </motion.a>
              <motion.a
                href={organizationConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="hover:text-white"
              >
                Facebook
              </motion.a>
              <motion.a
                href={organizationConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="hover:text-white"
              >
                YouTube
              </motion.a>
              <motion.a
                href={organizationConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="hover:text-white"
              >
                LinkedIn
              </motion.a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 flex flex-col items-center">
            <h3 className="text-white text-lg font-semibold">
              {contact.title}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`mailto:${organizationConfig.contact.generalMail}`}>
                  {organizationConfig.contact.generalMail}
                </Link>
              </li>
              <li>{organizationConfig.contact.location}</li>
              <li>{organizationConfig.contact.building}</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-semibold">
              {contact.chairman}: {organizationConfig.personel.chairman.name}
            </h4>

            <Link href={`mailto:${organizationConfig.personel.chairman.email}`}>
              {organizationConfig.personel.chairman.email}
            </Link>
            <Link href={`tel:${organizationConfig.personel.chairman.phone}`}>
              {organizationConfig.personel.chairman.phone}
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>
            © {new Date().getFullYear()} AGH Solar Plane. {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
