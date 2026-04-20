import Image from "next/image";
import type { VitoldTranslations } from "@/translations/vitold/dictionary";

type FinancingProps = {
  financing: VitoldTranslations["financing"];
};

export function Financing({ financing }: FinancingProps) {
  const stats = [
    {
      label: financing.fundingAmountLabel,
      value: financing.fundingAmount,
    },
    {
      label: financing.totalCostLabel,
      value: financing.totalCost,
    },
    {
      label: financing.financingPeriodLabel,
      value: financing.financingPeriod,
    },
  ];

  return (
    <div className="mx-auto max-w-5xl rounded-xl border border-gray-200 bg-gray-50 p-8 shadow-sm md:p-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
        <div className="relative mx-auto h-24 w-full max-w-[200px] shrink-0 md:mx-0 md:h-28 md:max-w-[220px]">
          <Image
            src={financing.logo}
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 768px) 200px, 220px"
          />
        </div>
        <div className="min-w-0 flex-1 text-center md:text-left">
          <h3 className="mb-3 font-serif text-2xl font-bold text-gray-900 md:text-3xl">
            {financing.title}
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">
            {financing.description}
          </p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-4">
            {stats.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-sm font-medium text-gray-500">{label}</dt>
                <dd className="mt-1 text-base font-semibold text-gray-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
