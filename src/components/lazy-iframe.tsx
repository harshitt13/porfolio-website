import { useRef, useState, useEffect } from "react";

interface LazyIframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  src: string;
}

export default function LazyIframe({ src, ...props }: LazyIframeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? <iframe src={src} {...props} /> : null}
    </div>
  );
}
