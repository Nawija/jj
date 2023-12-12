import "@mantine/core/styles.css";
import "@/styles/globals.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Background } from "@/src/ui/background/Background";
import { Header } from "@/src/ui/header/Header";

export const metadata = {
    title: "My app",
    description: "I have followed setup instructions carefully",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pl">
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <Header />
                <MantineProvider>{children}</MantineProvider>
                <Background />
            </body>
        </html>
    );
}
