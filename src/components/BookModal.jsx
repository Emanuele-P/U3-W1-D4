import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function BookModal({ show, onHide, book, comments, handleShowCommentModal }) {
  if (!show) return null

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title className="fs-4">
            {book ? book.title : 'No book selected'}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index}>
                <p>{comment.comment}</p>
                <hr />
              </div>
            ))
          ) : (
            <p>No comments available.</p>
          )}

          <div className="d-flex align-items-center justify-content-end gap-3 mt-4">
            <Button variant="outline-secondary" onClick={onHide}>
              Close
            </Button>
            <Button variant="info" onClick={handleShowCommentModal}>
              Leave a comment
            </Button>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  )
}

export default BookModal
