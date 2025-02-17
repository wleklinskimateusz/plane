"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImageCardProps {
  imageSrc: string;
  alt: string;
}

export const ImageCard = ({ imageSrc, alt }: ImageCardProps) => {
  return (
    <motion.div
      className="relative aspect-square w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300"
        />
        <motion.div
          className="absolute inset-0 bg-black/30 rounded-lg"
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};
