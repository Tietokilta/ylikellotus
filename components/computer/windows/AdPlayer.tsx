import {VIDEO_URL} from "@/app/constants";
import ExportedImage from 'next-image-export-optimizer'
import ratTubeImg from '@/public/assets/rat tube.png'

export default function AdPlayer() {
    return (
        <>
            <ExportedImage alt="Rat Tube" src={ratTubeImg} className="w-[95%] translate-x-[2.5%] h-[97.5%] translate-y-[2.5%]"/>
            <div className="absolute flex items-center top-0 left-[12%] text-[2cqw] h-[13%] md:text-[3cqh] font-bold"><p>RatTube</p></div>
            <div className="absolute flex items-center h-[12%] bottom-[5%] left-[4%] text-[2.5cqw] md:text-[2.5cqh]"><p>Ylikellotus 2026</p></div>
            <video className="absolute xl:w-[70%] xl:max-w-[70%] xl:scale-100 left-[3%] top-[17%] origin-top-left w-[140%] !max-w-[140%] bg-black aspect-video scale-50"
                   controls={true} autoPlay={false} playsInline={true} preload="none"
                   src={VIDEO_URL}
            ></video>
        </>
    )
}
