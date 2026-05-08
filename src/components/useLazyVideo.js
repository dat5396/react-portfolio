// src/hooks/useLazyVideo.js
import { useEffect, useRef } from "react";

export function useLazyVideo() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let loaded = false;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (!loaded) {
                        el.querySelectorAll("source").forEach(source => {
                            source.src = source.dataset.src;
                        });
                        if (el.dataset.src) el.src = el.dataset.src;
                        el.load();
                        loaded = true;
                    }
                    el.play().catch(() => { });
                } else {
                    el.pause();
                }
            },
            { rootMargin: "200px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return ref;
}