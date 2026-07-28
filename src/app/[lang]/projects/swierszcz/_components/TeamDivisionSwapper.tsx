"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Division {
    title: string;
    description: string;
    members: string[];
    videoSrc?: string;
}

interface ImageSwitcherProps {
    divisions: Division[];
    autoSwitchInterval?: number;
}

export const ImageSwitcher = ({
    divisions,
    autoSwitchInterval = 5000,
}: ImageSwitcherProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wasArrowClicked, setWasArrowClicked] = useState(false);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const handleNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % divisions.length);
    }, [divisions]);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + divisions.length) % divisions.length);
    };

    // Auto-switch setup
    useEffect(() => {
        const timer = setInterval(handleNext, autoSwitchInterval);
        if (wasArrowClicked) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [autoSwitchInterval, handleNext, wasArrowClicked]);

    const currentDivision = divisions[currentIndex];

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    };

    return (
        <section className="relative w-full overflow-hidden py-16 md:py-24">
            <div className="mx-auto flex w-full max-w-screen-2xl justify-center px-4 md:px-8">
                <div className="relative w-full rounded-3xl bg-white/80 px-4 py-8 shadow-lg ring-1 ring-black/5 backdrop-blur-sm md:px-8 md:py-12">
                    <AnimatePresence mode="wait" initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                            className="mx-auto flex w-full max-w-4xl flex-col gap-4"
                        >
                            <h3 className="order-1 text-2xl font-bold text-gray-900 md:text-3xl">
                                {currentDivision.title}
                            </h3>
                            <p className="order-2 text-lg font-medium text-blue-600 md:text-xl">
                                {currentDivision.description}
                            </p>

                            <p>hh {currentDivision.videoSrc}</p>
                            <video
                                src={currentDivision.videoSrc}
                                width={600}
                                height={400}
                                autoPlay
                                loop
                                className="order-3 w-full rounded-xl object-cover"
                            />
                            <p className="order-4 leading-relaxed text-center text-gray-700">
                                {currentDivision.members.join(", ")}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute top-1/2 left-4 z-10 hidden h-12 w-12 -translate-y-1/2 rounded-full border-gray-200 bg-white/90 shadow-lg hover:bg-white md:flex"
                        onClick={() => {
                            setWasArrowClicked(true);
                            handlePrev();
                        }}
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-700" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute top-1/2 right-4 z-10 hidden h-12 w-12 -translate-y-1/2 rounded-full border-gray-200 bg-white/90 shadow-lg hover:bg-white md:flex"
                        onClick={() => {
                            setWasArrowClicked(true);
                            handleNext();
                        }}
                    >
                        <ChevronRight className="h-6 w-6 text-gray-700" />
                    </Button>
                </div>
            </div>
        </section>
    );
};
