"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Member {
  id: number;
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

interface ImageSwitcherProps {
  members: Member[];
  autoSwitchInterval?: number;
}

export const ImageSwitcher = ({
  members,
  autoSwitchInterval = 5000,
}: ImageSwitcherProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

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
    <div className="relative w-full">
      <div className="relative aspect-[16/9] w-full max-w-[70vw] mx-auto">
        <Image
          src={currentMember.imageSrc}
          alt={currentMember.name}
          fill
          className="object-cover rounded-lg"
        />
        {/* Darker gradient overlay */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* Info overlay */}
        <div className="absolute top-8 right-8 max-w-md bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {currentMember.name}
          </h3>
          <p className="text-blue-600 text-lg font-medium mb-3">
            {currentMember.role}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {currentMember.description}
          </p>
        </div>

        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow-lg border-2 border-gray-200 z-10"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/90 hover:bg-white shadow-lg border-2 border-gray-200 z-10"
          onClick={handleNext}
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </Button>
      </div>
    </div>
  );
};
