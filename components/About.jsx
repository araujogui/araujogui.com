import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      as="section"
      id="about"
      bg={useColorModeValue("gray.100", "gray.700")}
      py="16"
    >
      <Container maxW="container.md">
        <Heading size="md">About</Heading>
        <Text lineHeight="taller" mt="4">
          Eu veniam excepteur nisi do aliquip eu et nisi id. Pariatur sit dolore
          voluptate dolore nulla. Qui minim sit officia incididunt sit cupidatat
          consequat laboris nostrud dolore mollit minim. Adipisicing laborum
          irure officia sint.
        </Text>
        <Text lineHeight="taller" mt="4">
          Ea culpa excepteur proident sit incididunt aute et sint ullamco ut
          exercitation. Deserunt enim enim velit adipisicing eiusmod labore
          incididunt deserunt ut est dolor amet nostrud ipsum. Nulla nisi
          excepteur velit reprehenderit nulla. Tempor nostrud minim mollit
          cillum elit voluptate tempor laborum sit tempor veniam esse cillum.
          Commodo laboris nisi amet voluptate consectetur ut cillum deserunt
          adipisicing voluptate sint. Ipsum officia aute excepteur aliqua non
          reprehenderit quis veniam duis. Amet minim dolore cupidatat anim amet
          anim esse veniam tempor.
        </Text>
        <Text lineHeight="taller" mt="4">
          Ipsum fugiat duis aliquip id exercitation anim. Officia dolor ad eu
          aliqua irure incididunt occaecat non ut ad aute in pariatur. Excepteur
          ipsum ad ipsum dolore cupidatat ipsum ipsum ad in. Mollit magna velit
          qui veniam ex excepteur deserunt do ea reprehenderit. Aute enim ipsum
          ipsum aute consectetur pariatur esse aute consectetur.
        </Text>
      </Container>
    </Box>
  );
};

export default About;
