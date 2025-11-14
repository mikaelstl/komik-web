import { useEffect, useRef, useState } from "react";
import { Cover } from "../style";
import { ComicCover } from "../../../components/cards/ComicCover";
import { LoadingSpinner } from "../../../components/LoadingSpinner";

interface ReaderViewProps {
  image?: Blob;
  alt?: string;
}

export function ReaderView({
  image,
}: ReaderViewProps) {
  const coverRef = useRef<HTMLDivElement>(null);

  const [src, setSource] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    setLoading(true);
    if (!image) return;

    const url = URL.createObjectURL(image!);
    setSource(url);
    
    setLoading(false);
    return () => {
      URL.revokeObjectURL(url);
      setSource(undefined);
    }
  }, [image]);

  return (
    <Cover
      ref={coverRef}
    >
      { loading
        ? <LoadingSpinner />
        : <ComicCover image={src} />
      }
    </Cover>
  )
}