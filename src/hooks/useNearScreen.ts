import { useEffect, useRef, useState } from "react";

export function useNearScreen<T extends Element>() {
  const [show, setShow] = useState(false);
  const element = useRef<T>();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    } , {
        rootMargin: '0px',
        threshold: 0.2
    });

    if (element.current) {
      observer.observe(element.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [element]);

  return [show, element];
}
