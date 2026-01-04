export default function AdPlayer() {
    return (
        <>
            <img alt="Rat Tube" src="/assets/rat%20tube.png" className="w-full h-auto"/>
            <video className="absolute left-[3%] top-[20%] min-w-[65%] max-w-[65%] border-black border-2" controls={true} autoPlay={false} playsInline={true} src="https://archive.org/download/youtube-xvFZjo5PgG0/xvFZjo5PgG0.mp4"></video>
        </>
    )
}