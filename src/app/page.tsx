import Image from "next/image";

import homescreen from "@/assets/homescreen.png";
import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
    </div>
  );
}
