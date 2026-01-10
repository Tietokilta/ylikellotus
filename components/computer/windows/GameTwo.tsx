export default function GameTwo() {
    return (
        <>
            <img className="w-full h-full object-cover" alt="Game One" src="/assets/peli2.png" />
            <div className="absolute top-[7%] w-[100%] h-[93%]">
                <iframe className="w-[400%] h-[400%] border-black border-2" style={{transform: 'scale(0.25)', transformOrigin: "0 0"}} src="/assets/games/Roomba%20Helper!.html" title="Roomba Helper!"></iframe>
            </div>
        </>
    )
}