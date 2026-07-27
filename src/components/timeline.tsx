"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  videoSrc?: string;
  additionalMedia?: {
    name: string;
    path: string;
  }[];
  isLeft?: boolean;
}

const TimelineItem = ({
  date,
  title,
  description,
  imageSrc,
  videoSrc,
  additionalMedia,
  isLeft,
}: TimelineItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={cn(
        "flex w-full items-center justify-center gap-4",
        "flex-col md:flex-row",
        isLeft ? "md:flex-row" : "md:flex-row-reverse",
      )}
    >
      {/* Content */}
      <motion.div
        className={cn(
          "w-full p-4 md:w-1/2 md:p-8",
          "text-center md:text-left",
          isLeft ? "md:text-right" : "md:text-left",
        )}
        initial={{ opacity: 0, y: 50, x: 0 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50,
          x: isInView ? 0 : 0,
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="space-y-4">
          <time className="text-lg font-bold text-blue-600">{date}</time>
          <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
            {title}
          </h3>
          <p className="text-sm text-gray-600 md:text-base">{description}</p>
          {additionalMedia?.length && (
            <div className="mt-4 flex flex-col gap-2">
              {additionalMedia.map((media) => (
                <Link
                  key={media.name}
                  href={media.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {media.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Timeline center - hidden on mobile */}
      <div className="relative hidden h-full w-16 items-center justify-center md:flex">
        <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 border-l-2 border-dashed border-blue-200" />
        <motion.div
          className="absolute top-[calc(50%-0.5rem)] left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-600 ring-4 ring-blue-100"
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Image */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, y: 50, x: 0 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50,
          x: isInView ? 0 : 0,
        }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          {videoSrc ? (
            <img
              src={videoSrc}
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

interface TimelineProps {
  items: Array<Omit<TimelineItemProps, "isLeft">>;
  lineItemSrc?: string;
}

export const Timeline = ({ items, lineItemSrc }: TimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  // Measure the container's real rendered height, and keep it updated
  // if content reflows (images loading, responsive changes, etc.)
  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const updateHeight = () => setContainerHeight(el.offsetHeight);

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Raw pixel value driven directly by scroll progress, using the
  // real measured height instead of a guessed/hardcoded range.
  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.max(containerHeight - 32, 0)],
  );

  // Smooth + slow down the motion: the marker eases toward the scroll
  // position instead of snapping to it 1:1.
  // - lower stiffness => slower/lazier to catch up
  // - higher damping => less bounce/overshoot, glidier stop
  // - higher mass => more "weight", slower reaction to sudden scroll changes
  const y = useSpring(rawY, {
    stiffness: 60,
    damping: 25,
    mass: 0.2,
  });

  return (
    <div
      ref={containerRef}
      className="relative space-y-8 py-8 md:space-y-12 md:py-12"
    >
      {/* Continuous vertical line - hidden on mobile */}
      <div className="absolute top-0 left-1/2 hidden h-full w-0 -translate-x-1/2 border-l-2 border-dashed border-blue-200 md:block" />

      {/* Moving SVG on scroll */}
      {lineItemSrc && containerHeight > 0 && (
        <motion.div
          className="absolute top-0 left-1/2 z-20 hidden w-10 -translate-x-1/2 md:block"
          style={{ y }}
        >
          <img
            src={lineItemSrc}
            alt="timeline marker"
            className="h-10 w-10 object-contain"
          />
        </motion.div>
      )}

      {/* Timeline items */}
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} isLeft={index % 2 === 0} />
      ))}
    </div>
  );
};