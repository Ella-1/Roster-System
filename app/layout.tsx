import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "./provider";
import { Flex } from "@chakra-ui/react";
import Sidebar from "./sidebar/Sidebar/Sidebar"; // adjust path if needed
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Excellent Care Clinics",
  description: "Clinic Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <Flex minH="100vh">
            <Sidebar />

            <Flex flex="1" p="6">
              {children}
            </Flex>
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
