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
          <Card.Title>{props.data.name}</Card.Title>
          <Card.Text>
            {props.data.address.map((line) => {
              return (
              <div>
                <p>{line.line1}</p>
                <p>{line.line2}</p>
                <p>{line.city}, {line.state} {line.zip}</p>
              </div>
              )
            })}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Rep;