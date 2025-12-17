"use client";

import { Image, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const images = [
  {
    src: "./img4.jpg",
    title: "Image 1",
  },
  {
    src: "./img3.jpg",
    title: "Image 2",
  },
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current === images.length - 1 ? 0 : current + 1));
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="max-w-sm border-2 rounded-lg">
      <Image
        className="boxSize base:w-225px lg:w-325px rounded-lg"
        src={`/${images[index].src}`}
        alt={`/${images[index].title}`}
      />
    </Box>
  );
}
