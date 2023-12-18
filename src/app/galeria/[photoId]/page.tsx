import Photos from "./Photos";

const fetchPhotoDatoCms = async () => {
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

export default async function PhotoId({ params: { photoId } }) {
  const datoCms = await fetchPhotoDatoCms(photoId);
  const photos = datoCms.data.reportazZChrztu.img;
  const photoIndex = photos.findIndex((photo) => photo.id === photoId);
  return <Photos photos={photos} photoIndex={photoIndex} />;
}
