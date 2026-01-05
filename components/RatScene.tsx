import { Scene } from "./Scene";

export default function RatScene() {
    return (
        <Scene className="h-fit min-h-[0] overflow-visible">
            <div className="relative overflow-visible">
                <div className="flex justify-center absolute bottom-0">
                    <img
                        src="/assets/rat.png"
                        alt="Rat left"
                        className="w-[40%] object-contain"/>
                    <img
                        src="/assets/osta1.png"
                        alt="Rat right"
                        className="w-[40%] object-contain"/>
                </div>
            </div>
        </Scene>
    )
}
