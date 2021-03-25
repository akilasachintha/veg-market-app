import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Veg Market</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Nav.Link href="/cart">Cart</Nav.Link>
                            <Nav.Link href="/signin">Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <main>
                    <Route path="/product/:id" component={ProductScreen}></Route>
                    <Route path="/" component={HomeScreen} exact></Route>
                </main>
                <Container fluid className="bg-dark text-light d-inline-block text-muted">
                    <div className="my-3">
                        <p className="text-center">© By Akilasachintha Production</p>
                    </div>
                </Container>
            </div>
        </BrowserRouter>
    );
}

export default App;
