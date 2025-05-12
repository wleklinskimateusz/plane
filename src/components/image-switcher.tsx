"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, PanInfo } from "framer-motion";

interface Member {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

interface ImageSwitcherProps {
  members: Member[];
  autoSwitchInterval?: number;
  backgroundImage: string;
}

export const ImageSwitcher = ({
  members,
  autoSwitchInterval = 5000,
  backgroundImage,
}: ImageSwitcherProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wasArrowClicked, setWasArrowClicked] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  }, [members]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const handleDragEnd = (_event: TouchEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      handlePrev();
    } else if (info.offset.x < -swipeThreshold) {
      handleNext();
    }
  };

  // Auto-switch setup
  useEffect(() => {
    const timer = setInterval(handleNext, autoSwitchInterval);
    if (wasArrowClicked) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [autoSwitchInterval, handleNext, wasArrowClicked]);

  const currentMember = members[currentIndex];

  return (
    <div className="relative h-full w-full">
      <div className="mx-auto flex h-full w-full max-w-[70vw] items-stretch justify-center gap-8">
        <div className="hidden aspect-[3/2] shrink-1 grow-1 self-center lg:block">
          <Image
            src={backgroundImage}
            alt={"AGH Solar Plane Team"}
            width={1200}
            height={800}
            className="h-fit rounded-lg object-cover"
          />
        </div>

        {/* Info overlay with swipe gestures */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="flex touch-pan-x flex-col gap-2 self-stretch backdrop-blur-sm md:max-w-[400px] md:min-w-[400px]"
        >
          <h3 className="order-1 text-2xl font-bold text-gray-900">
            {currentMember.name}
          </h3>
          <p className="order-2 text-lg font-medium text-blue-600">
            {currentMember.role}
          </p>

          <motion.div
            key={currentMember.imageSrc}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={currentMember.imageSrc}
              alt={currentMember.name}
              width={400}
              height={600}
              className="order-3 w-[90vw] rounded-sm lg:order-4 lg:w-auto"
            />
          </motion.div>
          <p className="order-4 grow-1 leading-relaxed text-gray-700 lg:order-3">
            {currentMember.description}
          </p>
        </motion.div>

        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-8 z-10 hidden h-12 w-12 -translate-y-1/2 rounded-full border-gray-200 bg-white/90 shadow-lg hover:bg-white md:flex"
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
          className="absolute top-1/2 right-8 z-10 hidden h-12 w-12 -translate-y-1/2 rounded-full border-gray-200 bg-white/90 shadow-lg hover:bg-white md:flex"
          onClick={() => {
            setWasArrowClicked(true);
            handleNext();
          }}
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </Button>
      </div>
    </div>
  );
};
