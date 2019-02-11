import React from 'react';

// Bootstrap Components
import { Card, Button }from 'react-bootstrap';

const Rep = (props) => {
  console.log(props.data)
  return (
    <div className="rep-card">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.data.photoUrl} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Rep;