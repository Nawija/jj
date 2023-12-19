import "@/styles/globals.css";

import React from "react";
import { Header } from "@/src/ui/header/Header";
import { Footer } from "../ui/footer/Footer";
// import Messenger from "@/src/ui/buttons/Messenger";

export const metadata = {
  title: "Fotograf",
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
      <body className="bg-black">
        <Header />

        <main className="min-h-screen">{children}</main>
        {/* <Messenger /> */}

        <Footer />
      </body>
    </html>
  );
}
