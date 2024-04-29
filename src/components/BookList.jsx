import React, { Component } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'
import ToggleGroup from './ToggleGroup'
import fantasy from '../data/books/fantasy.json'
import romance from '../data/books/romance.json'
import history from '../data/books/history.json'
import scifi from '../data/books/scifi.json'
import horror from '../data/books/horror.json'
import BookModal from './BookModal'
import CommentModal from './CommentModal'

class BookList extends Component {
  state = {
    searchTerm: '',
    booksData: [...fantasy, ...romance, ...history, ...scifi, ...horror],
    selectedBookAsin: null,
    comments: [],
    showCommentModal: false,
  }

  scrollRef = React.createRef()

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  handleBookSelect = (asin) => {
    this.setState({ selectedBookAsin: asin }, () => {
      this.fetchComments()
    })
  }

  setBooksData = (data) => {
    this.setState({ booksData: data })
  }

  handleGenreChange = (genre) => {
    const genreMap = {
      1: [...fantasy, ...romance, ...history, ...scifi, ...horror],
      2: fantasy,
      3: romance,
      4: history,
      5: scifi,
      6: horror,
    }
    this.setState({ booksData: genreMap[genre] || [] })
  }

  handleShowCommentModal = () => {
    this.setState({ showCommentModal: true })
  }

  handleCloseCommentModal = () => {
    this.setState({ showCommentModal: false })
  }

  fetchComments = () => {
    const URL = `https://striveschool-api.herokuapp.com/api/comments/${this.state.selectedBookAsin}`
    const API_KEY =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZWFkNzdmMzA0NjAwMWFlNTlmNmIiLCJpYXQiOjE3MTQzOTU2NzIsImV4cCI6MTcxNTYwNTI3Mn0.yfjMncpvzwOYpP_vBTE0BmCHEdXvANwDaV06LcyBt3o'

    console.log('Fetching...')
    fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: API_KEY,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Fetch completed')
          return response.json()
        } else {
          throw new Error('Fetching error')
        }
      })
      .then((comments) => {
        if (comments && comments.length > 0) {
          this.setState({ comments })
          console.log('Fetched comments:', comments)
        } else {
          this.setState({ comments: [] })
          console.log('There are no comments for this book')
        }
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }

  render() {
    const { searchTerm, booksData, selectedBookAsin, showCommentModal } =
      this.state
    const filteredBooks = booksData.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    const selectedBook = booksData.find(
      (book) => book.asin === selectedBookAsin
    )
    return (
      <Container>
        <Row className="search-row mt-5 mb-2">
          <Col xs={12} md={8} lg={6} xl={4} className="p-0">
            <ToggleGroup onGenreChange={this.handleGenreChange} />
          </Col>
          <Col xs={12} md={4} lg={6} xl={8} className="mt-3 mt-md-0 p-0">
            <Form>
              <Form.Group controlId="searchTerm">
                <div className="search-input-container">
                  <Form.Control
                    className="custom-form-control"
                    type="text"
                    placeholder="Search books by title"
                    value={searchTerm}
                    onChange={this.handleSearchChange}
                  />
                </div>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <div className="horizontal-scroll d-flex" ref={this.scrollRef}>
          {filteredBooks.map((book, i) => (
            <SingleBook
              key={`${book.asin}-${i}`}
              book={book}
              onSelect={this.handleBookSelect}
              isSelected={book.asin === selectedBookAsin}
            />
          ))}
        </div>
        <BookModal
          show={this.state.selectedBookAsin !== null}
          onHide={() => this.handleBookSelect(null)}
          book={selectedBook}
          comments={this.state.comments}
          handleShowCommentModal={this.handleShowCommentModal}
        />
        <CommentModal
          show={showCommentModal}
          onHide={this.handleCloseCommentModal}
          selectedBookAsin={selectedBookAsin}
        />
      </Container>
    )
  }
}

export default BookList
