"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  isLeft?: boolean;
}

const TimelineItem = ({
  date,
  title,
  description,
  imageSrc,
  isLeft,
}: TimelineItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={cn(
        "flex w-full items-center justify-center gap-4",
        isLeft ? "flex-row" : "flex-row-reverse"
      )}
    >
      {/* Content */}
      <motion.div
        className={cn("w-1/2 p-8", isLeft ? "text-right" : "text-left")}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : isLeft ? -50 : 50,
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="space-y-4">
          <time className="text-lg font-bold text-blue-600">{date}</time>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </motion.div>

      {/* Timeline center */}
      <div className="relative flex h-full w-16 items-center justify-center">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0 border-l-2 border-dashed border-blue-200" />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-blue-100"
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Image */}
      <motion.div
        className="w-1/2"
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : isLeft ? 50 : -50,
        }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>
      </motion.div>
    </div>
  );
};

interface TimelineProps {
  items: Array<Omit<TimelineItemProps, "isLeft">>;
}

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative space-y-12 py-12">
      {/* Continuous vertical line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0 border-l-2 border-dashed border-blue-200" />

      {/* Timeline items */}
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} isLeft={index % 2 === 0} />
      ))}
    </div>
  );
};
