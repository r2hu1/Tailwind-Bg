import { Star } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
    return (
        <header className="py-5 px-6 md:px-20 lg:px-32 flex items-center justify-end">
            <div className="flex items-center justify-center gap-2">
                <Button asChild size="icon"><Link href="https://github.com/r2hu1/tailwind-bg" className="flex items-center gap-1"><Star className="h-[1.2rem] w-[1.2rem]" /></Link></Button>
            </div>
        </header>
    )
}