import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      borderTop="1px"
      borderColor={useColorModeValue("gray.200", "whiteAlpha.300")}
      py="8"
    >
      <Container maxW="container.md">
        <SimpleGrid columns="2">
          <List spacing="1">
            <ListItem>
              <Link href="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="#about">About</Link>
            </ListItem>
            <ListItem>
              <Link href="#experience">Experience</Link>
            </ListItem>
            <ListItem>
              <Link href="#contact">Contact</Link>
            </ListItem>
          </List>
          <List spacing="1">
            <ListItem>
              <Link href="https://github.com/araujogui" isExternal>
                GitHub
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://linkedin.com/in/guilherme-araújo-a6235722b"
                isExternal
              >
                LinkedIn
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/arauuujogui" isExternal>
                Twitter
              </Link>
            </ListItem>
          </List>
        </SimpleGrid>
        <Text mt="6">Copyright © 2022 Guilherme Araújo</Text>
      </Container>
    </Box>
  );
};

export default Footer;
