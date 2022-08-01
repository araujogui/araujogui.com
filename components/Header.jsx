import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const colorModeLabel = colorMode === "light" ? "Dark mode" : "Light mode";

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      minW="full"
      bg={useColorModeValue("white", "gray.800")}
      zIndex="sticky"
    >
      <Container maxW="container.md">
        <Flex h="20" alignItems="center" justifyContent="space-between">
          <Heading>🦄</Heading>
          <Tooltip label={colorModeLabel}>
            <IconButton
              aria-label={colorModeLabel}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </Tooltip>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
