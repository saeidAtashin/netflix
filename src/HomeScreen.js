import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import requests from './Request'
import Row from "./Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="Trending Movies"
        fetchUrl={requests.fetchTrending}
      />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} /> 
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
        
      />
      <Row
        title="Comedy Movie"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />

    </div>
  );
}

export default HomeScreen;
