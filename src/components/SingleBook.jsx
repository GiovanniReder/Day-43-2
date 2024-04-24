import { Component } from "react"
import fantasy from "../books/fantasy.json";






import Card from 'react-bootstrap/Card';
import { Container, Row, Col  } from "react-bootstrap";

class Fantasy extends Component {
    
state = {
  selected : false,
}
    render() {
      
        return (
            <Container>
               <Row>
            
               
                   <Col key={fantasy[0].id} xs={12} sm={6} md={4} lg={3} xl={2}> 
                   <Card>
                    <Card.Img variant="top"  src={fantasy[0].img} />
                    <Card.Body>
                    <Card.Title>{fantasy[0].title}</Card.Title>
                    <Card.Text>
                    price: {fantasy[0].price}&euro;
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">{fantasy[0].author}</small>
                    <button className="border-0 px-3 rounded-pill bg-warning">Buy Now</button>
                    </Card.Footer>
                    
                    
                   </Card>
                   </Col> 
                
                </Row> 
            </Container>
        )
    }
}

export default Fantasy;
