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
    <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden">
      {!isPlaying ? (
        // Thumbnail with play button
        <div
          className="relative w-full h-full group cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <Image src={thumbnailSrc} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="h-10 w-10 text-gray-900 ml-1" />
            </div>
          </div>
        </div>
      ) : (
        // Video player
        <video
          autoPlay
          controls
          className="w-full h-full"
          onEnded={() => setIsPlaying(false)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};
