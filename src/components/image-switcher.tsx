"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  }, [members]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  // Auto-switch setup
  useEffect(() => {
    const timer = setInterval(handleNext, autoSwitchInterval);
    return () => clearInterval(timer);
  }, [autoSwitchInterval, handleNext]);

  const currentMember = members[currentIndex];

  return (
    <div className="relative w-full h-full ">
      <div className="flex gap-8 justify-center items-stretch h-full w-full max-w-[70vw] mx-auto">
        <div className="2xl:block self-center hidden aspect-[3/2] shrink-1 grow-1">
          <Image
            src={backgroundImage}
            alt={"AGH Solar Plane Team"}
            width={1200}
            height={800}
            className="object-cover h-fit rounded-lg"
          />
        </div>

        {/* Info overlay */}
        <div className="min-w-[400px] self-stretch  max-w-[400px] flex flex-col gap-2  backdrop-blur-sm">
          <h3 className="text-2xl order-1 font-bold text-gray-900">
            {currentMember.name}
          </h3>
          <p className="text-blue-600 order-2 text-lg font-medium">
            {currentMember.role}
          </p>

          <Image
            src={currentMember.imageSrc}
            alt={currentMember.name}
            width={400}
            height={600}
            className="rounded-sm order-3 2xl:order-4"
          />
          <p className="text-gray-700 grow-1 2xl:order-3 order-4 leading-relaxed">
            {currentMember.description}
          </p>
        </div>

        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow-lg  border-gray-200 z-10"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow-lg  border-gray-200 z-10"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </Button>
      </div>
    </div>
  );
};
