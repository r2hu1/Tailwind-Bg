import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page(){
  return(
    <main className="py-20 -mt-5 flex flex-col items-center justify-center">
      <div>
        <h1 className="text-center max-w-md md:max-w-2xl mx-auto text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-4xl">
          Collection of Stunning <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">Backgrounds and Gradients.</span>
        </h1>
        <p class="text-center mt-2 mx-auto max-w-sm md:max-w-xl text-sm text-gray-600 dark:text-gray-200">Ready-to-use, just copy and paste <span class="opacity-70">className</span> into your code. crafted with <span class="opacity-70">Tailwind CSS</span>.</p>
      </div>
      <div className="mt-5 flex gap-3 items-center justify-center">
        <Button asChild><Link target="_blank" href="https://github.com/r2hu1/tailwind-bg">View Source</Link></Button>
        <Button variant="outline">Reset</Button>
      </div>
    </main>
  )
}