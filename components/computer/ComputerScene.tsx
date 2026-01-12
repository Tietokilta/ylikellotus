"use client";

import React, { useState } from 'react'
import {Scene} from "@/components/Scene";
import AdPlayer from "@/components/computer/windows/AdPlayer";
import GameOne from "@/components/computer/windows/GameOne";
import GameTwo from "@/components/computer/windows/GameTwo";
import ExportedImage from 'next-image-export-optimizer'
import koneImg from '@/public/assets/wide/kone.png'
import poydanalusImg from '@/public/assets/wide/pöydänalus.png'

export type WindowKey = "AdPlayer" | "GameOne" | "GameTwo";

const windowIndex: Record<WindowKey, React.FC> = {
    "AdPlayer": AdPlayer,
    "GameOne": GameOne,
    "GameTwo": GameTwo
}

export default function ComputerScene() {
    const [window, setWindow] = useState("AdPlayer" as WindowKey);

    return (
        <Scene className="md:translate-y-[-600px] translate-y-[-400px]">
            <div className="relative min-w-[1000px] w-full translate-x-[-50%] left-[50%] ">
                <ExportedImage alt="Computer" src={koneImg} className="w-full h-auto"/>
                <ExportedImage alt="Under Table" src={poydanalusImg} className="w-auto h-auto"/>
                <div className="absolute left-[37.2%] top-[4%] w-[26%] h-[25.6%] border-black border-2" data-balloon-spawnable="false">
                    {React.createElement(windowIndex[window])}
                </div>
                <div
                    title="Katso mainosvideo" data-balloon-spawnable="false"
                    className="absolute left-[37.25%] top-[2.5%] w-[5.5%] h-[2%] translate-y-[-15%] cursor-pointer flex flex-col justify-center"
                    onClick={() => setWindow("AdPlayer")}>
                        <p className="text-[40%] lg:text-[70%] text-center font-bold -m-2 p-2">RatTube</p>
                </div>
                <div
                    title="Pelaa peliä" data-balloon-spawnable="false"
                    className="absolute left-[42.75%] top-[2.5%] w-[5.5%] h-[2%] translate-y-[-15%] cursor-pointer flex flex-col justify-center"
                    onClick={() => setWindow("GameOne")}>
                        <p className="text-[40%] lg:text-[70%] text-center font-bold -m-2 p-2">Game 1</p>
                </div>
                <div
                    title="Pelaa toista peliä" data-balloon-spawnable="false"
                    className="absolute left-[48.25%] top-[2.5%] w-[5.5%] h-[2%] translate-y-[-15%] cursor-pointer flex flex-col justify-center"
                    onClick={() => setWindow("GameTwo")}>
                        <p className="text-[40%] lg:text-[70%] text-center font-bold -m-2 p-2">Game 2</p>
                </div>
                <div
                    title="Osta VIP-lippu" data-balloon-spawnable="false"
                    className="absolute left-[53.75%] top-[2.5%] w-[5.5%] h-[2%] translate-y-[-15%] cursor-pointer flex flex-col justify-center"
                    onClick={() => open("/exe-instructions", "_blank")}>
                        <p className="text-[40%] lg:text-[70%] text-center font-bold -m-2 p-2">VIP-ticket?</p>
                </div>
            </div>
        </Scene>
    )
}