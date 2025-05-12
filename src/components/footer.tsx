"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Translations } from "@/translations/common/dictionary";
import { organizationConfig } from "@/config/organization";
import Link from "next/link";

export const Footer = ({
  translations: {
    sponsors: sponsorsTranslations,
    organization,
    contact,
    copyright,
  },
}: {
  translations: Translations["footer"];
}) => {
  const sponsors = organizationConfig.partners;
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Sponsors Section */}
        <div className="mb-12">
          <h3 className="mb-6 text-center text-lg font-semibold text-white">
            {sponsorsTranslations.title}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {sponsors.map((sponsor, index) => (
              <Link
                href={sponsor.href}
                target="_blank"
                title={sponsorsTranslations.partners[sponsor.translationKey]}
                referrerPolicy="no-referrer"
                key={index}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative flex h-24 w-32 flex-col items-center justify-center gap-2 rounded-lg bg-white p-2"
                >
                  <Image
                    src={sponsor.image}
                    alt={sponsor.translationKey}
                    width={70}
                    height={70}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
          {/* Organization Info */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-semibold text-white">
              AGH Solar Plane
            </h3>
            <p className="max-w-sm text-sm">{organization.description}</p>
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
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-semibold text-white">
              {contact.title}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`mailto:${organizationConfig.contact.generalMail}`}>
                  {organizationConfig.contact.generalMail}
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${organizationConfig.personel.president.phone}`}
                >
                  {organizationConfig.personel.president.phone}
                </Link>
              </li>
              <li>{organizationConfig.contact.location}</li>
              <li>{organizationConfig.contact.building}</li>
            </ul>
          </div>

          {/* Personnel */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-lg font-semibold text-white">
              {contact.personnel.title}
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-white">
                  {contact.personnel.president}
                </h4>
                <p>{organizationConfig.personel.president.name}</p>
                <Link
                  href={`mailto:${organizationConfig.personel.president.email}`}
                >
                  {organizationConfig.personel.president.email}
                </Link>
              </div>
              <div>
                <h4 className="font-semibold text-white">
                  {contact.personnel.vicePresident}
                </h4>
                <p>{organizationConfig.personel.vicePresident.name}</p>
                <Link
                  href={`mailto:${organizationConfig.personel.vicePresident.email}`}
                >
                  {organizationConfig.personel.vicePresident.email}
                </Link>
              </div>
              <div>
                <h4 className="font-semibold text-white">
                  {contact.personnel.advisor}
                </h4>
                <p>{organizationConfig.personel.advisor.name}</p>
                <Link
                  href={`mailto:${organizationConfig.personel.advisor.email}`}
                >
                  {organizationConfig.personel.advisor.email}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} AGH Solar Plane. {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
