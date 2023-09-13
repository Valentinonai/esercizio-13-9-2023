import Header from "./Header";
import Category from "./category";

const Movies = (props) => {
  return (
    <>
      <Header />
      {props.sceltaUtente.check && (
        <>
          <h4>{props.sceltaUtente.titolo}</h4>
          <Category saga={props.sceltaUtente.titolo} />
        </>
      )}
      <h4>{props.movies[0]}</h4>
      <Category saga={props.movies[0]} />
      <h4>{props.movies[1]}</h4>
      <Category saga={props.movies[1]} />
      <h4>{props.movies[2]}</h4>
      <Category saga={props.movies[2]} />
    </>
  );
};
export default Movies;
