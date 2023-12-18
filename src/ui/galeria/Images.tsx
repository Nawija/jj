import Image, { StaticImageData } from "next/image";

interface ImageType {
  img: StaticImageData;
}

export function Images({ img }: ImageType) {
  return (
    <div
      className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
    >
      <Image
        alt="fotografia jarek olszewski"
        className="transform rounded-lg shadow-xl brightness-90 transition will-change-auto group-hover:brightness-110"
        placeholder="blur"
        src={img}
        width={520}
        height={380}
        sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
      />
    </div>
  );
}
