"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImageCardProps {
  imageSrc: string;
  alt: string;
  index: number;
  title?: string;
  description?: string;
}

export const ImageCard = ({
  imageSrc,
  alt,
  index,
  title,
  description,
}: ImageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="pt-2"
    >
      {title && (
        <h3 className="text-lg font-semibold mb-8 text-center text-white">
          {title}
        </h3>
      )}
      <motion.div
        className="relative aspect-square w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="relative h-full w-full overflow-hidden rounded-lg group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover transition-transform duration-300"
          />
          {/* Description overlay on hover */}
          {description && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-black/60 backdrop-blur-md rounded-lg p-4 max-w-[90%]">
                <p className="text-white text-base font-medium text-center leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
