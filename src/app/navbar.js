'use client';

import { Box, Image } from '@chakra-ui/react'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { Vollkorn } from 'next/font/google'
import { HamburgerIcon } from '@chakra-ui/icons'

export const navLinks = [
    { label: 'lookbook', href: '#lookbook' },
    { label: 'about us', href: '#about' },
    { label: 'contact', href: '#contact' }
]

const vollkorn = Vollkorn({ subsets: ['cyrillic'] })
import {
    IconButton,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    DrawerFooter
} from '@chakra-ui/react'

export default function Navbar() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={vollkorn.className}>
            {/* Mobile Nav Drawer */}
            <IconButton className='fixed top-10 right-10 z-10 block base:block md:hidden' onClick={onOpen}
                variant='outline'
                icon={<HamburgerIcon color='red.200' />} />


            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size={'xs'}>

                <DrawerOverlay />
                <DrawerContent className='bg-rose-100'>
                    <DrawerCloseButton />
                    <DrawerHeader />
                    <DrawerBody flexDir='column'>
                        {navLinks.map(link => (
                            <Box className={vollkorn.className} key={link.label} mb={4}>
                                <Link key={link.label} href={link.href} onClick={onClose}>{link.label}</Link>
                            </Box>
                        ))}
                    </DrawerBody>
                    <DrawerFooter>
                        <div className={vollkorn.className}>
                            <p className='font-xxs text-slate-400'>pagg pros dev. ©</p>
                        </div>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            {/* Desktop Navigation */}
            <Box className='text-stone-50'>
                <Box as='nav' flexDir="row" className="hidden md:block fixed top-3.5 right-0 p-2 z-1" >
                    {navLinks.map(link => (
                        <Link className='mr-4' key={link.label} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </Box>

                <Box className='flex justify-center fixed' as="header" p={.1} top={-2} left={{ base: 0, lg: -1 }} width="full">
                    <Box>
                        <Image
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}
                            src="/logo-nobg.png"
                            className={`items-center mr-auto hover:scale-110 duration-300 transition-all duration-500 ease-in-out ${isScrolled ? 'w-24' : 'w-64'}`}
                        />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}