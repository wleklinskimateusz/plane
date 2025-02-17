import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  pl: () => import("./pl.json").then((module) => module.default),
};

export type UszatekTranslations = Awaited<
  ReturnType<typeof getUszatekTranslations>
>;

export const getUszatekTranslations = async (locale: string) =>
  dictionaries[locale === "pl" ? "pl" : "en"]();
