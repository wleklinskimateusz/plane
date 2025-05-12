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
        "relative rounded-lg bg-blue-900/20 pt-24 pr-24 pb-12 pl-20",
        className,
      )}
    >
      {/* Top measurement arrow */}
      <div className="absolute top-8 right-24 left-20 flex h-12 items-center">
        <div className="h-[3px] w-full bg-white" />
        <div className="absolute left-0 h-4 w-[3px] bg-white" />
        <div className="absolute right-0 h-4 w-[3px] bg-white" />
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-base font-medium text-white">
          {topText}
        </div>
      </div>

      {/* Right measurement arrow */}
      <div className="absolute top-24 right-8 bottom-12 flex w-12 items-center">
        <div className="absolute left-1/2 h-full w-[3px] -translate-x-1/2 bg-white" />
        <div className="absolute top-0 left-1/2 h-[3px] w-4 -translate-x-1/2 -translate-y-1/2 bg-white" />
        <div className="absolute bottom-0 left-1/2 h-[3px] w-4 -translate-x-1/2 translate-y-1/2 bg-white" />
        <div className="absolute top-1/2 left-10 origin-left -translate-y-1/2 -rotate-90 text-base font-medium text-white">
          {rightText}
        </div>
      </div>

      {/* Main content */}
      <div className="relative">{children}</div>
    </div>
  );
};
