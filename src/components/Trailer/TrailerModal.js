import React from "react";
import styles from "./TrailerModal.module.css";

const TrailerModal = ({ trailerUrl, onClose }) => {
  return (
    <div className={styles.modal}>
      <iframe
        className={styles.iframe}
        title="Trailer"
        width="560"
        height="315"
        src={trailerUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <button className={styles.button} onClick={onClose}>
        Keluar dari Trailer
      </button>
    </div>
  );
};

export default TrailerModal;
