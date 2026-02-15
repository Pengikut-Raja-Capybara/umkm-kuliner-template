import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fallbackSrc?: string;
};

const DEFAULT_FALLBACK = "https://placehold.co/1200x800/f97316/ffffff?text=Gambar";

// Helper untuk resolve path dengan base URL (untuk GitHub Pages)
const resolveAssetPath = (path: string): string => {
  // Jika sudah http/https, return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Jika path absolute (mulai dengan /), prepend base URL
  if (path.startsWith('/')) {
    const baseUrl = import.meta.env.BASE_URL || '/';
    // Hindari double slash
    return baseUrl.endsWith('/') ? `${baseUrl}${path.slice(1)}` : `${baseUrl}${path}`;
  }
  
  // Path relative, return as-is
  return path;
};

const ImageWithFallback = ({
  src,
  alt,
  className,
  loading = "lazy",
  fallbackSrc = DEFAULT_FALLBACK,
}: ImageWithFallbackProps) => {
  const [currentSrc, setCurrentSrc] = useState(resolveAssetPath(src));
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && currentSrc !== fallbackSrc) {
      console.warn(`Failed to load image: ${src} (resolved: ${currentSrc})`);
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;
