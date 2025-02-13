import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div>
      <h1>Hello there</h1>
      <p>Lang: {lang}</p>
    </div>
  );
}
