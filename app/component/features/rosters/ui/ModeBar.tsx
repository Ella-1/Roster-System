"use client";

import { Box, Flex, Text, Button } from "@chakra-ui/react";
import type { ViewMode } from "../types";

export default function ModeBar({
    value,
    onChange,
    description,
}: {
    value: ViewMode;
    onChange: (v: ViewMode) => void;
    description: string;
}) {
    return (
        <Flex
            align="center"
            gap="3"
            px="6"
            py="2"
            border="1px solid"
            borderColor={value === "live" ? "#FF6669" : "#BAB9FE"}
            bg={value === "live" ? "#FFF5F5" : "#F0F0FF"}
            borderRadius="full"
        >
            <Flex bg="white" borderRadius="full" p="1" gap="1" border="1px solid" borderColor="gray.200">
                <Button
                    size="sm"
                    px="6"
                    borderRadius="full"
                    
                    variant={value === "live" ? "solid" : "ghost"}
                    bg={value === "live" ? "red.500" : "transparent"}
                    color={value === "live" ? "white" : "gray.600"}
                    onClick={() => onChange("live")}
                >
                    Live
                </Button>
                <Button
                    size="sm"
                    px="6"
                    borderRadius="full"
                    variant={value === "planner" ? "solid" : "ghost"}
                    bg={value === "planner" ? "#5653FC" : "transparent"}
                    color={value === "planner" ? "white" : "gray.600"}
                    onClick={() => onChange("planner")}
                >
                    Planner
                </Button>
            </Flex>

            <Text fontSize="sm" color="gray.700">
                {description}
            </Text>

            <Box flex="1" />
        </Flex>
    );
}
