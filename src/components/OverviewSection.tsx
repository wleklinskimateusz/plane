export interface UAVParameter {
    label: string;
    value: string;
}

export interface UAVParametersSection {
    title: string;
    parameters: UAVParameter[];
}

export interface UAVParametersTable {
    sections: UAVParametersSection[];
}

export const OverviewSection = ({
    uavParametersTable,
}: {
    uavParametersTable: UAVParametersTable;
}) => {
    return (
        <section className="flex justify-center p-16">
            <div className="overview-section max-w-420 p-8 bg-gray-900 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b-6 border-gray-700">UAV Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {uavParametersTable.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-6">
                            <h3 className="text-lg font-semibold text-blue-300 mb-3 underline underline-offset-6">{section.title}</h3>
                            <div className="flex flex-col gap-2">
                                {section.parameters.map((param, paramIndex) => (
                                    <div key={paramIndex} className="border-gray-700">
                                        <p className="text-gray-400 text-sm font-semibold">{param.label}</p>
                                        <p className="text-white text-lg font-medium">{param.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
