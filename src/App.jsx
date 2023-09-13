import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
const App = () => {
  const [movies, setMovies] = useState(["Harry Potter", "Batman", "The smurfs"]);
  const [sceltaUtente, setSceltaUtente] = useState({ titolo: "", check: false });

  //Ricerca della serie di film che voglio
  const RicercaUtente = (search) => {
    setSceltaUtente({ titolo: search, check: false });
  };
  useEffect(() => {
    if (sceltaUtente.titolo === "") setSceltaUtente({ titolo: sceltaUtente.titolo, check: false });
    else setSceltaUtente({ titolo: sceltaUtente.titolo, check: true });
  }, [sceltaUtente.titolo]);
  return (
    <div className="App">
      <Container className="pb-5">
        <BrowserRouter>
          <TopBar logo={logo} RicercaUtente={RicercaUtente} />
          <Routes>
            <Route path="/movies" element={<Movies sceltaUtente={sceltaUtente} movies={movies} />} />
            <Route path="/movies/:movieID" element={<MovieDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
