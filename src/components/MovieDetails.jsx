import { useEffect, useState } from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import AddComment from "./AddComment";

const MovieDetails = () => {
  const parameter = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const fetchDetails = async () => {
    try {
      const risp = await fetch(`http://www.omdbapi.com/?apikey=c8870a25&i=${parameter.movieID}`);
      if (risp.ok) {
        const data = await risp.json();
        setMovieDetails(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [comments, setComments] = useState(null);
  const fetchComments = async () => {
    try {
      const risp = await fetch(` https://striveschool-api.herokuapp.com/api/movies/${parameter.movieID}/comments`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTAxYjk0NzgxNjRmMjAwMTRhNzJjZTYiLCJpYXQiOjE2OTQ2MTE3ODMsImV4cCI6MTY5NTgyMTM4M30.uD71CEBlGJkuj_6uf5wDE2dv7xS6WQYie_hKKK-u6e0",
        },
      });
      if (risp.ok) {
        const data = await risp.json();
        setComments(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {console.log(movieDetails)}
      {movieDetails && (
        <Row>
          <Col xs={3}>
            <div style={{ position: "relative" }}>
              <img src={movieDetails.Poster} alt="img" width={"100%"} />
              <Badge bg="info" style={{ position: "absolute", bottom: "5px", right: "5px" }}>
                {movieDetails.imdbRating}
              </Badge>
            </div>
          </Col>
          <Col xs={6}>
            <div className="text-white">
              <h1>{movieDetails.Title}</h1>
              <h5>{movieDetails.Type}</h5>
              <p style={{ fontWeight: "300" }}>
                <span>Actors:</span>
                <br></br>
                <span>{movieDetails.Actors}</span>
              </p>
            </div>
            <h5 className="text-white">Comments:</h5>
            <ListGroup>
              <Comments id={parameter.movieID} comments={comments} fetchComments={fetchComments} />
            </ListGroup>
          </Col>
          <Col xs={3} style={{ borderLeft: "1px solid gray" }}>
            <h2>Add Comment</h2>
            <AddComment id={parameter.movieID} fetchComments={fetchComments} />
          </Col>
        </Row>
      )}
    </>
  );
};
export default MovieDetails;
