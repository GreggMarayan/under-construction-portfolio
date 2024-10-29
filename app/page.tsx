import { ModeToggle } from "@/components/ModeToggle";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button, buttonVariants } from "@/components/ui/button"
import { Header } from "@/components/ui/Header"
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Home() {


  return (
    <>
      <header className="flex justify-between justify-sticky items-center sticky top-0 bg-white shadow-md z-10 dark:bg-black">
        <div>
          <h1 className="text-xl font-bold p-6 dark:text-white">Gregg Marayan</h1>
        </div>
        <div>
          <nav>
            <ul className="flex space-x-4 pr-10">
              <li><ModeToggle/></li>
              <li><Button variant="ghost"><a href="#contact" className="text-gray-400">Contact</a></Button></li>
            </ul>
          </nav>
        </div>
      </header>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div>
        </div>
      </BackgroundLines>
    </>
  );
}
