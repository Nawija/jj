import { Loader } from "@mantine/core";

export default function Loading() {
    return (
        <div className="h-[90vh] w-full flex items-center justify-center">
            <Loader color="yellow" type="dots" />
        </div>
    );
}
