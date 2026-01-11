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
        <Scene className="relative min-h-[100vh] border">
            <div className="absolute min-w-[1400px] w-full translate-x-[-50%] left-[50%] ">
                <img alt="Computer" src="/assets/wide/kone.png" className="w-full h-auto"/>
                <div className="absolute left-[37.1%] top-[9.7%] w-[26.1%] border-black border-2" data-balloon-spawnable="false">
                    {React.createElement(windowIndex[window])}
                </div>
                <div
                    title="Katso mainosvideo" data-balloon-spawnable="false"
                    className="absolute left-[23%] top-[6.5%] w-[12%] h-[3%] cursor-pointer"
                    onClick={() => setWindow("AdPlayer")}/>
                <div
                    title="Pelaa peliä" data-balloon-spawnable="false"
                    className="absolute left-[35%] top-[6.5%] w-[12%] h-[3%] cursor-pointer"
                    onClick={() => setWindow("GameOne")}/>
                <div
                    title="Pelaa toista peliä" data-balloon-spawnable="false"
                    className="absolute left-[47%] top-[6.5%] w-[12%] h-[3%] cursor-pointer"
                    onClick={() => setWindow("GameTwo")}/>
                <a
                    title="Osta VIP-lippu" data-balloon-spawnable="false"
                    className="absolute left-[59%] top-[6.5%] w-[12%] h-[3%] cursor-pointer"
                    href="/exe-instructions"/>
            </div>
        </Scene>
    )
}