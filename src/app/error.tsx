"use client";

import { useEffect } from "react";
import { SecondButton } from "@/src/ui/buttons/SecondButton";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex items-center justify-center flex-col h-[80vh]">
            <h2>Coś poszło nie tak...</h2>
            <SecondButton className="mt-6" onClick={() => reset()}>
                Powrót
            </SecondButton>
        </div>
    );
}
