import { VideoPlayer } from "@/components/video-player";
import { SzczerbatekTranslations } from "@/translations/szczerbatek/dictionary";

export const VideoSection = ({
  translations,
}: {
  translations: SzczerbatekTranslations["video"];
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
          thumbnailSrc="/szczerbatek/thumbnail.jpg"
          videoSrc="/szczerbatek/video.mp4"
          title={translations.title}
        />
      </div>
    </section>
  );
};
