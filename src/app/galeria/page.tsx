import Image from "next/image";
import Link from "next/link";

interface Photo {
  id: string;
  title: string;
  url: string;
  responsiveImage: {
    webpSrcSet: string;
  };
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
    next: { revalidate: 600 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
        reportazZChrztu {
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
export default async function Galeria() {
  const datoCmsPhoto = await fetchPhotoDatoCms();

  return (
    <>
      <div className="anim-opacity mx-2 mt-3 columns-1 gap-4 text-sm sm:columns-2 lg:px-2 xl:columns-3 2xl:columns-5">
        <div className="after:content shadow-highlight after:shadow-highlight relative mb-5 flex h-[350px] flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-black/90 px-6 text-center text-black after:pointer-events-none after:absolute after:inset-0 after:rounded-lg lg:pt-0">
          <div className="absolute inset-0 flex items-center justify-center opacity-60">
            <span className="flex max-h-full max-w-full items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 1500 1200"
                className="h-auto w-screen fill-white"
              >
                <path d="M1398.2,797.6v-5.9l9.2-0.8l-2.1-14.7l-15.4-0.8l4.2-24.2l-6.7-2.8l-4.2,26.2h-15l0.8,9.1l2.9,6.3l-6.7-0.4v4.4 l-8.3-2.8l-18.6-9c0.8,0.3,3.9,0.7-0.1-12c-4.6-14.3-23.4-14.7-23.4-14.7h-17.5l-24.2-9.9c0,0,0.8-4-10-13.9 c-10.8-9.9-27.1-8.7-27.1-8.7l-26.3-4l-17.9-17.4l-1.2-10.7h31.7l28.8-13.1l12.1-12.7c-52.2,2.8-89.7-11.9-89.7-11.9 c6.3-32.9-23.8-30.1-23.8-30.1l-18.4-25.4l-20-36.5l-5.4-25.8l-10-25.8c0.4-17-5-28.1-5-28.1l-2.9-13.5l-12.1-6.7l-40.1-95.5 c20-138.7-106.8-144.6-119.3-146.6c-12.5-2-60.5,2-60.5,2l-28.8,7.1l-3.8-7.1c16.2-19.6,12.4-35.6-8.3-48.5c1.7-8.1,2.6-16.4,2.6-25 c0-66.7-54.3-120.8-121.3-120.8c-54.8,0-101.1,36.2-116.2,85.8h-5.2c4.8,1.3-68.6,14.3-68.6,14.3s-15.2,22.3,8.3,38v13.7h-19.8 c-0.7-3.2-3.7-5.6-7.3-5.6h-4c-0.7-4.2-4.5-7.5-9.2-7.5H327.9c-0.9-3.9-4.6-6.9-9-6.9h-39.4c-4.5-6.7-12.4-11.1-21.4-11.1H139.3 c-0.5,0-1.1,0-1.6,0c-1.3-1.2-3-1.9-4.9-1.9h-18.5c-0.7,0-1.4,0.1-2.1,0.3c0,0-1.6,0.5-2.9,1.6c-16.7,15.1-16.6,71-16.6,71 c0.2,61.1,6.2,74.2,16.6,79.7c2,1,3.8,1.6,4.9,1.9h18.5c3.2,0,5.9-2.1,6.8-4.9h118.6c11,0,20.3-6.6,23.8-15.9h7.7l23.2,15.9 c0,0,13.8,2.1,29.6,8.9c15.9,6.7,46.3,28.4,46.3,28.4c28.8,12.2,40,23.5,40,23.5c12.5,30.5,16.7,147,16.7,147 c10,86.4,28.4,101,28.4,101c2.1,16.6,15,39.2,15,39.2c-17.9-1.2-25.9,2.8-25.9,2.8s-75.5,34.5-50.5,115.7 c25,81.2,212,185.1,212,185.1l90.3,63.8c-15.5-0.5-11.9,21.8-11.9,21.8l8.3,19.4l-36.7,74.1l-15.4-1.6l-15.4,4c0,0-8.8,3.2-20,12.3 c-11.3,9.1-2.5,10.3-2.5,10.3s9.2,5.2,9.6,6.3s49.6,5.9,65.5,7.1c15.9,1.2,50.9,0.4,50.9,0.4l30.9-2.8l17.5-7.9 c-9.6-27.7,32.5-32.1,32.5-32.1s56.3-40.4,59.7-36.1c3.3,4.4,45.9,10.7,59.3,9.1c13.4-1.6,29.2-18.6,36.3-22.6 c7.1-4,68-33.7,68-33.7s5,93.5,8.3,108.2c3.3,14.7,0.8,28.1,14.2,25c13.3-3.2,19.2-28.9,19.2-28.9l-8.8-20.6l0.8-49.9 c0,0-3.8-48.4-2.1-45.6c1.7,2.8,37.1,4,37.1,4l17.1-2l5.4,20.2c0,0,0,31.3-2.1,51.1c-2.1,19.8,3.3,12.7,16.7,10.7 c13.4-2,12.1-15.1,12.1-15.1l-1.2-9.5l1.2-8.3l7.5-28.9l30.5,36.9l-2.5,19.8l14.6,18.6l31.3,3.2h24.2l61.8-33.7 c3.3-19.4-0.8-31.7-0.8-31.7c-2.5-28.1-13.4-36.9-20.9-46.4c-7.5-9.5-20.4-15.1-20.4-15.1l-12.5-18.6c4.2-18.6-7.5-35.3-7.5-35.3 l9.6-86.4l11.7,11.9l1.2,36.5l15.9-3.6l-1.2-22.6l-2.1-25.4l-17.5-23.4v-4.8l32.5,3.2l8.3-8.7l7.1,10.3l-10,11.5l11.3,9.9l10.8-6.7 l2.5-15.1l9.2,5.2c0,0,0.4,11.5,3.8,12.7c3.3,1.2,10.4-3.6,10.4-3.6s4.2,2,15,0c10.8-2,8.3-3.2,8.3-3.2l2.1-45.2L1398.2,797.6z M352.1,287.5c-3.3-2.4-24-5.2-24-5.2l-4.7-3.6c1-0.5,1.9-1.3,2.7-2.1c0.6,0.1,1.3,0.2,2,0.2h47.2l3.2,9.5c0,0,0,0,1.7,7.1 C381.8,300.6,355.5,289.9,352.1,287.5z M494.4,256.2h20v3h5v25.1l-3.5,2.5l-14.6-27.6l-11,1.1C492.2,259.6,493.7,258.1,494.4,256.2z M483.6,343.4l-13.4-25l36.4-18.5l10.7,13.3h59.9l19.6-19.8h6v-2.8l13.4,7.5l21.3,44C562,387.4,532.4,488.4,532.4,488.4L483.6,343.4 z M682.9,669c-5.5,0.5-38.5,2.9-38.5,2.9c-5.5-1.3-64.2-14.8-64.2-14.8l-22.4-4.4c0,0,21.6-10.6,33.6-28c0,0,62.2,10.4,53.8-29.3 c0,0-0.5-13.5,27.9-33.7l54,129.1C725.9,690.2,688.3,668.5,682.9,669z M816.9,984.5l-46.1-35.4c29.7,6,46.1,15.5,46.1,15.5V984.5z M1169.1,714.9l-5.7-11.4l11.3-12.6l2.8,12L1169.1,714.9z M1175.9,715.4l3.9-7.8h4.2l2.1,6.6L1175.9,715.4z" />{" "}
              </svg>
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
          </div>

          <p className="max-w-[40ch] text-white sm:max-w-[32ch]">
            Serdecznie witam, galeria zdjęć, które uwieczniły wyjątkowe chwile z
            tego niepowtarzalnego wydarzenia.
          </p>
          <p className="max-w-[40ch] text-white sm:max-w-[32ch]">
            Mam nadzieję, że każda z zamieszczonych fotografii pozwoli na
            współdzielenie emocji i przeżyć związanych z tym wyjątkowym
            momentem.
          </p>
          <p className="absolute bottom-2 right-12 mb-4 text-sm text-white/80">
            Jarek Olszewski
          </p>
        </div>
        {datoCmsPhoto.data.reportazZChrztu.img.map((photo: Photo) => (
          <Link
            key={photo.id}
            href={`/galeria/${photo.id}`}
            shallow
            passHref
            className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
          >
            <Image
              alt="fotografia jarek olszewski"
              className="transform rounded-lg shadow-xl brightness-90 transition will-change-auto group-hover:brightness-110"
              src={photo.responsiveImage.webpSrcSet}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/EP+pAAAABJ0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAANSURBVAiZY/j//z8ABf4C/qc1gYQAAAAASUVORK5CYII="
              width={520}
              height={380}
              sizes="(max-width: 640px) 100vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
            />
          </Link>
        ))}
      </div>
      <footer className="mt-12 bg-zinc-900 p-6 text-center font-semibold text-white sm:p-12">
        Dziękuję za skorzystanie z moich usług, Podziel się opinią na{" "}
        <Link
          href="/"
          target="_blank"
          className="font-semibold text-yellow-500 hover:text-yellow-400"
          rel="noreferrer"
        >
          Google
        </Link>{" "}
        lub{" "}
        <Link
          href="/"
          target="_blank"
          className="font-semibold text-yellow-500 hover:text-yellow-400"
          rel="noreferrer"
        >
          Facebook
        </Link>
      </footer>
    </>
  );
}
