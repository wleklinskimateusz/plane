import { getTranslations } from "@/translations/common/dictionary";
import { Navigation } from "@/components/navigation";

export default async function NotFound() {
  const englishDictionary = await getTranslations("en");
  return (
    <div className="flex w-full justify-center">
      <Navigation commonDictionary={englishDictionary} />
    </div>
  );
}
