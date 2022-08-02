import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  Container,
  Heading,
} from "@chakra-ui/react";

const Foreword = () => {
  return (
    <Box as="section" id="foreword" my="40">
      <Container maxW="container.md">
        <Heading as="h1" lineHeight="tall">
          <chakra.span
            bgGradient="linear(to-l, #E1704F, #CF617E, #6B84BC)"
            bgClip="text"
          >
            Hi! I&apos;m Guilherme Araújo
          </chakra.span>{" "}
          👋🏻 a self-taught full-stack developer, currently based in Brazil 🇧🇷
          and passionate about creating memorable and impactful product
          experiences. 🚀
        </Heading>
        <ButtonGroup mt="6">
          <Button as="a" href="#about">
            About
          </Button>
          <Button as="a" href="#experience">
            Experience
          </Button>
          <Button
            as="a"
            href="/resume.pdf"
            variant="ghost"
            rightIcon={<ExternalLinkIcon />}
          >
            Resume
          </Button>
        </ButtonGroup>
      </Container>
    </Box>
  );
};

export default Foreword;
