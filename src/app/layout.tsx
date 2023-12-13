import "@mantine/core/styles.css";
import "@/styles/globals.css";

import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
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
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <MantineProvider>
          <Header />
          <main>{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
