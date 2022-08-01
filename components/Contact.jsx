import {
  Box,
  Container,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box as="section" id="contact" my="24">
      <Container maxW="container.md">
        <Heading size="md">Contact</Heading>
        <Text
          color={useColorModeValue("blackAlpha.700", "whiteAlpha.700")}
          mt="4"
        >
          Send me an email at{" "}
          <Link href="mailto:contact@araujogui.com" color="blue.500" isExternal>
            contact@araujogui.com
          </Link>
          .
        </Text>
      </Container>
    </Box>
  );
};

export default Contact;
