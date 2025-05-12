"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Translations } from "@/translations/common/dictionary";
import { LanguageSwitcher } from "./language-switcher";
import { MobileLink, MobileNav } from "./mobile-navigation-menu";

export function Navigation({
  linksTranslations: { home, about, join, projects },
  lang,
}: {
  linksTranslations: Translations["links"];
  lang: string;
}) {
  return (
    <div className="flex w-full items-center justify-between gap-4 px-8 py-4">
      <Link href={`/${lang}`} className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="AGH Solar Plane Team"
          width={64}
          height={32}
        />
      </Link>
      {/* Desktop Navigation */}
      <div className="hidden grow items-center gap-4 md:flex">
        <nav className="mx-auto flex items-center gap-2">
          <Link
            href={`/${lang}`}
            className="px-4 py-2 text-sm font-medium text-white transition-colors hover:text-gray-300"
          >
            {home}
          </Link>
          <Link
            href={`/${lang}/#about`}
            className="px-4 py-2 text-sm font-medium text-white transition-colors hover:text-gray-300"
          >
            {about}
          </Link>
          <Link
            href={`/${lang}/#join`}
            className="px-4 py-2 text-sm font-medium text-white transition-colors hover:text-gray-300"
          >
            {join}
          </Link>
          <div className="group relative">
            <button className="px-4 py-2 text-sm font-medium text-white transition-colors hover:text-gray-300">
              {projects.label}
            </button>
            <div className="absolute top-full left-0 hidden pt-2 group-hover:block">
              <div className="min-w-[200px] rounded-md bg-white p-4 shadow-lg">
                {Object.entries(projects.items).map(
                  ([key, { title, description }]) => (
                    <Link
                      key={key}
                      href={`/${lang}/projects/${key}`}
                      className="block rounded-sm p-2 hover:bg-gray-100"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        {title}
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {description}
                      </p>
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>
        </nav>
        <LanguageSwitcher lang={lang} />
      </div>

      {/* Mobile Navigation */}
      <MobileNav lang={lang}>
        <>
          <MobileLink href={`/${lang}`}>{home}</MobileLink>
          <MobileLink href={`/${lang}/#about`}>{about}</MobileLink>
          <MobileLink href={`/${lang}/#join`}>{join}</MobileLink>
          {Object.entries(projects.items).map(([key, { title }]) => (
            <MobileLink key={key} href={`/${lang}/projects/${key}`}>
              {title}
            </MobileLink>
          ))}
        </>
      </MobileNav>
    </div>
  );
}
