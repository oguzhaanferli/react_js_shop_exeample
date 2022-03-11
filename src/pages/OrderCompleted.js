import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";

const OrderCompleted = () => {
    const navigate = useNavigate();
    return (
        <Box textAlign="center" py={10} px={6}>
            <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
                Your Order Is Completed!
            </Heading>
            <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
            </Text>
            <Button
                mt={10}
                bg={'green.400'}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                onClick={() => { navigate('/', { replace: true }) }}
                _hover={{
                    bg: 'green.500',
                }}
                _focus={{
                    bg: 'green.500',
                }}>
                Continue Shopping
            </Button>
        </Box>
    )
}
export default OrderCompleted;

