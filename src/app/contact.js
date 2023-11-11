import { Stack, Box, Link } from "@chakra-ui/react"
import { FiInstagram, FiPhone, FiMail } from "react-icons/fi";

export default function Contact() {
    return (
        <div>
            <Box>
                <Stack spacing={8} direction={['column', 'row']}>
                    <Box>
                        <FiPhone className="ml-16 lg:ml-10" />
                        <Link href='tel:3018208065'>(301)-820-8065</Link>
                    </Box>
                    <Box>
                        <FiMail className="ml-16 lg:ml-16" />
                        <Link href="mailto:paggpros@duck.com">paggpros@duck.com</Link>
                    </Box>
                    <Box>
                        <FiInstagram className="ml-16 lg:ml-8" />
                        <Link href="http://instagram.com/_u/paggpros/">@paggpros</Link>
                    </Box>
                </Stack>

            </Box>
        </div>
    )

}