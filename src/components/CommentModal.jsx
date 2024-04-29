import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Alert from 'react-bootstrap/Alert'

class CommentModal extends Component {
  state = {
    comment: {
      comment: '',
      rate: 1,
      elementId: this.props.selectedBookAsin,
    },
    showAlert: false,
    alertVariant: 'success',
    alertMessage: '',
  }

  sendComment = async (event) => {
    event.preventDefault()
    const { comment } = this.state

    try {
      const URL = `https://striveschool-api.herokuapp.com/api/comments/`
      const API_KEY =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZWFkNzdmMzA0NjAwMWFlNTlmNmIiLCJpYXQiOjE3MTQzOTU2NzIsImV4cCI6MTcxNTYwNTI3Mn0.yfjMncpvzwOYpP_vBTE0BmCHEdXvANwDaV06LcyBt3o'

      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: API_KEY,
        },
        body: JSON.stringify(comment),
      })

      if (response.ok) {
        console.log('Comment added successfully')
        this.setState({
          showAlert: true,
          alertVariant: 'success',
          alertMessage: 'Comment added successfully!',
        })
        this.props.fetchComments()
      } else {
        throw new Error('Fetch error')
      }
    } catch (error) {
      console.error('Error adding comment:', error)
      this.setState({
        showAlert: true,
        alertVariant: 'danger',
        alertMessage: 'Failed to add comment',
      })
    } finally {
      this.props.onHide()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedBookAsin !== prevProps.selectedBookAsin) {
      this.setState((prevState) => ({
        comment: {
          ...prevState.comment,
          elementId: this.props.selectedBookAsin,
        },
      }))
    }
  }

  render() {
    const { showAlert, alertVariant, alertMessage } = this.state

    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        className="comment-modal"
      >
        <Modal.Header>
          <Modal.Title>Leave a Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showAlert && <Alert variant={alertVariant}>{alertMessage}</Alert>}
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Opinion:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={this.state.comment.comment}
                onChange={(event) =>
                  this.setState({
                    comment: {
                      ...this.state.comment,
                      comment: event.target.value,
                    },
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Rating:</Form.Label>
              <Form.Control
                as="select"
                value={this.state.comment.rate}
                onChange={(event) =>
                  this.setState({
                    comment: {
                      ...this.state.comment,
                      rate: event.target.value,
                    },
                  })
                }
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={this.props.onHide}>
            Discard
          </Button>
          <Button variant="primary" onClick={this.sendComment}>
            Send Comment
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default CommentModal
