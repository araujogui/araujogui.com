import { Box, Container, Heading, Stack, StackDivider } from "@chakra-ui/react";
import Item from "./Item";

const Experience = () => {
  return (
    <Box as="section" id="experience" my="24">
      <Container maxW="container.md">
        <Heading size="md">Experience</Heading>
        <Stack mt="7" spacing="4" divider={<StackDivider />}>
          <Item />
          <Item />
          <Item />
        </Stack>
      </Container>
    </Box>
  );
};
export default Experience;
