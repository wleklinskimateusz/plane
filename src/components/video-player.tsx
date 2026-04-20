"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  videoId: string;
  title: string;
  thumbnailSrc: string;
}

export const VideoPlayer = ({
  videoId,
  title,
  thumbnailSrc,
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-lg">
      {!isPlaying ? (
        <button
          type="button"
          className="group relative h-full w-full cursor-pointer"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={thumbnailSrc}
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-10 w-10 text-gray-900" />
            </div>
          </div>
        </button>
      ) : (
        <iframe
          className="h-full w-full border-0"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
    </div>
  );
};
