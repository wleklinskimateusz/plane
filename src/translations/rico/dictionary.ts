import "server-only";

const dictionaries = {
    en: () => import("./en.json").then((module) => module.default),
    pl: () => import("./pl.json").then((module) => module.default),
};

export type RicoTranslations = Awaited<
    ReturnType<typeof getRicoTranslations>
>;

export const getRicoTranslations = async (locale: string) =>
    dictionaries[locale === "pl" ? "pl" : "en"]();
