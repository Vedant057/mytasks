import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar/Sidebar";
import GlobalStyleProvider from "./providers/GlobalStyleProvider";
import ContextProvider from "./providers/ContextProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import NextTopLoader from "nextjs-toploader";
import Navbar from "./components/Navbar/Navbar";

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Tasks",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {userId} = auth();
  return (
    <html lang="en" >
      <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
      <body className={nunito.className} suppressHydrationWarning={true}>
      <NextTopLoader
            height={2}
            color="teal"
            easing="cubic-bezier(0.53,0.21,0,1)"
          />
          <Navbar />
        <ClerkProvider>
        <ContextProvider>
        <GlobalStyleProvider>
        {userId &&<Sidebar />}
        <div className="w-full">
        {children}
        </div>
        </GlobalStyleProvider>
        </ContextProvider>
        </ClerkProvider>
        </body>
    </html>
  );
}
