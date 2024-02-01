"use client"
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast"
import { X } from "lucide-react";
import { useState } from "react";
import ReactDOMServer from 'react-dom/server';

export default function Card(props) {
    const { toast } = useToast();
    const { bg } = props;
    const [preview, setPreview] = useState("");
    const copy = () => {
        const code = ReactDOMServer.renderToString(bg);
        navigator.clipboard.writeText(code);
        toast({ title: 'Copied to clipboard', });
    };
    const prev = () => {
        setPreview("");
        setPreview(bg);
    };

    return (
        <div className="relative min-h-[300px] w-full overflow-hidden rounded-md border">
            {preview && (
                <div className="fixed left-0 top-0 -z-50 h-full w-full">
                    {preview}
                </div>
            )}
            <div className="absolute z-10 flex items-center justify-end w-full gap-1 top-0 p-3">
                {preview && (
                    <Button size="icon" className="h-7 w-7" onClick={() => setPreview("")} ><X className="h-[1rem] w-[1rem]" /></Button>
                )}
                <Button className="text-xs h-7" size="sm" onClick={prev}>preview</Button>
                <Button className="text-xs h-7 dark:ring-1 ring-slate-900/10" variant="outline" size="sm" onClick={copy}>copy</Button>
            </div>
            {bg}
        </div>
    )
}
