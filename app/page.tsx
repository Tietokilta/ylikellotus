import ComputerScene from "@/components/computer/ComputerScene";
import OfficeScene from "@/components/OfficeScene";
import RatScene from "@/components/RatScene";
import TableScene from "@/components/TableScene";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
  <main className="w-full">
    <OfficeScene />
    {/**<Countdown targetDate="2026-02-24T12:00:00" /> // TODO: move to office scene*/}
    <TableScene />
    <ComputerScene />
    <RatScene />
  </main>
  );
}
