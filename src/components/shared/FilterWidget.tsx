import React, { ReactElement, useState } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { Genre } from "../../store/initial-state";
import ArrowDownSvg from "../shared/ArrowDownSvg";

interface FilterWidgetProps {
  filteredGenre: Genre;
  setFilteredGenre(genre: Genre): void;
}

export default function FilterWidget({
  filteredGenre,
  setFilteredGenre,
}: FilterWidgetProps): ReactElement {
  const [isExpanded, setIsExpanded] = useState(false);
  const genres = useSelector((state: RootState) => state.tmdb.genres);

  return (
    <div className="filter" onClick={() => setIsExpanded(!isExpanded)}>
      <h4>{filteredGenre.name ? filteredGenre.name : "All"}</h4>
      <span className="filter--svg--container">
        <ArrowDownSvg isExpanded={isExpanded} />
      </span>
      <input type="hidden" value={filteredGenre.id} />
      <div
        className={`filter--dropdown scrollable scrollable--small ${
          isExpanded ? "" : "hidden"
        }`}
      >
        {genres.map((genre) => {
          return (
            <div
              className="filter--dropdown--item"
              onClick={() => setFilteredGenre(genre)}
              key={genre.id}
            >
              {genre.name ? genre.name : "All"}
            </div>
          );
        })}
      </div>
    </div>
  );
}
