import ComputerScene from "@/components/computer/ComputerScene";
import OfficeScene from "@/components/OfficeScene";
import RatScene from "@/components/RatScene";
import TableScene from "@/components/TableScene";

export default function Home() {
    return (
        <main className="w-full mx-auto flex flex-col items-center bg-[#f7f0f0] overflow-hidden">
            <OfficeScene/>
            <TableScene/>
            <div className="grid place-items-end md:-mt-[1200px] -mt-[400px] grid-rows-[auto]">
                <ComputerScene/>
                <RatScene/>
            </div>
        </main>
    );
}
