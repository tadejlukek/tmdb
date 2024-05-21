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
  const observerRef = useRef(null);

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

    const currentObserverRef = observerRef.current;

    if (currentObserverRef) {
      observer.observe(currentObserverRef);
    }

    return () => {
      if (currentObserverRef) {
        observer.unobserve(currentObserverRef);
      }
    };
  }, [enter, exit, condition]);

  return observerRef;
}
