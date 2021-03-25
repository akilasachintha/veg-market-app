import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="/">Veg Market</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto"></Nav>
					<Nav>
						<Nav.Link href="/cart">Cart</Nav.Link>
						<Nav.Link href="/signin">Sign In</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<Container fluid className="py-5 bg-light">
				<Container fluid>
					<Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
						{data.products.map((product) => (
							<Col key={product._id} className="d-flex justify-content-center justify-content-md-start py-2 px-2">
								<Card className="shadow-sm">
									<a href={"/product/$product._id"}>
										<Card.Img variant="top" src={product.image} alt={product.name} style={{ height: "255px" }} />
									</a>
									<Card.Body>
										<a href={"/product/$product._id"} className="product-name">
											<Card.Title>{product.name}</Card.Title>
										</a>
										<Card.Text>{product.description}</Card.Text>
										<Container fluid className="rating my-2 px-0">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
										</Container>
										<Card.Text>RS {product.price}</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Container>
			</Container>

			<Container fluid className="bg-dark text-light mh-100 d-inline-block text-muted">
				<div className="my-3">
					<p className="text-center">© By Akilasachintha Production</p>
				</div>
			</Container>
		</div>
	);
}

export default App;
