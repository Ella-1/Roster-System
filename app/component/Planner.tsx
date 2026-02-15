"use client";

import {
    Box,
    Flex,
    Text,
    Button,
} from "@chakra-ui/react";
import {
    ArrowDown2,
    Add,
} from "iconsax-reactjs";

export default function PlannerPage() {
    return (
        <Box>
            {/* Header Section */}
            <Flex
                align="center"
                justify="space-between"
                pb="6"
                w="100%"
                borderBottom="1px solid"
                borderColor="#D9E5F2"
            >
                {/* Left Title */}
                <Text
                    fontSize="2xl"
                    fontWeight="700"
                >
                    Planner
                </Text>

                {/* Right Actions */}
                <Flex gap="4">
                    {/* Open Days Button */}
                    <Button
                        variant="outline"
                        borderRadius="xl"
                        px="6"

                    >
                        <ArrowDown2 size="18" />
                        Open Days
                    </Button>

                     <Button
                        variant="outline"
                        border="1px solid"
                        borderColor="#D9E5F2"
                        borderRadius="xl"
                        px="6"

                    >
                         <Add size="18" />
                        Nieuw
                        <ArrowDown2 size="18" />
                    </Button>

                  

                </Flex>
            </Flex>

            {/* Rest of page content goes here */}
            <Box mt="8">
                {/* Planner content */}
            </Box>
        </Box>
    );
}
