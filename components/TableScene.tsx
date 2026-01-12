import { Scene } from "./Scene";


export default function TableScene() {
    return (
        <Scene className="translate-y-[-32px] h-full">
            <div className="relative w-full min-w-[1600px] translate-x-[-50%] left-[50%]">
                <span className="absolute w-[50%] h-[20%] translate-x-[27%] translate-y-[141%] origin-top-left rotate-[-13deg]">
                    {/*
                    <p className="text-red-500 text-xs md:text-3xl">
                        Tervetuloa 40v synttäreiilleni<br />
                        24.2. BMKilla <br />
                        meillä on pallomeri<br />
                        lämpimin terveisin:
                    </p>
                    */}
                </span>
                <img alt="Table" src="/assets/wide/pöytä.png" className="w-full h-auto" />
            </div>
        </Scene>
    )
}