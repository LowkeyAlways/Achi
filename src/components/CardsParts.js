import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function CardsParts() {
  return (
    <div className="d-flex flex-column cards-part">
        <Row>
        <h1>ACTUALITÉS</h1>
        </Row>
        <Row>
        <Col className="d-flex flex-column cards-part-1">
        <Card>
      <Card.Img variant="top" src="https://i0.wp.com/epthinktank.eu/wp-content/uploads/2015/11/eprs-briefing-572781-humanitarian-aid-jpg.png?fit=960%2C960&ssl=1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className="my-2">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="cards-btn my-1">Plus d'infos...</Button>
      </Card.Body>
    </Card>
    <Card className="mt-5">
      <Card.Img variant="top" src="https://i0.wp.com/epthinktank.eu/wp-content/uploads/2015/11/eprs-briefing-572781-humanitarian-aid-jpg.png?fit=960%2C960&ssl=1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className="my-2">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="cards-btn my-1">Plus d'infos...</Button>
      </Card.Body>
    </Card>
    <Card className="mt-5">
      <Card.Img variant="top" src="https://i0.wp.com/epthinktank.eu/wp-content/uploads/2015/11/eprs-briefing-572781-humanitarian-aid-jpg.png?fit=960%2C960&ssl=1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className="my-2">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="cards-btn my-1">Plus d'infos...</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col className="d-flex flex-column cards-part-2">
        <Card className="mt-5">
      <Card.Img variant="top" src="https://i0.wp.com/epthinktank.eu/wp-content/uploads/2015/11/eprs-briefing-572781-humanitarian-aid-jpg.png?fit=960%2C960&ssl=1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className="my-2">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="cards-btn my-1">Plus d'infos...</Button>
      </Card.Body>
    </Card>
    <Card className="mt-5">
      <Card.Img variant="top" src="https://i0.wp.com/epthinktank.eu/wp-content/uploads/2015/11/eprs-briefing-572781-humanitarian-aid-jpg.png?fit=960%2C960&ssl=1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className="my-2">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="cards-btn my-1">Plus d'infos...</Button>
      </Card.Body>
    </Card>
    <Card className="mt-5">
      <Card.Img variant="top" src="https://i0.wp.com/epthinktank.eu/wp-content/uploads/2015/11/eprs-briefing-572781-humanitarian-aid-jpg.png?fit=960%2C960&ssl=1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text className="my-2">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="cards-btn my-1">Plus d'infos...</Button>
      </Card.Body>
    </Card>
        </Col>
        </Row>
        <Row className="actus">
            <Link><Button onClick={() => {window.location.href="/cards"}} className="btn-actu me-5" href="#">Toutes les actualités...</Button></Link>
        </Row>
        
    </div>
  )
}

export default CardsParts