// export const people = [
//   {
//     id: "0",
//     name: "Star",
//     age: 18,
//     gender: "female"
//   },
//   {
//     id: "1",
//     name: "Walter",
//     age: 27,
//     gender: "male"
//   },
//   {
//     id: "2",
//     name: "Jungi",
//     age: 27,
//     gender: "male"
//   },
//   {
//     id: "3",
//     name: "Jay",
//     age: 27,
//     gender: "male"
//   },
//   {
//     id: "4",
//     name: "SeokJun",
//     age: 28,
//     gender: "male"
//   },
//   {
//     id: "5",
//     name: "eungee",
//     age: 28,
//     gender: "female"
//   },
//   {
//     id: "6",
//     name: "minjung",
//     age: 25,
//     gender: "female"
//   },
//   {
//     id: "7",
//     name: "wonji",
//     age: 25,
//     gender: "female"
//   }
// ];

export let movies = [
  {
    id: "0",
    name: "Star Wars - The new one",
    score: 10
  },
  {
    id: "1",
    name: "Avengers - EndGame",
    score: 99
  },
  {
    id: "2",
    name: "Truman Show",
    score: 80
  },
  {
    id: "3",
    name: "Spiderman - Far from home",
    score: 20
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
