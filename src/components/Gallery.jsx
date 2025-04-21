import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Gallery.module.css";
import foto1 from "./gorila.jpg";  
import foto2 from "./gorila1.jpg";  
import foto3 from "./gorila2.jpg";  

function Gallery() {
  const [index, setIndex] = useState(0);
  const images = [foto1, foto2, foto3]; // Daftar gambar

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.wrapper}>
      {/* Navbar */}
      <header className={styles.navbar}>
        <nav className={styles.navLinks}>
          <Link to="/" className={styles.link}>Home</Link>
        </nav>
      </header>

      {/* Bagian Galeri */}
      <main className={styles.galleryContainer}>
        <h2 className={styles.title}>Galeri Foto</h2>
        <img src={images[index]} alt="Gallery" className={styles.image} />
        <div className={styles.buttonContainer}>
          <button className={styles.prevButton} onClick={prevImage}>←</button>
          <button className={styles.nextButton} onClick={nextImage}>→</button>
        </div>
      </main>
    </div>
  );
}

export default Gallery;
