import {VIDEO_URL} from "@/app/constants";
import ExportedImage from 'next-image-export-optimizer'
import ratTubeImg from '@/public/assets/rat tube.png'

export default function AdPlayer() {
    return (
        <>
            <ExportedImage alt="Rat Tube" src={ratTubeImg} className="w-full h-full"/>
            <video preload="none" className="absolute left-[3%] top-[18%] w-[78%] border-black border-2"
                   controls={true} autoPlay={false} playsInline={true}
                   src={VIDEO_URL}
            ></video>
        </>
    )
}