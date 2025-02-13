import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  pl: () => import("./pl.json").then((module) => module.default),
};

export type CommonDictionary = Awaited<ReturnType<typeof getCommonDictionary>>;

export const getCommonDictionary = async (locale: "en" | "pl") =>
  dictionaries[locale]();
