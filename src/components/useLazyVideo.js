// src/hooks/useLazyVideo.js
import { useEffect, useRef } from "react";

export function useLazyVideo() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Load each <source> if present, otherwise use data-src
                    el.querySelectorAll("source").forEach(source => {
                        source.src = source.dataset.src;
                    });
                    if (el.dataset.src) el.src = el.dataset.src;
                    el.load();
                    el.play().catch(() => { });
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" } // start loading 200px before it enters view
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return ref;
}