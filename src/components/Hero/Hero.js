// Hero.js
import React, { useState } from "react";
import styles from "./Hero.module.css";
import TrailerModal from "../Trailer/TrailerModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenTrailer = () => {
    setIsModalOpen(true);
  };

  const handleCloseTrailer = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>The Shawshank Redemption</h2>
          <h3 className={styles.hero__genre}>Genre: Drama</h3>
          <p className={styles.hero__description}>
            Dua orang budak dipenjarakan selama beberapa tahun, menemukan
            pelipur lara & tindakan penebusan dengan kesusilaan umum. Mereka
            menunjukan pentingnya "Harapan" yang terkadang kita semua
            membutuhkan.
          </p>
          <button className={styles.hero__button} onClick={handleOpenTrailer}>
            Tonton
          </button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src="https://m.media-amazon.com/images/I/71+l6VMgw2L.jpg"
            alt="placeholder"
          />
        </div>
      </section>
      {isModalOpen && (
        <TrailerModal
          trailerUrl="https://www.youtube.com/embed/P9mwtI82k6E?si=c6PHi7YH01N8K6xE"
          onClose={handleCloseTrailer}
        />
      )}
    </div>
  );
};

export default Hero;
