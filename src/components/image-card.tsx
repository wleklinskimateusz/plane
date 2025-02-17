import Image from "next/image";

interface ImageCardProps {
  imageSrc: string;
  alt: string;
}

export const ImageCard = ({ imageSrc, alt }: ImageCardProps) => {
  return (
    <div className="relative aspect-square w-full">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black/30 rounded-lg" />
    </div>
  );
};
