"use client";

import {
  ColorModeProvider,
  ColorModeProviderProps,
} from "@/components/ui/color-mode";


import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme/theme";


export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} forcedTheme="light" />
    </ChakraProvider>
  );
}