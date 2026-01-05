"use client";

import { useEffect, useState } from "react";
import { Scene } from "./Scene";

export default function OfficeScene() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const onScroll = () => {
        const position = window.pageYOffset;
        setScrollProgress(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <Scene className="min-h-[100vh] relative">
            <div style={{
                translate: `0 ${scrollProgress * 0.5}px`,
            }} className="absolute origin-top scale-150 md:scale-100">
                <img alt="Toimisto" src="/assets/toimisto.png" />
            </div>
            <div style={{
                translate: `0 ${scrollProgress * 0.3 + 280}px`
            }} className="absolute">
                <img alt="Cubicles" src="/assets/cubicles.png" />
            </div>
        </Scene>
    )
}