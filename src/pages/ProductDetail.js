import React from 'react';
import { useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Heading,
    Link,
    Image,
    Text,
    useColorModeValue,
    Container,
    Tabs, TabList, TabPanels, Tab, TabPanel, color,
} from '@chakra-ui/react';
import { StarIcon } from "@chakra-ui/icons";
import { connect, useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {
    const { ProductItem } = useSelector((state) => state.productReducer);
    const navigate = useNavigate();

    const getStarts = (count) => {
        let rows = []
        for (let index = 0; index < count; index++) {
            rows.push(<StarIcon color={'yellow.400'} />)
        }
        return rows;
    };

    return (
        <Container maxW={'7xl'} p="12">
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center">
                    <Box
                        width={{ base: '50%', sm: '50%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%">
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image
                                borderRadius="lg"
                                src={ProductItem.image}
                                alt="some good alt text"
                                objectFit="contain"
                            />
                        </Link>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }}>
                    <Heading as="h1">{ProductItem.title}</Heading>
                    <Box>
                        {getStarts(ProductItem.rating.rate)} ({ProductItem.rating.count})
                    </Box>
                    <Text as="b" color='#0d0e43'>{ProductItem.price} $</Text>
                    <Button onClick={() => { navigate('/cart', { replace: true }) }} colorScheme='blue'>Add to Cart</Button>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg">
                        {ProductItem.description}
                    </Text>
                </Box>
            </Box>
            <Box p="12">
                <Tabs>
                    <TabList>
                        <Tab>Description</Tab>
                        <Tab>Additional Info</Tab>
                        <Tab>Reviews</Tab>
                        <Tab>Video</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <p>Description!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Additional Info!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Reviews!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Video!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>

    )
}

const mapStateToProps = (state) => {
    return {
        productReducer: state.productReducer
    };
};
export default connect(mapStateToProps)(ProductDetail);