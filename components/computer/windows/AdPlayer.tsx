export default function AdPlayer() {
    return (
        <>
            <img alt="Rat Tube" src="/assets/rat%20tube.png" className="w-full h-auto"/>
            <video className="absolute left-[3%] top-[20%] min-w-[65%] max-w-[65%] border-black border-2"
                   controls={true} autoPlay={false} playsInline={true}
                   src="https://pithos.lhf.blue/signed_download/f7bd1c35-d1cf-4331-bfc1-e0165ad77369?type_hint=video/mp4&signature=4b8d498a83a8760f92b09c683c97b894f330fcc0c14180b61d721a016db4bdc3"
            ></video>
        </>
    )
}