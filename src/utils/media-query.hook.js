import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  const isBrowser = typeof window !== "undefined";
  useEffect(() => {
    const media = isBrowser ? window.matchMedia(query) : true;
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query, isBrowser]);

  return matches;
}

export const useIsXXXSmall = () => useMediaQuery("(max-width: 376px)");
export const useIsXXSmall = () => useMediaQuery("(max-width: 392px)");
export const useIsXSmall = () => useMediaQuery("(max-width: 575px)");
export const useIsSmall = () => useMediaQuery("(max-width: 767px)");
export const useIsMedium = () => useMediaQuery("(max-width: 991px)");
export const useIsLarge = () => useMediaQuery("(max-width: 1249px)");
export const useIsXLarge = () => useMediaQuery("(max-width: 1599px)");
export const useIsXXLarge = () => useMediaQuery("(min-width: 1600px)");
