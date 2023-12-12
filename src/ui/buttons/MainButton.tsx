import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function MainButton({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                "relative rounded-lg font-semibold text-xs text-white hover:text-zinc-300 focus-visible:outline active:bg-red-50 px-4 py-2 overflow-hidden",
                className
            )}
        >
            {children}
            <span className="bg-black z-[-3] absolute h-full w-full rounded-lg left-0 top-0" />
            <span className="absolute w-full h-[30%] top-0 left-0 bg-emerald-600 blur-md z-[-2] animate-pulse" />
            <span className="absolute w-full h-2/5 bottom-0 left-0 bg-green-400 blur-md z-[-2] animate-pulse" />
        </button>
    );
}
