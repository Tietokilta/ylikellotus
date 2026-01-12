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
        <Scene className="h-[85vh] relative">
            <div style={{
                translate: `0 ${scrollProgress * 0.5}px`,
            }} className="absolute min-w-[1600px] w-full min-h-[85vh] translate-x-[-50%] left-[50%]">
                <img alt="Toimisto" src="/assets/wide/toimisto.png" />
            </div>
            <div style={{
                translate: `0 ${scrollProgress * 0.25 + 320}px`
            }} className="absolute min-w-[800px] w-full translate-x-[-50%] left-[50%]">
                <img alt="Cubicles" src="/assets/wide/cubicles.png" />
            </div>
        </Scene>
    )
}