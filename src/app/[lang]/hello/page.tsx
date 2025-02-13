export default async function Hello({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return <div>Hello</div>;
}
