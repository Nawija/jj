import { Images } from "@/src/ui/galeria/Images";
// import Bridge from "@/components/Icons/Bridge";

import s1img from "@/public/images/s1.jpg";
import s2img from "@/public/images/s2.jpg";
import s3img from "@/public/images/s3.jpg";
import s4img from "@/public/images/s4.jpg";

export default function Galeria() {
  return (
    <>
      <div className="anim-opacity columns-1 gap-4 text-sm sm:columns-2 xl:columns-3 2xl:columns-5 lg:px-2">
        <div className="after:content shadow-highlight after:shadow-highlight relative mb-5 flex h-[300px] flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-black/90 px-6 text-center text-white after:pointer-events-none after:absolute after:inset-0 after:rounded-lg lg:pt-0">
          <p className="max-w-[40ch] text-white/80 sm:max-w-[32ch]">
            Serdecznie witam, galeria zdjęć, które uwieczniły wyjątkowe chwile z
            tego niepowtarzalnego wydarzenia.
          </p>
          <p className="max-w-[40ch] text-white/80 sm:max-w-[32ch]">
            Mam nadzieję, że każda z zamieszczonych fotografii pozwoli na
            współdzielenie emocji i przeżyć związanych z tym wyjątkowym
            momentem.
          </p>
          <p className="absolute bottom-2 right-12 mb-4 text-sm text-white/80">
            Jarek Olszewski
          </p>
        </div>
        <Images img={s1img} />
        <Images img={s3img} />
        <Images img={s2img} />
        <Images img={s4img} />
        <Images img={s3img} />
        <Images img={s1img} />
        <Images img={s2img} />
        <Images img={s1img} />
        <Images img={s3img} />
        <Images img={s2img} />
        <Images img={s4img} />
        <Images img={s4img} />
      </div>
      <footer className="p-6 text-center text-sm text-white/80 sm:p-12">
        Dziękuję za skorzystanie z moich usług, Podziel się opinią na{" "}
        <a
          href="/"
          target="_blank"
          className="font-semibold text-white hover:text-white/80"
          rel="noreferrer"
        >
          Google
        </a>{" "}
        lub{" "}
        <a
          href="/"
          target="_blank"
          className="font-semibold text-white hover:text-white/80"
          rel="noreferrer"
        >
          Facebook
        </a>
      </footer>
    </>
  );
}
