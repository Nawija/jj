"use client";

export function Background() {
    return (
        <>
            <div className="h-full w-full fixed top-0 left-0 -z-50">
                <div className="bg-gradient-to-tl h-full w-full from-[#282828] via-stone-900 to-[#000000]" />
            </div>
        </>
    );
}
