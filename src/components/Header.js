import { ReactNode } from 'react';
import { Link as ReachLink } from "react-router-dom";
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Container,
    useDisclosure,
    useColorModeValue,
    Stack,
    Input,
    Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';

const Links = ['Home', 'Pages', 'Products', 'Blog', 'Shop', 'Contact'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Link as={ReachLink} to='/'> <Text fontSize='3xl' color='#0d0e43' as='b'>OREMA</Text></Link>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                </Flex>
                <Flex alignItems={'center'}>
                    <Input placeholder='Search...' />
                    <IconButton
                        colorScheme='blue'
                        aria-label='Search database'
                        icon={<SearchIcon />}
                    />
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Container>
        </>
    );
}