import { useEffect, useRef, useState, type CSSProperties } from "react";

type Props = {
  src: string | string[];
  className?: string;
  style?: CSSProperties;
};

const FADE_IN_MS = 500;
const FADE_OUT_MS = 550;
const FADE_OUT_AT = 0.55; // segundos antes do fim

/** Vídeo de fundo que aparece e desaparece suavemente, em ciclo. */
export function FadingVideo({ src, className, style }: Props) {
  const sources = Array.isArray(src) ? src : [src];
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLVideoElement>(null);
  const raf = useRef<number | null>(null);
  const fadingOut = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const fade = (to: number, ms: number) => {
      if (raf.current) cancelAnimationFrame(raf.current);
      const from = Number(video.style.opacity || 0);
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / ms);
        video.style.opacity = String(from + (to - from) * t);
        if (t < 1) raf.current = requestAnimationFrame(step);
      };
      raf.current = requestAnimationFrame(step);
    };

    const onLoaded = () => {
      fadingOut.current = false;
      fade(1, FADE_IN_MS);
    };
    const onTime = () => {
      if (!video.duration || fadingOut.current) return;
      if (video.duration - video.currentTime <= FADE_OUT_AT) {
        fadingOut.current = true;
        fade(0, FADE_OUT_MS);
      }
    };
    const onEnded = () => {
      if (sources.length === 1) {
        video.currentTime = 0;
        void video.play();
        fadingOut.current = false;
        fade(1, FADE_IN_MS);
      } else {
        setIndex((i) => (i + 1) % sources.length);
      }
    };

    video.style.opacity = "0";
    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("timeupdate", onTime);
    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("ended", onEnded);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [index, sources.length]);

  return (
    <video
      ref={ref}
      key={sources[index]}
      src={sources[index]}
      className={className}
      style={{ opacity: 0, ...style }}
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
