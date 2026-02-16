"use client";

import { Box, Button, Dialog, Flex, Text, VStack } from "@chakra-ui/react";
import type { Shift } from "../types";
import { formatTimeRange } from "../time";

function Row({ s }: { s: Shift }) {
  const border =
    s.color === "orange" ? "#F97316" : s.color === "green" ? "#22C55E" : "#A3A31A";
  const bg =
    s.color === "orange" ? "#FFF7ED" : s.color === "green" ? "#F0FDF4" : "#FFFBEB";

  return (
    <Flex
      border="1.5px solid"
      borderColor={border}
      bg={bg}
      borderRadius="xl"
      p="3"
      align="center"
      justify="space-between"
    >
      <Flex align="center" gap="3">
        <Flex w="28px" h="28px" borderRadius="full" bg="white" border="1px solid" borderColor="gray.200" align="center" justify="center" fontSize="xs" fontWeight="700" color="gray.600">
          {s.personInitials}
        </Flex>
        <Box>
          <Text fontWeight="800">{s.title}</Text>
          <Text fontSize="sm" color="gray.700">{s.personName}</Text>
        </Box>
      </Flex>

      <Text fontSize="sm" color="gray.700">{formatTimeRange(s.start, s.end)}</Text>
    </Flex>
  );
}

export default function ShiftListDialog({
  open,
  onClose,
  dayLabel,
  shifts,
}: {
  open: boolean;
  onClose: () => void;
  dayLabel: string;
  shifts: Shift[];
}) {
  // group by hour label like screenshot (11:00, 12:00...)
  const groups = shifts.reduce<Record<string, Shift[]>>((acc, s) => {
    const k = `${s.start.slice(11, 13)}:00`;
    acc[k] = acc[k] ? [...acc[k], s] : [s];
    return acc;
  }, {});

  return (
    <Dialog.Root open={open} onOpenChange={(e) => !e.open && onClose()}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content borderRadius="2xl" p="6" w="520px" maxW="calc(100vw - 24px)">
          <Flex align="center" justify="space-between">
            <Text fontSize="2xl" fontWeight="900">{dayLabel}</Text>
            <Dialog.CloseTrigger asChild>
              <Button variant="ghost">✕</Button>
            </Dialog.CloseTrigger>
          </Flex>

          <Box mt="4" maxH="520px" overflow="auto" pr="1">
            <VStack align="stretch" gap="5">
              {Object.entries(groups).map(([hour, list]) => (
                <Box key={hour}>
                  <Text fontWeight="800" mb="3">{hour}</Text>
                  <VStack align="stretch" gap="3">
                    {list.map((s) => <Row key={s.id} s={s} />)}
                  </VStack>
                </Box>
              ))}
            </VStack>
          </Box>

          <Button mt="5" w="full" onClick={onClose}>
            Close
          </Button>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
