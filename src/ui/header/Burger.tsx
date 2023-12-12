export function BurgerMenu({
    showMenu,
    handleMenu,
}: {
    showMenu: boolean;
    handleMenu: () => void;
}) {
    return (
        <button
            aria-label="Menu"
            className={`lg:hidden p-2.5 z-50 h-12 rounded-lg order-1 lg:order-none transition-transform${
                showMenu ? "" : "rotate-90"
            }`}
            onClick={handleMenu}
        >
            <div
                className={`h-0.5 rounded-lg bg-gray-200 transition-all ${
                    showMenu ? "w-4 -rotate-45 scale-110" : "w-4 m-1"
                }`}
            />
            <div
                className={` h-0.5 rounded-lg bg-gray-200 transition-all ${
                    showMenu ? "scale-0" : "w-3 m-1"
                }`}
            />
            <div
                className={` h-0.5 rounded-lg bg-gray-200 transition-all ${
                    showMenu
                        ? "w-4 -translate-y-1 rotate-45 scale-110"
                        : "w-4 m-1"
                }`}
            />
        </button>
    );
}
