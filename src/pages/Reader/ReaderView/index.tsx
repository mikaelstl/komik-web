import { useEffect, useRef, useState } from "react";
import { Cover } from "../style";
import { ComicCover } from "../../../components/cards/ComicCover";

interface ReaderViewProps {
  image?: Blob;
  alt?: string;
}

export function ReaderView({
  image,
}: ReaderViewProps) {
  const coverRef = useRef<HTMLDivElement>(null);

  const [src, setSource] = useState<string>();
  
  useEffect(() => {
    if (!image) return;

    const url = URL.createObjectURL(image!);
    setSource(url);
    
    return () => {
      URL.revokeObjectURL(url);
      setSource(undefined);
    }
  }, [image]);
  
  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src!;

    const cover = coverRef.current;
    if (!cover) return;
  }, [src]);

  return (
    <Cover
      ref={coverRef}
    >
      <ComicCover image={src} />
    </Cover>
  )
}