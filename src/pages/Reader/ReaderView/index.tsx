import { useEffect, useRef, useState } from "react";
import { Cover } from "../style";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { ComicPage } from "../ComicPage";

interface ReaderViewProps {
  image?: Blob;
  alt?: string;
}

interface Size {
  width: number;
  height: number;
}

export function ReaderView({
  image,
}: ReaderViewProps) {
  const coverRef = useRef<HTMLDivElement>(null);

  const [src, setSource] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const [height, setHeight] = useState<number>(100);
  const zoom = 1.2;

  const onZoom = (evt: React.WheelEvent) => {
    evt.deltaY > 0
      ? setHeight(prev => prev/zoom)
      : setHeight(prev => prev*zoom)
  }
  
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
      style={{
        width: 'auto',
        height: `${height}%`,
        transition: "width 0.1s, height 0.1s"
      }}
      onWheel={() => console.log('ZOOOOOMM!!')}
    >
      { loading
        ? <LoadingSpinner />
        : <ComicPage
            image={src}
          />
      }
    </Cover>
  )
}