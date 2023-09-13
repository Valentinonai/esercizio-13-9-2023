import { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { json } from "react-router-dom";

const AddComment = (props) => {
  const [comment, setComment] = useState({ comment: "", rate: "" });
  const [alert, setAlert] = useState(false);
  const add = async () => {
    try {
      const risp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        body: JSON.stringify({ ...comment, elementId: props.id }),
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTAxYjk0NzgxNjRmMjAwMTRhNzJjZTYiLCJpYXQiOjE2OTQ2MTE3ODMsImV4cCI6MTY5NTgyMTM4M30.uD71CEBlGJkuj_6uf5wDE2dv7xS6WQYie_hKKK-u6e0",
        },
      });
      if (risp.ok) {
        setAlert(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (alert === true)
      setTimeout(() => {
        props.fetchComments();
        setComment({ comment: "", rate: "" });
        setAlert(false);
      }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert]);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        add();
      }}
    >
      {alert && <Alert variant="success">Commento Caricato</Alert>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-white">Commento</Form.Label>
        <Form.Control
          type="text"
          placeholder="Comment"
          value={comment.comment}
          required
          onChange={(e) => setComment({ ...comment, comment: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-white">Rate</Form.Label>
        <Form.Control
          type="number"
          placeholder="From 1 to 5"
          min={1}
          max={5}
          required
          onChange={(e) => setComment({ ...comment, rate: e.target.value })}
          value={comment.rate}
        />
      </Form.Group>

      <Button variant="outline-light" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default AddComment;
