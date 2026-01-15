"use client";

import { useEffect, useState } from "react";
import { Scene } from "./Scene";
import Countdown from "@/components/Countdown";
import {START_DATE} from "@/app/constants";
import ExportedImage from 'next-image-export-optimizer'
import toimistoImg from '@/public/assets/wide/toimisto.png'
import cubiclesImg from '@/public/assets/wide/cubicles.png'
import useBreakpoint from "@/components/hooks/breakpoint";

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

    const hasMdBreakpoint = useBreakpoint("md");

    return (
        <Scene className="relative grid place-items-center min-w-[1600px] md:min-w-[3400px]">
            <div style={{
                transform: `translateY(${scrollProgress * 0.7}px)`,
            }} className="min-w-[1600px] md:min-w-[3400px] w-full">
                <div className="grid place-items-center">
                    <ExportedImage alt="Toimisto" src={toimistoImg} className="col-start-1 row-start-1" />
                    <div className="grid col-start-1 row-start-1 !min-h-[20px] md:!min-h-[35px] !min-w-[9%] -mb-[-29.7%] ml-[1.1%]">
                        <Countdown targetDate={START_DATE} />
                    </div>
                </div>
            </div>
            <div style={{
                top: `${scrollProgress * 0.5 + (hasMdBreakpoint ? 700 : 300)}px`
            }} className="absolute min-w-[1600px] md:min-w-[3400px] w-full">
                <ExportedImage alt="Cubicles" src={cubiclesImg} />
            </div>
        </Scene>
    )
}