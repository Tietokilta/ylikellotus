import {VIDEO_URL} from "@/app/constants";
import ExportedImage from 'next-image-export-optimizer'
import ratTubeImg from '@/public/assets/rat tube.png'

export default function AdPlayer() {
    return (
        <>
            <ExportedImage alt="Rat Tube" src={ratTubeImg} className="w-full h-full"/>
            <video className="absolute xl:w-[78%] xl:max-w-[78%] xl:scale-100 left-[3%] top-[18%] origin-top-left w-[156%] !max-w-[156%] aspect-video border-black border-2 scale-50"
                   controls={true} autoPlay={false} playsInline={true}
                   src={VIDEO_URL}
            ></video>
        </>
    )
}