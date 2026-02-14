import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fallbackSrc?: string;
};

const DEFAULT_FALLBACK = "https://placehold.co/1200x800?text=UMKM+Kuliner";

const ImageWithFallback = ({
  src,
  alt,
  className,
  loading = "lazy",
  fallbackSrc = DEFAULT_FALLBACK,
}: ImageWithFallbackProps) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
};

export default ImageWithFallback;
