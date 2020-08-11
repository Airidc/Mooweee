export interface TmdbState {
  imageUrl: string;
  apiUrl: string;
  apiKey: string;
  genres: Genre[];
  endpointPaths: Enpoints;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Enpoints {
  searchMovie: string;
  searchMovieById: string;
  searchTv: string;
  trendingTv: string;
  trendingTvToday: string;
  trendingMovies: string;
  trendingMoviesToday: string;
  popularMovies: string;
  cast: string;
}

export const tmdbInitialState: TmdbState = {
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
  imageUrl: "https://image.tmdb.org/t/p/original",
  apiUrl: "https://api.themoviedb.org/3",
  apiKey: process.env.REACT_APP_API_KEY as string,
  endpointPaths: {
    searchMovie: "/search/movie",
    searchMovieById: "/movie/",
    searchTv: "/search/tv",
    trendingTv: "/trending/tv/week",
    trendingTvToday: "/trending/tv/day",
    trendingMovies: "/trending/movie/week",
    trendingMoviesToday: "/trending/movie/day",
    popularMovies: "/movie/popular",
    cast: "/movie/%ID%/credits",
  },
};
