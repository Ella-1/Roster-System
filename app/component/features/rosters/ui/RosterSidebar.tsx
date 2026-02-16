"use client";

import { Box, Flex, HStack, Input, Text, VStack, Button, Badge } from "@chakra-ui/react";
import type { RosterPerson } from "../types";
import { SearchNormal1, Filter } from "iconsax-reactjs";
import { RiExpandDiagonalLine } from "react-icons/ri";
import { LuFilter } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
function WeekdayDots({ days }: { days?: RosterPerson["weekdays"] }) {
    const map: Record<string, string> = { mo: "m", tu: "di", we: "w", th: "do", fr: "vr" };
    if (!days?.length) return null;

    return (
        <HStack gap="1">
            {days.map((d) => (
                <Flex
                    key={d}
                    w="20px"
                    h="20px"
                    align="center"
                    justify="center"
                    borderRadius="full"
                    bg="#EBFFEF"
                    color="#37A55C"
                    fontSize="xs"
                >
                    {map[d]}
                </Flex>
            ))}
        </HStack>
    );
}

function PersonCard({ p }: { p: RosterPerson }) {
    return (
        <Box border="1px solid" borderColor="#D9E5F2" borderRadius="xl" p="4" bg="white">
            <Flex justify="space-between" align="center">
                <HStack gap="3">
                    <Flex w="40px" h="40px" borderRadius="full" bg="#F0F5FA" align="center" justify="center" fontWeight="700">
                        {p.initials}
                    </Flex>
                    <Box>
                        <Text fontWeight="700">{p.name}</Text>
                        <HStack mt="1" gap="2">
                            <Badge borderRadius="full" px="2" py="1" bg="gray.100" color="gray.700">
                                {p.weeklyHours}.0hrs
                            </Badge>
                            <Badge borderRadius="full" px="2" py="1" bg="gray.100" color="gray.700">
                                {p.contractHours}.0hrs
                            </Badge>
                        </HStack>
                    </Box>
                </HStack>

                {p.status === "on_leave" && (
                    <Badge borderRadius="full" bg="#FEECEC" color="#EF2E2E" px="2" py="1">
                        • On leave
                    </Badge>
                )}
            </Flex>

            <Flex mt="3" justify="space-between" align="center">
                <Badge borderRadius="full" bg="red.50" color="red.600" px="2" py="1">
                    {p.leaveRange ?? "-"}
                </Badge>
                <WeekdayDots days={p.weekdays} />
            </Flex>
        </Box>
    );
}

export default function RosterSidebar({ people }: { people: RosterPerson[] }) {
    return (
        <Box w="360px" flexShrink={0} border="1px solid" borderColor="gray.200" borderRadius="2xl" p="4" bg="white">
            <Flex align="center" justify="space-between">
                <HStack gap="4">
                    <RiExpandDiagonalLine size="18" />

                    <Text
                        pl="4"
                        borderLeft="1px solid"
                        borderColor="gray.200"
                        fontSize="lg"
                        fontWeight="800"
                    >
                        Roster
                    </Text>
                </HStack>

            </Flex>

            <Flex mt="4" gap="2" align="stretch">
                <Flex
                    flex="1"
                    align="center"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="lg"
                    px="3"
                    h="40px"
                    gap="2"
                >
                    <CiSearch size="18" color="#4E5D69" />
                    <Input
                        // variant="unstyled"
                        placeholder="Search"
                        h="100%"
                    />
                </Flex>

                <Button
                    variant="outline"
                    borderRadius="lg"
                    h="40px"
                    px="3"
                >
                    <LuFilter size="18" />
                </Button>
            </Flex>


            <Flex
                mt="4"
                gap="6"
                fontSize="14px"
                position="relative"
                borderBottom="1px solid"
                borderColor="gray.200"
            >
                {/* All */}
                <Flex align="center" gap="2" pb="3" cursor="pointer">
                    <Text color="gray.600" fontWeight="500" fontSize="14px">
                        All
                    </Text>

                    <Flex
                        minW="28px"
                        h="28px"
                        px="2"
                        borderRadius="full"
                        border="1px solid"
                        bg="#F7FAFC"
                        borderColor="#D9E5F2"
                        align="center"
                        justify="center"
                        fontSize="14px"
                        color="gray.700"
                        fontWeight="600"
                    >
                        32
                    </Flex>
                </Flex>

                {/* Available */}
                <Flex align="center" gap="2" pb="3" cursor="pointer">
                    <Text color="gray.600" fontWeight="500" fontSize="14px">
                        Available
                    </Text>

                    <Flex
                        minW="28px"
                        h="28px"
                        px="2"
                        borderRadius="full"
                        border="1px solid"
                        bg='#F7FAFC'
                        borderColor="#D9E5F2"
                        align="center"
                        justify="center"
                        fontSize="14px"
                        color="gray.700"
                        fontWeight="600"
                    >
                        30
                    </Flex>
                </Flex>

                {/* On Leave (Active) */}
                <Flex
                    align="center"
                    gap="2"
                    pb="3"
                    position="relative"
                    cursor="pointer"
                >
                    <Text color="#5653FC" fontWeight="600" fontSize="14px">
                        On Leave
                    </Text>

                    <Flex
                        minW="28px"
                        h="28px"
                        px="2"
                        borderRadius="full"
                        border="2px solid"
                        borderColor="#D9E5F2"
                        align="center"
                        justify="center"
                        fontSize="14px"
                        color="#5653FC"
                        fontWeight="700"
                        bg="#F7FAFC"
                    >
                        4
                    </Flex>

                    <Box
                        position="absolute"
                        bottom="-1px"
                        left="0"
                        right="0"
                        height="2px"
                        bg="#4F46E5"
                        borderRadius="full"
                    />
                </Flex>
            </Flex>



            <VStack mt="4" align="stretch" gap="4">
                {people.map((p) => <PersonCard key={p.id} p={p} />)}
            </VStack>
        </Box>
    );
}
