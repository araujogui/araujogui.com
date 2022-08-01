import { Box, Container, Heading, List, SimpleGrid } from "@chakra-ui/react";
import Item from "./Item";

const Skills = () => {
  return (
    <Box as="section" id="skills" my="24">
      <Container maxW="container.md">
        <Heading size="md">Skills</Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing="4" mt="4">
          <List spacing="1">
            <Item>JavaScript</Item>
            <Item>TypeScript</Item>
            <Item>PHP</Item>
          </List>
          <List spacing="1">
            <Item>HTML</Item>
            <Item>CSS</Item>
            <Item>React.js</Item>
            <Item>Next.js</Item>
          </List>
          <List spacing="1">
            <Item>NodeJS</Item>
            <Item>SQL</Item>
            <Item>PostgreSQL</Item>
            <Item>MySQL</Item>
            <Item>Redis</Item>
          </List>
          <List spacing="1">
            <Item>Git</Item>
            <Item>SCRUM</Item>
            <Item>Docker</Item>
          </List>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Skills;
