const fetchPhotoDatoCms = async () => {
  const res = await fetch("https://graphql.datocms.com/", {
    next: { revalidate: 600 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
        ${queryFetchDatoCms} {
            img {
              id
              title
              responsiveImage {
                src
                srcSet
                webpSrcSet
              }
              url
            }
          }
              }`,
    }),
  });
  return await res.json();
};

export default fetchPhotoDatoCms;
