import React from "react";
import Product from "../components/Product";
import data from "../data.js";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function HomeScreen() {
	return (
		<Container fluid className="py-3">
			<Container fluid>
				<Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
					{data.products.map((product) => (
						<Product key={product._id} product={product}></Product>
					))}
				</Row>
			</Container>
		</Container>
	);
}
