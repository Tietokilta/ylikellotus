import {VIDEO_URL} from "@/app/constants";
import ExportedImage from 'next-image-export-optimizer'
import ratTubeImg from '@/public/assets/rat tube.png'

export default function AdPlayer() {
    return (
        <>
            <ExportedImage alt="Rat Tube" src={ratTubeImg} className="w-[95%] translate-x-[2.5%] h-[97.5%] translate-y-[2.5%]"/>
            <p className="absolute top-0 left-[12%] text-[3cqh] font-bold">RatTube</p>
            <p className="absolute bottom-[5%] left-[4%] text-[2.5cqh]">Ylikellotus 2026</p>
            <video className="absolute xl:w-[70%] xl:max-w-[70%] xl:scale-100 left-[3%] top-[17%] origin-top-left w-[140%] !max-w-[140%] aspect-video scale-50"
                   controls={true} autoPlay={false} playsInline={true}
                   src={VIDEO_URL}
            ></video>
        </>
    )
}