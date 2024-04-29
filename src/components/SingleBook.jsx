import { Card, Col, Row } from 'react-bootstrap'

function SingleBook({ book, onSelect, isSelected }) {
  return (
    <>
      <Row>
        <Col
          xs={12}
          className="d-flex align-items-center justify-content-start"
        >
          <Card
            className={`single-book book-card ${
              isSelected ? 'book-card-selected' : ''
            }`}
            onClick={() => {
              onSelect(book.asin)
            }}
          >
            <Card.Img className="card-img-top" variant="top" src={book.img} />
            <Card.Body className="card-body" style={{ width: '200px' }}>
              <Card.Title className="card-title">{book.title}</Card.Title>
              <div className="d-flex align-items-center gap-2"></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default SingleBook
