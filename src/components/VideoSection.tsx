import { VideoPlayer } from "@/components/video-player";

export type VideoSectionTranslations = {
  title: string;
  description: string;
};

export const VideoSection = ({
  translations,
  youtubeVideoId,
  thumbnailSrc,
}: {
  translations: VideoSectionTranslations;
  youtubeVideoId: string;
  thumbnailSrc: string;
}) => {
  return (
    <section className="px-16 py-16" id="video">
      <div className="mx-auto max-w-420">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-white">
            {translations.title}
          </h2>
          <p className="text-xl text-white/80">{translations.description}</p>
        </div>
        <VideoPlayer
          videoId={youtubeVideoId}
          title={translations.title}
          thumbnailSrc={thumbnailSrc}
        />
      </div>
    </section>
  );
};
