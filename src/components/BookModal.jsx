import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function BookModal({ show, hide, book, comments }) {
  if (!show) return null

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      {/* <Modal show={show} onHide={hide} backdrop="static" keyboard={false}></Modal> */}
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
            <Button variant="outline-secondary" onClick={hide}>
              Close
            </Button>
            <Button variant="info">Save changes</Button>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  )
}

export default BookModal
