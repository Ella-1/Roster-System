"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Avatar,
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
      borderColor="gray.200"
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
          bg="gray.100"
          _hover={{ bg: "gray.200" }}
          icon={<Category size="20" color="#3182CE" />}
        />

        {/* Settings */}
        <IconButton
          aria-label="settings"
          variant="ghost"
          borderRadius="xl"
          bg="gray.100"
          _hover={{ bg: "gray.200" }}
          icon={<Setting2 size="20" color="#4A5568" />}
        />

        {/* Notifications */}
        <Box position="relative">
          <IconButton
            aria-label="notifications"
            variant="ghost"
            borderRadius="xl"
            bg="gray.100"
            _hover={{ bg: "gray.200" }}
            icon={<Notification size="20" color="#4A5568" />}
          />

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
        <Flex align="center" gap="3">
          <Avatar.Root size="sm">
            <Avatar.Fallback name="Paul Cornelius" />
          </Avatar.Root>

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
