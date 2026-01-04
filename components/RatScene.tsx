import { Scene } from "./Scene";

export default function RatScene() {
    return (
        <Scene className="w-[calc(100vh*11/16)] min-h-[0] h-[5vh]">
            <div
                style={{
                    position: "relative",
                    overflow: "visible",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <img
                        src="/assets/rat.png"
                        alt="Rat left"
                        style={{ 
                            width: "40%", 
                            objectFit: "contain",
                            transform: "translateY(-100%)"
                        }}
                    />
                    <img
                        src="/assets/osta1.png"
                        alt="Rat right"
                        style={{ 
                            width: "40%", 
                            objectFit: "contain",
                            transform: "translateY(-70%)"
                        }}
                    />
                </div>
            </div>
        </Scene>
    )
}