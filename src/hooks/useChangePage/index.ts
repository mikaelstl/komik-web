import { useEffect } from "react";

export function useChangePage(
  prev: () => void,
  next: () => void,
) {
  useEffect(() => {
    function handleKeyup(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') {
        prev();
      } else if (e.key === 'ArrowRight') {
        next();
      }
    }

    window.addEventListener('keyup', handleKeyup);

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [prev, next])
}