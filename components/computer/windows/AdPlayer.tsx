export default function AdPlayer() {
    return (
        <>
            <img alt="Rat Tube" src="/assets/rat%20tube.png" className="w-full h-auto"/>
            <video className="absolute left-[3%] top-[20%] max-w-[65%] border-black border-2" controls={true} autoPlay={false} playsInline={true} src="/assets/bbb_sunflower_1080p_60fps_normal.mp4"></video>
        </>
    )
}