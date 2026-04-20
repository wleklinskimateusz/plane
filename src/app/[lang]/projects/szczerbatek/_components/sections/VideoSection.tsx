import { VideoPlayer } from "@/components/video-player";

export type VideoSectionTranslations = {
  title: string;
  description: string;
  thumbnailSrc: string;
  videoSrc: string;
};

export const VideoSection = ({
  translations,
}: {
  translations: VideoSectionTranslations;
}) => {
  return (
    <section className="px-16 py-16">
      <div className="mx-auto max-w-[1680px]">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-white">
            {translations.title}
          </h2>
          <p className="text-xl text-white/80">{translations.description}</p>
        </div>
        <VideoPlayer
          thumbnailSrc={translations.thumbnailSrc}
          videoSrc={translations.videoSrc}
          title={translations.title}
        />
      </div>
    </section>
  );
};
