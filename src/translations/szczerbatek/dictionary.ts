import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  pl: () => import("./pl.json").then((module) => module.default),
};

export type SzczerbatekTranslations = Awaited<
  ReturnType<typeof getSzczerbatekTranslations>
>;

export const getSzczerbatekTranslations = async (locale: string) =>
  dictionaries[locale === "pl" ? "pl" : "en"]();
