import ComputerScene from "@/components/ComputerScene";
import OfficeScene from "@/components/OfficeScene";
import RatScene from "@/components/RatScene";

export default function Home() {
  return (
    <div>
      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        <OfficeScene />
        <ComputerScene />
        <RatScene />
      </main>
    </div>
  );
}
