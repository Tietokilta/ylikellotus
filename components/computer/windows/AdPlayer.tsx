import {VIDEO_URL} from "@/app/constants";

export default function AdPlayer() {
    return (
        <>
            <img alt="Rat Tube" src="/assets/rat%20tube.png" className="w-full h-full"/>
            <video className="absolute left-[3%] top-[18%] w-[78%] border-black border-2"
                   controls={true} autoPlay={false} playsInline={true}
                   src={VIDEO_URL}
            ></video>
        </>
    )
}