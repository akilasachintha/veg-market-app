import React from "react";
import Container from "react-bootstrap/Container";

export default function Rating(props) {
	const { rating, numReviews } = props;
	return (
		<Container fluid className="rating my-2 px-0">
			<i className={rating >= 1 ? "fa fa-star" : rating >= 0.5 ? "fa fa-star-half" : "fa fa-star-o"}></i>
			<i className={rating >= 2 ? "fa fa-star" : rating >= 1.5 ? "fa fa-star-half" : "fa fa-star-o"}></i>
			<i className={rating >= 3 ? "fa fa-star" : rating >= 2.5 ? "fa fa-star-half" : "fa fa-star-o"}></i>
			<i className={rating >= 4 ? "fa fa-star" : rating >= 3.5 ? "fa fa-star-half" : "fa fa-star-o"}></i>
			<i className={rating >= 5 ? "fa fa-star" : rating >= 4.5 ? "fa fa-star-half" : "fa fa-star-o"}></i>
			<span>{numReviews + " reviews"}</span>
		</Container>
	);
}
