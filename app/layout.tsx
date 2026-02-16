import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "./provider";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./sidebar/Sidebar/Sidebar";
import Navbar from "./component/NavBar"
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
          <Flex h="100vh">

           
            <Sidebar />

           
            <Flex direction="column" flex="1" minW={0}>
              
              
              <Navbar />

             
              <Box flex="1" p="8" overflow="auto">
                {children}
              </Box>

            </Flex>
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
