import { useEffect, useRef } from "react";

export default function useObserver({
  enter = () => {},
  exit = () => {},
  condition = true,
}: {
  enter?: () => void;
  exit?: () => void;
  condition?: boolean;
}) {
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && enter && condition) {
          enter();
        } else if (!entry.isIntersecting && exit) {
          exit();
        }
      },
      { threshold: 1.0 }
    );

    const currentLoadMoreRef = loadMoreRef.current;

    if (currentLoadMoreRef) {
      observer.observe(currentLoadMoreRef);
    }

    return () => {
      if (currentLoadMoreRef) {
        observer.unobserve(currentLoadMoreRef);
      }
    };
  }, [enter, exit, condition]);

  return loadMoreRef;
}
