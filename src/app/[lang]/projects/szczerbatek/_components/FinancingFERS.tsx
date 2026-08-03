import Image from "next/image";

interface Schedule {
    name: string;
    description: string;
    date: string;
}

interface FinancingProps {
    financing: {
        title: string;
        description: string;
        projectTitle: string;
        projectDescription: string;
        schedule: Schedule[];
        fundingAmountLabel: string;
        fundingAmount: string;
        totalCostLabel?: string;
        totalCost?: string;
        financingPeriodLabel: string;
        financingPeriod: string;
        logo: string;
        logo2?: string;
        altLogo: string;
        altLogo2?: string;
    };
}

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
        <div className="mx-auto rounded-xl border border-gray-200 bg-gray-50 p-8 shadow-sm md:p-10">
            <div className="flex gap-8">
                <div className="min-w-0 text-center md:text-left">
                    <div className="relative aspect-16/3 w-full">
                        <Image
                            src={financing.logo}
                            alt={financing.altLogo}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h3 className="mb-3 font-serif text-2xl font-bold text-gray-900 md:text-3xl">
                        {financing.title}
                    </h3>
                    <p className="text-md mb-16 leading-relaxed text-gray-600">
                        {financing.description}
                    </p>
                    <h4 className="my-6 text-xl font-semibold text-blue-800">
                        {financing.projectTitle}
                    </h4>
                    <p className="text-md leading-relaxed text-gray-600">
                        {financing.projectDescription}
                    </p>
                    <div className="mt-8">
                        <ul className="mt-4 space-y-6">
                            {financing.schedule.map((item) => (
                                <li key={item.name} className="flex items-start bg-gray-100 p-4 rounded-lg">
                                    <div>
                                        <p className="font-medium text-gray-900">{item.name}</p>
                                        <p className="text-sm font-medium text-gray-700 mb-2 mt-1">{item.date}</p>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <dl className="flex flex-end justify-between md:justify-end w-full flex-wrap gap-x-8 gap-y-2 pt-6 text-sm font-medium text-gray-500">
                        {stats.map(({ label, value }) => (
                            <div key={label}>
                                <dt className="text-sm font-medium text-gray-500">{label}</dt>
                                <dd className="mt-1 text-base font-semibold text-blue-800">
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
