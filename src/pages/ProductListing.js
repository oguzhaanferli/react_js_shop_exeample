import React from 'react'
import { useNavigate } from "react-router-dom";
import {
    Box,
    Heading,
    Image,
    Text,
    HStack,
    Container,
    Stack,
    Checkbox,
} from '@chakra-ui/react';
import { StarIcon } from "@chakra-ui/icons";
import { getProducts, setProduct, filterProduct } from "../redux/product/actions";
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const ProductListing = () => {
    const [categoryFilterList, setCategoryList] = React.useState([])

    let dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => { dispatch(getProducts()); }, []);
    const { Products, Categories } = useSelector((state) => state.productReducer);


    const getStarts = (count) => {
        let rows = []
        for (let index = 0; index < count; index++) {
            rows.push(<StarIcon color={'yellow.400'} />)
        }
        return rows;
    };

    const gotoDetail = (id) => {
        let product = Products.filter(x => x.id == id)[0];
        dispatch(setProduct(product));
        navigate('/product-detail', { replace: true })
    };

    const changeCategoryFilter = (event) => {
        var updatedList = [...categoryFilterList];
        if (event.target.checked) {
            updatedList = [...categoryFilterList, event.target.value];
        } else {
            updatedList.splice(categoryFilterList.indexOf(event.target.value), 1);
        }
        setCategoryList(updatedList);
        dispatch(filterProduct(updatedList));
    }

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
                <Box>
                    <Stack py={4} spacing={20} direction={['column', 'row']}>
                        <Box maxW='sm'
                            marginEnd={5}>
                            <Text fontSize={20} as="b" >Categoriy</Text>
                            {
                                Categories.map((item, index) => {
                                    return <Box key={index}>
                                        <Checkbox onChange={changeCategoryFilter} value={item}>{item}</Checkbox>
                                    </Box>
                                })
                            }


                        </Box>
                        <Box maxW='3xl'>
                            {Products.map((item, index) => {
                                return (
                                    <Box
                                        onClick={() => gotoDetail(item.id)}
                                        key={index}
                                        borderWidth='1px'
                                        marginTop={{ base: '1', sm: '2' }}
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
                                                width={{ base: '100%', sm: '85%' }}
                                                zIndex="2"
                                                marginLeft={{ base: '0', sm: '5%' }}
                                                marginTop="5%">
                                                {/* <Link as={ReachLink} to='/product-detail' textDecoration="none" _hover={{ textDecoration: 'none' }}> */}
                                                <Image
                                                    maxW={'3xs'}
                                                    borderRadius="lg"
                                                    src={item.image}
                                                    alt="some good alt text"
                                                    objectFit="contain"
                                                />
                                                {/* </Link> */}
                                            </Box>
                                        </Box>
                                        <Box
                                            display="flex"
                                            flex="1"
                                            flexDirection="column"
                                            justifyContent="center"
                                            marginTop={{ base: '3', sm: '0' }}>
                                            <Heading marginTop="1">
                                                <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                                    {item.title}
                                                </Text>
                                            </Heading>
                                            <HStack>
                                                <Text>{item.price} $</Text>
                                                {getStarts(item.rating.rate)}
                                                {/* <StarIcon color={'yellow.400'} /> */}
                                            </HStack>
                                            <Text>{item.category}</Text>
                                            <Text
                                                as="p"
                                                marginTop="2"
                                                fontSize="sm">
                                                {item.description}
                                            </Text>
                                        </Box>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        productReducer: state.productReducer
    };
};

export default connect(mapStateToProps)(ProductListing);