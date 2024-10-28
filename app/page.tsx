import { BackgroundLines } from "@/components/ui/background-lines";
import { Button, buttonVariants } from "@/components/ui/button"
import { Header } from "@/components/ui/Header"
import { useState } from "react";

export default function Home() {
  // const [mode, setMode] = useState()   
  function handleDark(){

  }

  return (
    <>
      <header className="flex justify-between justify-sticky items-center sticky top-0 bg-white shadow-md z-10">
        <div>
          <h1 className="text-xl font-bold p-6">Gregg Marayan</h1>
        </div>
        <div>
          <nav>
            <ul className="flex space-x-4 pr-10">
              <li><Button variant="ghost">Dark mode?</Button></li>
              <li><Button variant="ghost"><a href="#contact" className="text-gray-700">Contact</a></Button></li>
            </ul>
          </nav>
        </div>
      </header>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">

        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Sanjana Airlines, <br /> Sajana Textiles.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Get the best advices from our experts, including expert artists,
          painters, marathon enthusiasts and RDX, totally free.
        </p>
      </BackgroundLines>
    </>
  );
}
