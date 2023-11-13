import React, { useState } from "react";
import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import DataMovie from "../../utils/constants/DataMovie";

const Movies = () => {
  const [data, setData] = useState(DataMovie);

  const handleClick = () => {
    const newMovie = {
      id: 4,
      title: "Perjamuan Iblis",
      date: "16 November 2023",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTZjYzM2YjMtMWJmMi00MTZjLWI5NTItOGI0MGM4ZjgyYWIyXkEyXkFqcGdeQXVyNzY4NDQzNTg@._V1_.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=L-nTdMgoRN4"
    };

    const newMovie2 = {
      id: 5,
      title: "172 Days",
      date: "23 November 2023",
      image: "https://m.media-amazon.com/images/M/MV5BYTUyYTMwMjAtOTk1ZC00MThmLTg5YWItODIzZDVjM2QyYjU3XkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=IPRBKGxCCZQ"
    };

    const newMovie3 = {
      id: 6,
      title: "Kimitachi wa dô ikiru ka",
      date: "14 Juli 2023",
      image: "https://m.media-amazon.com/images/M/MV5BZjZkNThjNTMtOGU0Ni00ZDliLThmNGUtZmMxNWQ3YzAxZTQ1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
      trailerUrl: "https://www.youtube.com/watch?v=f7EDFdA10pg"
    };

    setData([...data, newMovie, newMovie2, newMovie3]);
  };

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Movies Terbaru</h2>
        <div className={styles.movie__container}>
          {data.map(function (data) {
            return (
              <Movie
                key={data.id}
                title={data.title}
                date={data.date}
                image={data.image}
                trailerUrl={data.trailerUrl}
              />
            );
          })}
        </div>
        <button className={styles.button} onClick={handleClick}>Tambahkan Movies</button>
      </section>
    </div>
  );
};

export default Movies;
