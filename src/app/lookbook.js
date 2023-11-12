'use client';
import { Stack, Box, Image, SlideFade, Button, useDisclosure } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function Lookbook() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <div>
            <Button className="color-white"
                colorScheme='blackAlpha'
                rightIcon={<ArrowForwardIcon />}
                onClick={onToggle}>View Lookbook</Button>
            <SlideFade in={isOpen}>
                <Box className="overflow-hidden mt-4 color-white scrollbar-hide">
                    <Stack ml='4' spacing={8} direction={['column', 'row']}>
                        <Image className="rounded-md" boxSize='205px' src='/img1.jpg' alt="sikh pagg" />
                        <Image className="rounded-md" boxSize='205px' src='/img3.jpg' alt="sikh pagg" />
                        <Image className="rounded-md" boxSize='205px' src='/img5.jpg' alt="bhangra pagg" />
                        <Image className="rounded-md" boxSize='205px' src='/img2.jpg' alt="wedding saafa" />
                        <Image className="rounded-md" boxSize='205px' src='/img4.jpg' alt="groom party" />
                    </Stack>
                </Box>
            </SlideFade>
        </div>
    )

}

