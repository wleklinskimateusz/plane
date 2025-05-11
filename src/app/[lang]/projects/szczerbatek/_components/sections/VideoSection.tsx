import { VideoPlayer } from "@/components/video-player";
import { SzczerbatekTranslations } from "@/translations/szczerbatek/dictionary";

export const VideoSection = ({
  translations,
}: {
  translations: SzczerbatekTranslations["video"];
}) => {
  return (
    <section className="py-16 px-16">
      <div className="max-w-[1680px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {translations.title}
          </h2>
          <p className="text-white/80 text-xl">{translations.description}</p>
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
