import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Provider } from "./provider";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./sidebar/Sidebar/Sidebar";
import Navbar from "./component/NavBar";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Excellent Care Clinics",
  description: "Clinic Dashboard",
  icons: {
    icon: "logo/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
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
