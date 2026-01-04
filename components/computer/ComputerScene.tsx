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

function openVip() {
    open("/assets/vip_video.webm", "_blank");
}

export default function ComputerScene() {
    const [window, setWindow] = useState("AdPlayer" as WindowKey);

    return (
        <Scene>
            <div className="relative w-full">
                <img alt="Computer" src="/assets/kone.png" className="w-full h-auto"/>
                <div className="absolute left-[23%] top-[6.5%] max-w-[54.5%] border-black border-2">
                    {React.createElement(windowIndex[window])}
                </div>
                <div
                    title="Katso mainosvideo"
                    className="absolute left-[23%] top-[6.5%] w-[12%] h-[3%] cursor-pointer"
                    onClick={() => setWindow("AdPlayer")}/>
                <div
                    title="Pelaa peliä"
                    className="absolute left-[35%] top-[6.5%] w-[12%] h-[3%] cursor-pointer"
                    onClick={() => setWindow("GameOne")}/>
                <div
                    title="Pelaa toista peliä"
                    className="absolute left-[47%] top-[6.5%] w-[12%] h-[3%] cursor-pointer"
                    onClick={() => setWindow("GameTwo")}/>
                <div
                    title="Osta VIP-lippu"
                    className="absolute left-[59%] top-[6.5%] w-[12%] h-[3%] cursor-pointer"
                    onClick={() => openVip()}/>
            </div>
        </Scene>
    )
}