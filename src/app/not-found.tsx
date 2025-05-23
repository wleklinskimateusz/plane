import { getTranslations } from "@/translations/common/dictionary";
import { Navigation } from "@/components/navigation";
import { NotFound as NotFoundComponent } from "@/components/not-found";

export default async function NotFound() {
  const { notFound, links } = await getTranslations("en");
  return (
    <div className="flex w-full justify-center">
      <Navigation lang="en" linksTranslations={links} />
      <NotFoundComponent translations={notFound} />
    </div>
  );
}
