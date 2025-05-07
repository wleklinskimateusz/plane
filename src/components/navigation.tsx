"use client";

import * as React from "react";
import Link from "next/link";
import { Translations } from "@/translations/common/dictionary";
import { LanguageSwitcher } from "./language-switcher";
import { MobileLink, MobileNav } from "./mobile-navigation-menu";

export function Navigation({
  linksTranslations: { home, about, projects },
  lang,
}: {
  linksTranslations: Translations["links"];
  lang: string;
}) {
  return (
    <div className="py-4 flex items-center gap-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4">
        <nav className="flex items-center gap-2">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
          >
            {home}
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
          >
            {about}
          </Link>
          <div className="relative group">
            <button className="px-4 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors">
              {projects.label}
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block pt-2">
              <div className="bg-white rounded-md shadow-lg p-4 min-w-[200px]">
                {Object.entries(projects.items).map(
                  ([key, { title, description }]) => (
                    <Link
                      key={key}
                      href={`/projects/${key}`}
                      className="block p-2 hover:bg-gray-100 rounded-sm"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        {title}
                      </div>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {description}
                      </p>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </nav>
        <LanguageSwitcher lang={lang} />
      </div>

      {/* Mobile Navigation */}
      <MobileNav>
        <>
          <MobileLink href="/">{home}</MobileLink>
          <MobileLink href="/about">{about}</MobileLink>
          {Object.entries(projects.items).map(([key, { title }]) => (
            <MobileLink key={key} href={`/projects/${key}`}>
              {title}
            </MobileLink>
          ))}
        </>
      </MobileNav>
    </div>
  );
}
