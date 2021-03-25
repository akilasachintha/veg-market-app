import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import Rating from "./Rating";

export default function product(props) {
	const { product } = props;
	return (
		<Col key={product._id} className="d-flex justify-content-center justify-content-md-start py-2 px-2">
			<Card className="shadow-sm">
				<a href={`/product/${product._id}`}>
					<Card.Img variant="top" src={product.image} alt={product.name} style={{ height: "255px" }} />
				</a>
				<Card.Body>
					<a href={`/product/${product._id}`} className="product-name">
						<Card.Title>{product.name}</Card.Title>
					</a>
					<Card.Text>{product.description}</Card.Text>
					<Rating rating={product.rating} numReviews={product.numReviews}></Rating>
					<Card.Text>RS {product.price}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
}
