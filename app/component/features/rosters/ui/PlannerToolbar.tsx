"use client";

import { Button, Flex, HStack, IconButton, Menu, Text, Box } from "@chakra-ui/react";
import { ArrowLeft2, ArrowRight2, ArrowDown2 } from "iconsax-reactjs";

import { LuFilter } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";
import { LuLock } from "react-icons/lu";


export default function PlannerToolbar({
    date,
    onPrevDay,
    onNextDay,
    onToday,
}: {
    date: Date;
    onPrevDay: () => void;
    onNextDay: () => void;
    onToday: () => void;
}) {
    const dayLabel = date.toLocaleDateString(undefined, { weekday: "short" });
    const dayNum = date.getDate();
    const monthLabel = date.toLocaleDateString(undefined, { month: "short", year: "numeric" });

    return (
        <Flex align="center" justify="space-between" mt="4">
            <HStack gap="3">
                <Flex
                    align="center"
                    px="3"
                    py="2"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="full"
                    bg="white"
                    gap="2"
                >
                    <Text fontSize="sm" color="gray.600">{dayLabel}</Text>
                    <Text fontSize="sm" fontWeight="700">{dayNum}</Text>
                </Flex>

                <Text fontSize="2xl" fontWeight="800">
                    {monthLabel}
                </Text>
            </HStack>

            <HStack gap="3">
                <IconButton aria-label="People" variant="outline" borderRadius="lg">
                    {/* <People size="18" /> */}
                    <PiUsersThree size="18" />
                </IconButton>
                <IconButton aria-label="Filter" variant="outline" borderRadius="lg">
                    {/* <Filter size="18" /> */}
                    <LuFilter size="18" />
                </IconButton>

                <HStack
                    gap="0"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="lg"
                    overflow="hidden"
                >
                    <IconButton
                        aria-label="Prev"
                        variant="ghost"
                        borderRadius="0"
                        onClick={onPrevDay}
                    >
                        <ArrowLeft2 size="18" />
                    </IconButton>

                    <Button
                        variant="ghost"
                        px="2"
                        borderRadius="0"
                        onClick={onToday}
                        borderLeft="1px solid"
                        borderColor="gray.200"
                    >
                        Current day
                    </Button>

                    <IconButton
                        aria-label="Next"
                        variant="ghost"
                        borderRadius="0"
                        borderLeft="1px solid"
                        borderColor="gray.200"
                        onClick={onNextDay}
                    >
                        <ArrowRight2 size="18" />
                    </IconButton>
                </HStack>

                <Menu.Root>
                    <Menu.Trigger asChild>
                        <Button variant="outline" borderRadius="lg" px="4">
                            <Box w="8px" h="8px" bg="green.500" borderRadius="full" mr="2" />
                            This day
                            <ArrowDown2 size="18" />
                        </Button>
                    </Menu.Trigger>
                    <Menu.Positioner>
                        <Menu.Content
                            borderRadius="xl"
                            minW="200px"
                            p="2"
                            boxShadow="lg"
                            border="1px solid"
                            borderColor="gray.200"
                        >
                            <Menu.Item
                                value="day"
                                py="2.5"
                                px="3"
                                justifyContent="flex-start"
                            >
                                Deze dag
                            </Menu.Item>

                            <Menu.Item
                                value="week"
                                py="2.5"
                                px="3"
                                justifyContent="flex-start"
                            >
                                Deze week
                            </Menu.Item>

                            <Menu.Item
                                value="month"
                                py="2.5"
                                px="3"
                                justifyContent="flex-start"
                            >
                                Maand
                            </Menu.Item>

                            <Menu.Item
                                value="custom"
                                py="2.5"
                                px="3"
                                justifyContent="flex-start"
                            >
                                Custom +
                            </Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>

                </Menu.Root>

                <Button variant="outline" borderRadius="lg" px="4">
                    Publish All
                </Button>

                <Button variant="outline" borderRadius="lg" px="4">
                    <LuLock size="18" />
                    Lock Shift
                </Button>
            </HStack>
        </Flex>
    );
}
