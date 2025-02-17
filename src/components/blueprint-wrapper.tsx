"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface BlueprintWrapperProps {
  children: React.ReactNode;
  className?: string;
  topText?: string;
  rightText?: string;
}

export const BlueprintWrapper = ({
  children,
  className,
  topText = "width",
  rightText = "height",
}: BlueprintWrapperProps) => {
  return (
    <div
      className={cn(
        "relative pt-24 pr-24 pl-20 pb-12 bg-blue-900/20 rounded-lg",
        className
      )}
    >
      {/* Top measurement arrow */}
      <div className="absolute top-8 left-20 right-24 h-12 flex items-center">
        <div className="w-full h-[3px] bg-white" />
        <div className="absolute left-0 h-4 w-[3px] bg-white" />
        <div className="absolute right-0 h-4 w-[3px] bg-white" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 text-base font-medium text-white">
          {topText}
        </div>
      </div>

      {/* Right measurement arrow */}
      <div className="absolute right-8 top-24 bottom-24 w-12 flex items-center">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-[3px] bg-white" />
        <div className="absolute top-0 -translate-y-1/2 h-[3px] w-4 left-1/2 -translate-x-1/2 bg-white" />
        <div className="absolute bottom-0 translate-y-1/2 h-[3px] w-4 left-1/2 -translate-x-1/2 bg-white" />
        <div className="absolute top-1/2 -translate-y-1/2 left-6 -rotate-90 text-base font-medium text-white origin-left">
          {rightText}
        </div>
      </div>

      {/* Main content */}
      <div className="relative">{children}</div>
    </div>
  );
};
