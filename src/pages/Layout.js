import { ChakraProvider, theme } from "@chakra-ui/react"
import { Outlet } from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Layout = () => {
    return (
        <ChakraProvider theme={theme}>
            <Header />
            <NavBar />
            <Outlet />
            <Footer />
        </ChakraProvider>
    )
}
export default Layout;