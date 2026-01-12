"use client";

import React, { useState } from 'react'
import {Scene} from "@/components/Scene";
import AdPlayer from "@/components/computer/windows/AdPlayer";
import GameOne from "@/components/computer/windows/GameOne";
import GameTwo from "@/components/computer/windows/GameTwo";

export type WindowKey = "AdPlayer" | "GameOne" | "GameTwo";

const windowIndex: Record<WindowKey, React.FC> = {
    "AdPlayer": AdPlayer,
    "GameOne": GameOne,
    "GameTwo": GameTwo
}

export default function ComputerScene() {
    const [window, setWindow] = useState("AdPlayer" as WindowKey);

    return (
        <Scene className="translate-y-[-600px]">
            <div className="relative min-w-[1600px] w-full translate-x-[-50%] left-[50%] ">
                <img alt="Computer" src="/assets/wide/kone.png" className="w-full h-auto"/>
                <img alt="Computer" src="/assets/wide/pöydänalus.png" className="w-auto h-auto"/>
                <div className="absolute left-[37.2%] top-[4%] w-[26%] h-[25.6%] border-black border-2" data-balloon-spawnable="false">
                    {React.createElement(windowIndex[window])}
                </div>
                <div
                    title="Katso mainosvideo" data-balloon-spawnable="false"
                    className="absolute left-[37.25%] top-[2.5%] w-[5.5%] h-[2%] cursor-pointer"
                    onClick={() => setWindow("AdPlayer")}>
                        <p className="h-full text-[80%] text-center font-bold translate-y-[-15%]">RatTube</p>
                </div>
                <div
                    title="Pelaa peliä" data-balloon-spawnable="false"
                    className="absolute left-[42.75%] top-[2.5%] w-[5.5%] h-[2%] cursor-pointer"
                    onClick={() => setWindow("GameOne")}>
                        <p className="h-full text-[80%] text-center font-bold translate-y-[-15%]">Game 1</p>
                </div>
                <div
                    title="Pelaa toista peliä" data-balloon-spawnable="false"
                    className="absolute left-[48.25%] top-[2.5%] w-[5.5%] h-[2%] cursor-pointer"
                    onClick={() => setWindow("GameTwo")}>
                        <p className="h-full text-[80%] text-center font-bold translate-y-[-15%]">Game 2</p>
                </div>
                <div
                    title="Osta VIP-lippu" data-balloon-spawnable="false"
                    className="absolute left-[53.75%] top-[2.5%] w-[5.5%] h-[2%] cursor-pointer"
                    onClick={() => open("/exe-instructions", "_blank")}>
                        <p className="h-full text-[80%] text-center font-bold translate-y-[-15%]">VIP-ticket?</p>
                </div>
            </div>
        </Scene>
    )
}