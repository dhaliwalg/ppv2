"use client";
import {
  Stack,
  Box,
  Image,
  SlideFade,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Lookbook() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Button
        className="color-white"
        colorScheme="blackAlpha"
        rightIcon={<ArrowForwardIcon />}
        onClick={onToggle}
      >
        View Lookbook
      </Button>
      <SlideFade in={isOpen}>
        <Box
          className={`${isOpen ? "" : "hidden"} 
                    max-h-screen overflow-scroll mt-4 color-white`}
          sx={{
            "&:hover": {
              scrollbarWidth: "thin",
            },
          }}
        >
          <Stack ml="4" spacing={8} direction={["column", "row"]}>
            
            <Image
              className="rounded-md"
              boxSize="205px"
              src="/img6.jpg"
              alt="tying"
            />
            <Image
              className="rounded-md"
              boxSize="205px"
              src="/img9.jpg"
              alt="jaggi"
            />
            <Image
              className="rounded-md"
              boxSize="205px"
              src="/img4.jpg"
              alt="sikh pagg"
            />
            <Image
              className="rounded-md"
              boxSize="205px"
              src="/img5.jpg"
              alt="bhangra pagg"
            />
           
            <Image
              className="rounded-md"
              boxSize="205px"
              src="/img3.jpg"
              alt="groom party"
            />
            <Image
              className="rounded-md"
              boxSize="205px"
              src="/img7.jpg"
              alt="tying2"
            />
            
          </Stack>
        </Box>
      </SlideFade>
    </div>
  );
}
