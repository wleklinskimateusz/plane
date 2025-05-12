"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  thumbnailSrc: string;
  videoSrc: string;
  title: string;
}

export const VideoPlayer = ({
  thumbnailSrc,
  videoSrc,
  title,
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-lg">
      {!isPlaying ? (
        // Thumbnail with play button
        <div
          className="group relative h-full w-full cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <Image src={thumbnailSrc} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-10 w-10 text-gray-900" />
            </div>
          </div>
        </div>
      ) : (
        // Video player
        <video
          autoPlay
          controls
          className="h-full w-full"
          onEnded={() => setIsPlaying(false)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};
