import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import data from "../data.js";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

export default function ProductScreen(props) {
	const product = data.products.find((x) => x._id === props.match.params.id);
	if (!product) {
		return <div> Product Not Found</div>;
	}
	return (
		<Container fluid>
			<Link to="/">Back to result</Link>
			<Row>
				<Col className="m-5" sm>
					<Image className="p-4" src={product.image} style={{ Width: "450px" }} alt={product.name} fluid />
				</Col>
				<Col className="p-5" sm>
					<Container>
						<h4 className="my-4">{product.name}</h4>
						<Rating rating={product.rating} numReviews={product.numReviews}></Rating>
						<h5 className="my-4">
							Price <span>Rs {product.price}</span>
						</h5>
						<p className="my-4">{product.description}</p>
						<h6 className="my-4">Images</h6>
					</Container>
				</Col>
				<Col className="m-5 p-4 bg-light shadow" sm>
					<Container fluid className="my-4">
						<strong>Seller</strong> <span>Palawatta Garden</span>
					</Container>
					<Container fluid className="my-4">
						<Rating rating={product.rating} numReviews={product.numReviews}></Rating>
					</Container>
					<Container fluid className="my-4">
						<strong>Price</strong> <span>Rs {product.price}</span>
					</Container>
					<Container fluid className="my-4">
						<strong>Status</strong> {product.countInStock > 0 ? <span className="text-success">In Stock</span> : <span className="text-danger">Unavailable</span>}
					</Container>
					<Container fluid className="my-4">
						<strong>Quentity</strong>
						<span>
							<Form>
								<Form.Group controlId="">
									<Form.Control as="select" custom size="sm">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Form.Control>
								</Form.Group>
							</Form>
						</span>
					</Container>
					<Container fluid className="my-4">
						<Button variant="warning" block className="my-3">
							Add to Cart
						</Button>
					</Container>
				</Col>
			</Row>
		</Container>
	);
}
