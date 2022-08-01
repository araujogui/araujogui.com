import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const Item = () => {
  return (
    <Flex justifyContent="space-between" gap="16">
      <div>
        <Heading size="sm">Company</Heading>
        <Text
          color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
          fontSize="sm"
          mt="2"
        >
          Since 2022
        </Text>
      </div>
      <Box width="full">
        <Heading size="sm">Full-stack developer</Heading>
        <Text
          color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
          mt="2"
        >
          Eu veniam excepteur nisi do aliquip eu et nisi id. Pariatur sit dolore
          voluptate dolore nulla. Qui minim sit officia incididunt sit cupidatat
          consequat laboris nostrud dolore mollit minim. Adipisicing laborum
          irure officia sint.
        </Text>
      </Box>
    </Flex>
  );
};

export default Item;
