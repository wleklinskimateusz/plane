import React from 'react';

interface UAVParameter {
    label: string;
    value: string;
}

const OverviewSection: React.FC = () => {
    const uavParameters: UAVParameter[] = [
        { label: 'Weight', value: '10.6 lbs' },
        { label: 'Motors', value: '8x T-Motor MN4006 KV380' },
        { label: 'Propellers', value: '8x T-Motor MF1503' },
        { label: 'Battery', value: '6S LiPo 12000mAh (3x 2S SLS XTRON 12000mAh)' },
        { label: 'Flight Time', value: '30 minutes' },
        { label: 'Max Speed', value: '18 m/s' },
        { label: 'Max Range', value: '10 km' },
        { label: 'Navigation System', value: 'Here 3+ GNSS' },
        { label: 'Camera', value: 'ArduCam 2,3 MPx AR0234' },
        { label: 'Communication', value: '2.4 GHz and 900 MHz' },
    ];

    return (
        <section className="flex justify-center p-16">
            <div className="overview-section max-w-420 p-8 bg-gray-900 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-4 pb-3 border-b-6 border-gray-700">UAV Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {uavParameters.map((param, index) => (
                        <div key={index} className={`${index > 1 ? 'border-t' : ''} border-gray-700 pt-3`}>
                            <p className="text-gray-400 text-sm font-semibold">{param.label}</p>
                            <p className="text-white text-lg font-medium">{param.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;