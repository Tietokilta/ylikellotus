import ComputerScene from "@/components/ComputerScene";
import OfficeScene from "@/components/OfficeScene";
import RatScene from "@/components/RatScene";

export default function Home() {
  return (
    <div>
      <main className="w-full mx-auto px-4 sm:px-6 flex flex-col items-center">
        <OfficeScene />
        <ComputerScene />
        <RatScene />
      </main>
    </div>
  );
}
