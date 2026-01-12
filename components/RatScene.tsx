import { Scene } from "./Scene";

export default function RatScene() {
    return (
        <Scene className="h-fit overflow-visible translate-y-[372px]">
            <div className="relative overflow-visible">
                <div className="flex justify-center absolute bottom-0 w-full">
                    <img
                        src="/assets/rat.png"
                        alt="Rat"
                        className="max-h-[40vh] w-[40vw] object-contain"/>
                    <img
                        src="/assets/osta.png"
                        alt="Buy now"
                        className="max-h-[20vh] w-[30vw] translate-y-[5vw] object-contain"/>
                </div>
            </div>
        </Scene>
    )
}
