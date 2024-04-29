import React from 'react'
import { Card } from 'react-bootstrap'
import star from '../assets/images/star.svg'

function BookCard({ book }) {
  return (
    <Card className="book-card">
      <Card.Img className="card-img-top" variant="top" src={book.img} />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{book.title}</Card.Title>
        <div className="d-flex align-items-center gap-2">
          <Card.Text className="card-price">
            {book.category} • {book.price}$
          </Card.Text>
          <img src={star} alt="star" />
        </div>
      </Card.Body>
    </Card>
  )
}

export default BookCard
