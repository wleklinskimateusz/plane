import { getTranslations } from "@/translations/common/dictionary";
import { NotFound as NotFoundComponent } from "@/components/not-found";

export default async function NotFound({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { notFound } = await getTranslations(lang);
  return (
    <div className="flex w-full justify-center">
      <NotFoundComponent translations={notFound} />
    </div>
  );
}
