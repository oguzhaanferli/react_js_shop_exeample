import React,{ useEffect, useState } from 'react';
import {
    Stack,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Text,
    Container,
    Box,
    Button,
    Center,
    List,
    ListItem,
    Image,
    useColorModeValue,
    Flex,
    Heading,
} from '@chakra-ui/react';
import { DeleteIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { getCart, deleteCart } from "../redux/cart/actions";
import { connect, useDispatch, useSelector } from 'react-redux';

const ShoppingCart = () => {
    const navigate = useNavigate();
    let dispatch = useDispatch();
    const [totalPrice, settotalPrice] = React.useState(0)

    useEffect(() => { dispatch(getCart()); }, []);
    const { CartProduct, Cart } = useSelector((state) => state.cartReducer);
    const { Products } = useSelector((state) => state.productReducer);

    const removeCart = () => {
        dispatch(deleteCart(Cart.id));
    }

    const SetCart = (item, i) => {
        let product = Products.filter(x => x.id == item.productId)[0];
        if (product != null) {
            return (
                <Tr key={i}>
                    <Td><Image
                        maxW={'5xs'}
                        borderRadius="lg"
                        src={product.image}
                        alt="some good alt text"
                        objectFit="contain"
                    /></Td>
                    <Td>{product.title}</Td>
                    <Td isNumeric>{item.quantity}</Td>
                    <Td>{(item.quantity * product.price)} $</Td>
                </Tr>
            )
        }
    }
    return (<>
        <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Box>
                <Stack py={4} spacing={20} direction={['column', 'row']}>
                    <Box w={"full"}>
                        <Box>
                            {
                                Cart != null ?
                                    (<Table variant='simple'>
                                        <TableCaption><Button colorScheme={"red"} onClick={removeCart} >Clear Cart</Button></TableCaption>
                                        <Thead>
                                            <Tr>
                                                <Th>Product</Th>
                                                <Th>Name</Th>
                                                <Th>Quantity</Th>
                                                <Th>Total</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {
                                                CartProduct.map((item, index) => {
                                                    return SetCart(item, index);
                                                })
                                            }
                                        </Tbody>
                                    </Table>)
                                    :
                                    (<Box w={'700px'} textAlign="center" py={10} px={6}>
                                        <Box display="inline-block">
                                            <Flex
                                                flexDirection="column"
                                                justifyContent="center"
                                                alignItems="center"
                                                bg={'red.500'}
                                                rounded={'50px'}
                                                w={'55px'}
                                                h={'55px'}
                                                textAlign="center">
                                                <CloseIcon boxSize={'20px'} color={'white'} />
                                            </Flex>
                                        </Box>
                                        <Heading as="h2" size="xl" mt={6} mb={2}>
                                            Product not found
                                        </Heading>
                                    </Box>)
                            }
                        </Box>
                    </Box>
                    <Box w={"full"}
                        marginEnd={5}>
                        <Center py={6}>
                            <Box
                                minW={'300px'}
                                maxW={'330px'}
                                w={'full'}
                                bg={useColorModeValue('white', 'gray.800')}
                                boxShadow={'2xl'}
                                rounded={'md'}
                                overflow={'hidden'}>
                                <Stack
                                    textAlign={'center'}
                                    p={6}
                                    color={useColorModeValue('gray.800', 'white')}
                                    align={'center'}>
                                    <Stack direction={'row'} align={'center'} justify={'center'}>
                                        <Text fontSize={'3xl'}>Cart Totals</Text>
                                    </Stack>
                                </Stack>

                                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                                    <List spacing={3}>
                                        <ListItem>
                                            <Text as={'b'}>Totals:</Text> {totalPrice} $
                                        </ListItem>
                                    </List>
                                    <Button
                                        mt={10}
                                        w={'full'}
                                        bg={'green.400'}
                                        color={'white'}
                                        rounded={'xl'}
                                        boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                                        onClick={() => { navigate('/completed', { replace: true }) }}
                                        _hover={{
                                            bg: 'green.500',
                                        }}
                                        _focus={{
                                            bg: 'green.500',
                                        }}>
                                        Complete
                                    </Button>
                                </Box>
                            </Box>
                        </Center>
                    </Box>
                </Stack>
            </Box>
        </Container>
    </>)
}
const mapStateToProps = (state) => {
    return {
        cartReducer: state.cartReducer,
        productReducer: state.productReducer
    };
};
export default connect(mapStateToProps)(ShoppingCart);