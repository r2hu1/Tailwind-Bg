"use client"

import { Button } from "./ui/button";

export default function Reset() {
    return(
        <Button onClick={() => location.reload()} variant="outline">Reset</Button>
    )
};