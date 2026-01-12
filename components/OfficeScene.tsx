"use client";

import { useEffect, useState } from "react";
import { Scene } from "./Scene";
import Countdown from "@/components/Countdown";
import {START_DATE} from "@/app/constants";
import ExportedImage from 'next-image-export-optimizer'
import toimistoImg from '@/public/assets/wide/toimisto.png'
import cubiclesImg from '@/public/assets/wide/cubicles.png'

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
        <Scene className="!h-[85vh] relative">
            <div style={{
                translate: `0 ${scrollProgress * 0.5}px`,
            }} className="absolute min-w-[1600px] w-full min-h-[85vh] translate-x-[-50%] left-[50%]">
                <ExportedImage alt="Toimisto" src={toimistoImg} />
                <div className="absolute w-[9%] h-[2.2%] translate-x-[-50%] left-[calc(50%+8px)] bottom-[77.3%]">
                    <Countdown targetDate={START_DATE} />
                </div>
            </div>
            <div style={{
                translate: `0 ${scrollProgress * 0.25 + 320}px`
            }} className="absolute min-w-[800px] w-full translate-x-[-50%] left-[50%]">
                <ExportedImage alt="Cubicles" src={cubiclesImg} />
            </div>
        </Scene>
    )
}