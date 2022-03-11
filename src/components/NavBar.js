import {
    Container,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Stack,
    Box,
} from '@chakra-ui/react';
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function NavBar() {
    return (
        <Box bg="#f6f5ff">

            <Container
                as={Stack}
                maxW={'6xl'}
                py={10}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Box>
                    <Heading as="h1">Home</Heading>
                    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>About</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
            </Container>
        </Box>
    );
}