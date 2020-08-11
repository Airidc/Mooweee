import React, { ReactElement } from "react";

interface RatingsProps {
  rating: number;
  votes: number;
}

export default function MovieRatings({
  rating,
  votes,
}: RatingsProps): ReactElement {
  return (
    <div className="movie--ratings">
      <h4>
        {rating} / 10 🐮 ({votes} votes)
      </h4>
    </div>
  );
}
