import React, {useEffect, useState} from "react";
import Product from "../components/Product";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import axios from "axios";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const {data} = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <Container fluid className="py-3">
            {loading ? (<LoadingBox></LoadingBox>) :
                (error ? (
                            <MessageBox variant="danger">{error}</MessageBox>)
                        : (
                            <Container fluid>
                                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
                                    {products.map((product) => (
                                        <Product key={product._id} product={product}></Product>
                                    ))}
                                </Row>
                            </Container>
                        )
                )
            }
        </Container>
    );
}
