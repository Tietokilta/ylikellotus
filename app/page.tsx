import ComputerScene from "@/components/computer/ComputerScene";
import OfficeScene from "@/components/OfficeScene";
import RatScene from "@/components/RatScene";

export default function Home() {
  return (
    <div>
      <main className="w-full mx-auto flex flex-col items-center">
        <OfficeScene />
        <ComputerScene />
        <RatScene />
      </main>
    </div>
  );
}
