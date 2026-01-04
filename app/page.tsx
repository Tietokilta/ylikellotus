import ComputerScene from "@/components/computer/ComputerScene";
import OfficeScene from "@/components/OfficeScene";
import RatScene from "@/components/RatScene";

export default function Home() {
  return (
    <div>
      <main className="w-full mx-auto flex flex-col items-center bg-[#f7f0f0]">
        <OfficeScene />
        <ComputerScene />
        <RatScene />
      </main>
    </div>
  );
}
