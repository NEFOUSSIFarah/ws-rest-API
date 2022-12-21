import React from 'react'
import { Button, Card } from 'react-bootstrap';


const UserCard = () => {
  return (
    <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{User.name}</Card.Title>
        <Card.Text>
          {user.username}
        </Card.Text>
        <Card.Text>{user.email}</Card.Text>
        <Button variant="primary">
          <Link to={`/user/${user.id}`}>GO CHECK MY PROFILE</Link>
        </Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default UserCard;