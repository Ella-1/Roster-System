"use client";

import {
    Box,
    Flex,
    Text,
    IconButton,
   
    VStack,
} from "@chakra-ui/react";
import {
    Category,
    Setting2,
    Notification,
    ArrowDown2,
} from "iconsax-reactjs";

export default function Navbar() {
    return (
        <Flex
            h="80px"
            px="10"
            align="center"
            justify="space-between"
            bg="white"
            borderBottom="1px solid"
            borderColor="#D9E5F2"
        >
            {/* LEFT SIDE (can hold page title later) */}
            <Box />

            {/* RIGHT SIDE */}
            <Flex align="center" gap="6">
                {/* App Grid */}
                <IconButton
                    aria-label="apps"
                    variant="ghost"
                    borderRadius="xl"
                    bg="#F6FAFD"
                    // border="1px solid"
                    // borderColor="gray.300"
                    _hover={{ bg: "gray.200" }}
                >
                    <Category size="20" color="#009FE3" />
                </IconButton>



                {/* Settings */}
                <IconButton
                    aria-label="settings"
                    variant="ghost"
                    borderRadius="xl"
                    bg="#F6FAFD"
                    _hover={{ bg: "gray.200" }}

                >
                    <Setting2 size="20" color="#4A5568" />
                </IconButton>

                {/* Notifications */}
                <Box position="relative">
                    <IconButton
                        aria-label="notifications"
                        variant="ghost"
                        borderRadius="xl"
                        bg="#F6FAFD"
                        _hover={{ bg: "gray.200" }}

                    >
                        <Notification size="20" color="#4A5568" />
                    </IconButton>

                    <Box
                        position="absolute"
                        top="2"
                        right="2"
                        w="8px"
                        h="8px"
                        bg="red.500"
                        borderRadius="full"
                    />
                </Box>

                {/* User Section */}
                <Flex align="center" gap="10" ml="10" >
                    {/* <Avatar.Root size="sm">
                        <Avatar.Fallback name="Paul Cornelius" />
                    </Avatar.Root> */}

                    <VStack gap="0" align="start">
                        <Text fontSize="sm" fontWeight="600">
                            Paul Cornelius
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                            Paul@dstrct.com
                        </Text>
                    </VStack>

                    <ArrowDown2 size="16" color="#4A5568" />
                </Flex>
            </Flex>
        </Flex>
    );
}
