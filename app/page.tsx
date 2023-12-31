import Cards from "@/components/Cards";
import Discover from "@/components/Discover";
import Options from "@/components/Options";
import Image from "next/image";

export default function Home() {

  console.log("re-render");

  return (
    <div className="justify-center flex h-[90vh]">
      <div className="lg:mt-72 md:mt-56 mt-20 text-center flex-col w-[80%] justify-center">
        <div className="text-5xl uppercase font-bold italic">Workouts</div>
        <div className="pt-2 text-md">Find Your Best Plan</div>
        <div className="flex justify-center">
          <Options />
        </div>
        <div>
          <Discover />
        </div>
      </div>
    </div>
  );
}