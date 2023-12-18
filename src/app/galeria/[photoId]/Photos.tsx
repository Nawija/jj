"use client";

import Image from "next/image";

interface Props {
  photos: Array<{
    id: string;
    url: string;
  }>;
  photoIndex: number;
}

export default function PhotoId({ photos, photoIndex }: Props) {
  return (
    <div className="mb-6 flex w-full items-start justify-center lg:mt-0">
      <Image
        className="max-h-screen"
        height={800}
        width={800}
        src={photos[photoIndex].url}
        alt="photo"
      />
    </div>
  );
}
