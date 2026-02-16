"use client";

import { Box, Flex, Grid, GridItem, Skeleton, Text } from "@chakra-ui/react";
import type { Department, Shift } from "../types";
import { clamp, formatTimeRange, minutesSinceDayStart } from "../time";

const SLOT_MINUTES = 30;
const PX_PER_SLOT = 120; // tweak to match figma vertical density
const HEADER_H = 44;

function colorTokens(c: Shift["color"]) {
  if (c === "orange") return { border: "#F97316", bg: "#FFF7ED", name: "#F97316" };
  if (c === "green") return { border: "#22C55E", bg: "#F0FDF4", name: "#22C55E" };
  return { border: "#A3A31A", bg: "#FFFBEB", name: "#A3A31A" }; // yellow-ish
}

function ShiftBlock({ shift, onClick }: { shift: Shift; onClick: () => void }) {
  const t = colorTokens(shift.color);
  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      border="1.5px solid"
      borderColor={t.border}
      bg={t.bg}
      borderRadius="xl"
      p="3"
      boxShadow="sm"
      _hover={{ transform: "translateY(-1px)" }}
      transition="all .15s ease"
      minH="88px"
    >
      <Flex align="center" gap="2">
        <Flex w="28px" h="28px" borderRadius="full" bg="white" border="1px solid" borderColor="gray.200" align="center" justify="center" fontSize="xs" fontWeight="700" color="gray.600">
          {shift.personInitials}
        </Flex>
        <Box>
          <Text fontWeight="800" fontSize="sm">{shift.title}</Text>
          <Text fontSize="xs" color="gray.700">{formatTimeRange(shift.start, shift.end)}</Text>
          <Text fontSize="sm" fontWeight="700" color={t.name}>{shift.personName}</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default function PlannerGrid({
  date,
  loading,
  departments,
  shifts,
  onShiftClick,
}: {
  date: Date;
  loading: boolean;
  departments: Department[];
  shifts: Shift[];
  onShiftClick: (s: Shift) => void;
}) {
  
  const startMin = 11 * 60;
  const endMin = 13 * 60 + 30;

  const slots = [];
  for (let m = startMin; m <= endMin; m += SLOT_MINUTES) slots.push(m);

  const columnDefs = departments; // includes Days as first column title
  const colCount = columnDefs.length;

  return (
    <Box mt="4" border="1px solid" borderColor="gray.200" borderRadius="2xl" overflow="hidden">
      
      <Grid templateColumns={`140px repeat(${colCount - 1}, 1fr)`} bg="gray.50" borderBottom="1px solid" borderColor="gray.200">
        <GridItem bg="#EEF2FF" px="4" py="3" borderRight="1px solid" borderColor="gray.200">
          <Text fontWeight="700" color="#4F46E5">Days</Text>
        </GridItem>

        {columnDefs.slice(1).map((d) => (
          <GridItem key={d.id} px="4" py="3" borderRight="1px solid" borderColor="gray.200">
            <Text fontWeight="600" color="gray.600">{d.name}</Text>
          </GridItem>
        ))}
      </Grid>

    
      <Grid templateColumns={`140px repeat(${colCount - 1}, 1fr)`}>
  
        <GridItem borderRight="1px solid" borderColor="gray.200" bg="white">
          <Box position="relative" pt="0">
            {slots.map((m, i) => {
              const top = i * PX_PER_SLOT;
              const label = `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
              return (
                <Box key={m} position="absolute" top={`${top + 10}px`} left="18px">
                  <Text fontSize="sm" color="gray.600">{label}</Text>
                </Box>
              );
            })}
            <Box height={`${slots.length * PX_PER_SLOT}px`} />
          </Box>
        </GridItem>

    
        {columnDefs.slice(1).map((dept) => {
          const deptShifts = shifts.filter((s) => s.deptId === dept.id);

          return (
            <GridItem key={dept.id} borderRight="1px solid" borderColor="gray.200" bg="white">
              <Box position="relative" height={`${slots.length * PX_PER_SLOT}px`}>
              
                {slots.map((m, i) => (
                  <Box
                    key={m}
                    position="absolute"
                    top={`${i * PX_PER_SLOT}px`}
                    left="0"
                    right="0"
                    height="1px"
                    bg="gray.100"
                  />
                ))}

                {loading ? (
                  <Box p="4">
                    <Skeleton height="90px" borderRadius="xl" />
                    <Box h="3" />
                    <Skeleton height="90px" borderRadius="xl" />
                  </Box>
                ) : deptShifts.length === 0 ? (
                  <Box p="4">
                    <Text fontSize="sm" color="gray.400">—</Text>
                  </Box>
                ) : (
                  deptShifts.map((s) => {
                    const start = minutesSinceDayStart(s.start);
                    const end = minutesSinceDayStart(s.end);
                    const top = ((start - startMin) / SLOT_MINUTES) * PX_PER_SLOT;
                    const height = ((end - start) / SLOT_MINUTES) * PX_PER_SLOT;

                    const topClamped = clamp(top, 6, slots.length * PX_PER_SLOT - 10);
                    const heightClamped = clamp(height, 80, slots.length * PX_PER_SLOT - topClamped - 10);

                    return (
                      <Box
                        key={s.id}
                        position="absolute"
                        top={`${topClamped}px`}
                        left="14px"
                        right="14px"
                        height={`${heightClamped}px`}
                      >
                        <ShiftBlock shift={s} onClick={() => onShiftClick(s)} />
                      </Box>
                    );
                  })
                )}

                {dept.id === "mgmt" && !loading && (
                  <Box
                    position="absolute"
                    top={`${(2 * PX_PER_SLOT) + 10}px`}
                    left="18px"
                    right="18px"
                    height={`${PX_PER_SLOT}px`}
                    borderRadius="xl"
                    bg="gray.50"
                    border="1px solid"
                    borderColor="gray.200"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="gray.600"
                    fontWeight="600"
                  >
                    See all
                  </Box>
                )}
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}
