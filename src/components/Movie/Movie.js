import React, { useState } from "react";
import styles from "./Movie.module.css";
import TrailerModal from "../Trailer/TrailerModal";

const Movie = (props) => {
  const { title, date, image, trailerUrl } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const youtubeEmbedUrl = extractVideoId(trailerUrl);

  const handleOpenTrailer = () => {
    setIsModalOpen(true);
  };

  const handleCloseTrailer = () => {
    setIsModalOpen(false);
  };

  function extractVideoId(url) {
    const match = url.match(/[?&]v=([^?&]+)/);
    return match && match[1];
  }

  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__image}
        src={image}
        alt=""
      />
      <h3 className={styles.movie__title}>{title}</h3>
      <p className={styles.movie__date}>{date}</p>
      <button className={styles.button} onClick={handleOpenTrailer}>Tonton</button>

      {isModalOpen && (
        <TrailerModal trailerUrl={`https://www.youtube.com/embed/${youtubeEmbedUrl}`} onClose={handleCloseTrailer} />
      )}
    </div>
  );
};

export default Movie;