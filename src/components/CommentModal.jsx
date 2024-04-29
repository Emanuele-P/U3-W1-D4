import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

class CommentModal extends Component {
  state = { commentText: '' }

  handleSendComment = () => {
    this.props.addComment(this.state.commentText)
    this.setState({ commentText: '' })
    this.props.onHide()
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Leave a Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Opinion:</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={this.state.commentText}
                onChange={(e) => this.setState({ commentText: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={this.props.onHide}>
            Discard
          </Button>
          <Button variant="primary" onClick={this.handleSendComment}>
            Send Comment
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default CommentModal
