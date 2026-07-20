"use client";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("./RicoModelViewer"), {
    ssr: false,
    loading: () => (
        <div className="flex h-150 w-full items-center justify-center rounded-xl border border-gray-300 bg-gray-200 text-gray-500">
            Loading 3D model…
        </div>
    ),
});

export const RicoThreeDModelSection = () => {
    return (
        <section id="model-viewer" className="relative h-150 w-full">
            <ModelViewer />
        </section>
    );
}