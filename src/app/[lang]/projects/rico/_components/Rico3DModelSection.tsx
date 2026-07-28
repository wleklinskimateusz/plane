"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const ModelViewer = dynamic(() => import("./RicoModelViewer"), {
    ssr: false,
    loading: () => (
        <div className="flex h-250 w-7/8 items-center justify-center rounded-xl border border-gray-300 bg-gray-200 text-gray-500">
            Loading 3D model…
        </div>
    ),
});

export const RicoThreeDModelSection = () => {
    const [showModelViewer, setShowModelViewer] = useState(false);

    return (
        <section
            id="model-viewer"
            className="relative flex h-7/8 w-full flex-col items-center justify-center p-8 pb-10"
        >
            {showModelViewer ? (
                <ModelViewer />
            ) : (
                <div
                    className="relative h-250 w-7/8 cursor-pointer rounded-2xl border shadow-lg transition hover:scale-[1.01]"
                    onClick={() => setShowModelViewer(true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            setShowModelViewer(true);
                        }
                    }}
                >
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            setShowModelViewer(true);
                        }} className="flex w-full items-center justify-center rounded-xl border shadow-inner cursor-pointer relative">
                        <Image
                            src="/rico/3d_rico.png"
                            alt="Rico 3D model thumbnail"
                            width={1600}
                            height={1000}
                            className="rounded-lg object-cover bg-gray-700 opacity-50"
                        />
                        <div
                            className="ml-10 rounded-full absolute bg-black/10  px-18 py-10 font-semibold text-white shadow-sm transition hover:shadow-lg"
                        >
                            Click me!
                        </div>
                    </button>

                </div>
            )}
        </section>
    );
};