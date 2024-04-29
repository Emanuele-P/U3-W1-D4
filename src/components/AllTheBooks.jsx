import React, { useRef } from 'react'
import CardComponent from './CardComponent'
import { Col, Container, Row } from 'react-bootstrap'
import left from '../assets/images/left-arrow.svg'
import right from '../assets/images/right-arrow.svg'

function AllTheBooks({ headerText, booksData }) {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -1100, behavior: 'smooth' })
    } else {
      scrollRef.current.scrollBy({ left: 1100, behavior: 'smooth' })
    }
  }

  return (
    <Container>
      <h5 className="mt-4 mb-3 fw-bold fs-3">{headerText}</h5>

      <Row className="mb-4">
        <Col xs={12} className="horizontal-scroll-container">
          <img
            src={left}
            alt="left arrow"
            className="arrow-button left"
            onClick={() => scroll('left')}
          />
          <div
            className="horizontal-scroll d-flex"
            ref={scrollRef}
            style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
          >
            {booksData.map((book) => (
              <CardComponent key={`book-${book.asin}`} book={book} />
            ))}
          </div>
          <img
            src={right}
            alt="right arrow"
            className="arrow-button right"
            onClick={() => scroll('right')}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default AllTheBooks
