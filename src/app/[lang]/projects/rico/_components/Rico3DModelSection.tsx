"use client";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("./RicoModelViewer"), {
    ssr: false,
    loading: () => (
        <div className="flex h-250 w-7/8 items-center justify-center rounded-xl border border-gray-300 bg-gray-200 text-gray-500">
            Loading 3D model…
        </div>
    ),
});

export const RicoThreeDModelSection = () => {
    return (
        <section id="model-viewer" className="relative h-7/8 w-full flex flex-col items-center justify-center">
            <ModelViewer />
        </section>
    );
}