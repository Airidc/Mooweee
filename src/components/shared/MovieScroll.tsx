import React, { ReactElement, useState } from "react";

import { Movie } from "../Movies/movies-reducer";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import FilterWidget from "./FilterWidget";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";

interface MovieScrollProps {
  movies: Movie[];
  section: MovieScrollSection;
}

export enum MovieScrollSection {
  popular = "Popular",
  trending = "Trending",
  search = "Search",
}

export default function MovieScroll({
  movies,
  section,
}: MovieScrollProps): ReactElement {
  const tmdb = useSelector((state: RootState) => state.tmdb);
  const [filteredGenre, setFilteredGenre] = useState({ id: -1, name: "" });
  const filteredMovies =
    filteredGenre.id !== -1
      ? movies.filter((movie) => movie.genre_ids.includes(filteredGenre.id))
      : movies;

  return (
    <>
      <div className={`headline headline--${section.toLowerCase()}`}>
        {section === MovieScrollSection.search ? (
          <h1>Search page results</h1>
        ) : (
          <h1>{section.charAt(0).toUpperCase() + section.slice(1)} Movies</h1>
        )}

        <FilterWidget
          filteredGenre={filteredGenre}
          setFilteredGenre={setFilteredGenre}
        />
      </div>
      <div className="movie--cards--wrapper scrollable">
        <div className="movie--cards--container">
          {filteredMovies.length ? (
            filteredMovies.map((movie) => {
              if (!movie.backdrop_path) movie.backdrop_path = movie.poster_path;

              return (
                <MovieCard tmdb={tmdb} movie={movie} key={movie.id}></MovieCard>
              );
            })
          ) : section === MovieScrollSection.search ? (
            <h2 className="movie--not-found">
              No Movies found. Try searching for something else.
            </h2>
          ) : (
            <h2 className="movie--not-found">
              Looks like there are no {section.toLowerCase()}{" "}
              {filteredGenre.name} movies.. 😅 <br /> Wanna try{" "}
              <Link className="movie--link" to={`/genre/${filteredGenre.name}`}>
                {filteredGenre.name}
              </Link>{" "}
              genre page?
            </h2>
          )}
        </div>
      </div>
    </>
  );
}
