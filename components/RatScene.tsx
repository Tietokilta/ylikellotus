import { Scene } from "./Scene";

export default function RatScene() {
    return (
        <Scene className="h-fit mt-[-25%] min-h-[0]">
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
                        }}
                    />
                    <img
                        src="/assets/osta1.png"
                        alt="Rat right"
                        style={{ 
                            width: "40%", 
                            objectFit: "contain",
                        }}
                    />
                </div>
            </div>
        </Scene>
    )
}