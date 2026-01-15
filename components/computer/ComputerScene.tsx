"use client";

import React, {useEffect, useState} from 'react'
import {Scene} from "@/components/Scene";
import AdPlayer from "@/components/computer/windows/AdPlayer";
import GameOne from "@/components/computer/windows/GameOne";
import GameTwo from "@/components/computer/windows/GameTwo";
import ExportedImage from 'next-image-export-optimizer'
import koneImg from '@/public/assets/wide/kone.png'
import poydanalusImg from '@/public/assets/wide/pöydänalus.png'
import useBreakpoint from "@/components/hooks/breakpoint";

export type WindowKey = "AdPlayer" | "GameOne" | "GameTwo";

const windowIndex: Record<WindowKey, React.FC> = {
    "AdPlayer": AdPlayer,
    "GameOne": GameOne,
    "GameTwo": GameTwo
}

export default function ComputerScene() {
    const [computerWindow, setComputerWindow] = useState("AdPlayer" as WindowKey);

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

    const [yTop, setYTop] = useState(0);
    const hasMdBreakpoint = useBreakpoint("md");

    return (
        <Scene className="col-start-1 row-start-1">
            <div className="relative min-w-[1200px] md:min-w-[3400px] w-full translate-x-[-50%] left-[50%] ">
                <ExportedImage ref={(el) => {if (el) setYTop(el.offsetTop + el.clientTop)}}
                    alt="Computer" src={koneImg} className="w-full h-auto relative -z-10"/>
                <div style={{
                    marginTop: `${(scrollProgress - yTop - (hasMdBreakpoint ? 2000 : 0)) * -0.2}px`
                }} className="min-w-[1600px] md:min-w-[3400px] w-auto h-auto relative -z-20">
                    <ExportedImage alt="Under Table" src={poydanalusImg} />
                </div>
                <div className="absolute left-[37.2%] top-[4%] w-[26%] h-[25.6%] border-black border-2" data-balloon-spawnable="false">
                    {React.createElement(windowIndex[computerWindow])}
                </div>
                <div
                    title="Katso mainosvideo" data-balloon-spawnable="false"
                    className="absolute left-[37.25%] top-[2.5%] w-[5.5%] h-[2%] translate-y-[-15%] cursor-pointer flex flex-col justify-center"
                    onClick={() => setComputerWindow("AdPlayer")}>
                        <p className="text-[40%] lg:text-[70%] text-center font-bold -m-2 p-2">RatTube</p>
                </div>
                <div
                    title="Pelaa peliä" data-balloon-spawnable="false"
                    className="absolute left-[42.75%] top-[2.5%] w-[5.5%] h-[2%] translate-y-[-15%] cursor-pointer flex flex-col justify-center"
                    onClick={() => setComputerWindow("GameOne")}>
                        <p className="text-[40%] lg:text-[70%] text-center font-bold -m-2 p-2">Game 1</p>
                </div>
                <div
                    title="Pelaa toista peliä" data-balloon-spawnable="false"
                    className="absolute left-[48.25%] top-[2.5%] w-[5.5%] h-[2%] translate-y-[-15%] cursor-pointer flex flex-col justify-center"
                    onClick={() => setComputerWindow("GameTwo")}>
                        <p className="text-[40%] lg:text-[70%] text-center font-bold -m-2 p-2">Game 2</p>
                </div>
                <a
                    title="Osta VIP-lippu" data-balloon-spawnable="false"
                    className="absolute left-[53.75%] top-[2.5%] w-[5.5%] h-[2%] translate-y-[-15%] cursor-pointer flex flex-col justify-center"
                    href="/exe-instructions" target="_blank">
                        <p className="text-[40%] lg:text-[70%] text-center font-bold -m-2 p-2">VIP-ticket?</p>
                </a>
            </div>
        </Scene>
    )
}