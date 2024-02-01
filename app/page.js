"use client"
import Backgrounds from "@/components/Backgrounds";
import Reset from "@/components/Reset";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="py-20 px-6 flex flex-col items-center justify-center">
        <h1 className="text-center max-w-md md:max-w-4xl mx-auto text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-5xl">
          Collection of Stunning <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400 leading-tight">Backgrounds and Gradients.</span>
        </h1>
        <p className="text-center leading-tight mt-2 mx-auto max-w-sm md:max-w-xl text-sm text-gray-600 dark:text-gray-200">Ready-to-use, just copy and paste <span className="opacity-70">className</span> into your code. crafted with <span className="opacity-70">Tailwind CSS</span> tweak it to your taste.</p>
        <div className="mt-7 flex gap-2 items-center justify-center">
          <Button asChild><Link target="_blank" href="https://github.com/r2hu1/tailwind-bg">View Source</Link></Button>
          <Reset />
        </div>
      </div>
      <Backgrounds />
    </main>
  )
}
