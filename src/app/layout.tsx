import "@/styles/globals.css";

import React from "react";
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

        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <Header />

          <main>{children}</main>

      </body>
    </html>
  );
}
