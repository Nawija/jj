import Photos from "./Photos";

interface Photo {
  id: string;
  url: string;
}

interface DatoCmsData {
  data: {
    reportazZChrztu: {
      img: Photo[];
    };
  };
}

const fetchPhotoDatoCms = async (): Promise<DatoCmsData> => {
  const res = await fetch("https://graphql.datocms.com/", {
    next: { revalidate: 60 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: "{ reportazZChrztu { img { id url } } }",
    }),
  });
  const datoCms = await res.json();
  return datoCms;
};

interface PhotoIdParams {
  photoId: string;
}

export default async function PhotoId({
  params: { photoId },
}: {
  params: PhotoIdParams;
}) {
  const datoCms = await fetchPhotoDatoCms();
  const photos: Photo[] = datoCms.data.reportazZChrztu.img;
  const photoIndex = photos.findIndex((photo) => photo.id === photoId);
  return <Photos photos={photos} photoIndex={photoIndex} />;
}
