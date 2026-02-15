"use client";

import { Flex, Text, Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { NavItem } from "../navigation";
import Link from "next/link";

interface Props {
  item: NavItem;
  isSubItem?: boolean;
}

export default function SidebarItem({
  item,
  isSubItem,
}: Props) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link href={item.href ?? "#"}>
      <Flex
        align="center"
        gap="3"
        px="3"
        py="2"
        borderRadius="md"
        position="relative"
        cursor="pointer"
        bg={isActive ? "white" : "transparent"}
        _hover={{ bg: "gray.100" }}
      >
        {isActive && (
          <Box
            position="absolute"
            left="0"
            top="0"
            bottom="0"
            w="2px"
            bg="#5653FC"
            borderRadius="full"
          />
        )}

        <item.icon
          size="20"
          color={isActive ? "#3B82F6" : "#4A5568"}
        />

        <Text
          fontSize={isSubItem ? "sm" : "md"}
          fontWeight={isActive ? "semibold" : "normal"}
          color={isActive ? "blue.500" : "#4E5D69"}
        >
          {item.label}
        </Text>
      </Flex>
    </Link>
  );
}
