import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const deleteComment = async (selectedBookAsin) => {
    try {
      const URL = `https://striveschool-api.herokuapp.com/api/comments/`
      const API_KEY =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZWFkNzdmMzA0NjAwMWFlNTlmNmIiLCJpYXQiOjE3MTQzOTU2NzIsImV4cCI6MTcxNTYwNTI3Mn0.yfjMncpvzwOYpP_vBTE0BmCHEdXvANwDaV06LcyBt3o'

      let response = await fetch(URL + selectedBookAsin, {
        method: 'DELETE',
        headers: {
          Authorization: API_KEY,
        },
      })
      if (response.ok) {
        alert('This comment has been deleted')
      } else {
        throw new Error('Comment not deleted')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <p className="mb-0 flex-grow-1">{comment.comment}</p>
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        <i className="bi bi-trash3"></i>
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
