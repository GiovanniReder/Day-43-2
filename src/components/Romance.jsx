import { Component } from "react"
import romance from "../books/romance.json";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col  } from "react-bootstrap";

class Romance extends Component {
    

    render() {
        return (
            <Container>
               <Row>
                {/* RIGA 20 IN BASE A QUELLO CHE SCRIVO CAMBIANO I GENERI DELLE CARD */}
                {romance.map((book) => (
                   <Col key={book.id} xs={12} sm={6} md={4} lg={3} xl={2}> 
                   <Card>
                    <Card.Img variant="top"  src={book.img} />
                    <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                    price: {book.price}&euro;
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">{book.author}</small>
                    <button className="border-0 px-3 rounded-pill bg-warning">Buy Now</button>
                    </Card.Footer>
                    
                    
                   </Card>
                   </Col> 
                ))}
                </Row> 
            </Container>
        )
    }
}

export default Romance;