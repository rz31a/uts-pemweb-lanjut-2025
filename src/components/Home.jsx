import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import logo from "./gorila.jpg";

function Home() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.navbar}>
        <img src={logo} alt="Logo Reza" className={styles.logo} />
        <nav className={styles.navLinks}>
          <Link to="/about" className={styles.link}>Tentang Saya</Link>
          <Link to="/projects" className={styles.link}>Proyek</Link>
          <Link to="/contact" className={styles.link}>Kontak</Link>
          <Link to="/gallery" className={styles.link}>Foto</Link>
        </nav>
        
      </header>

      <main className={styles.hero}>
        <h2 className={styles.tagline}>Selamat datang di BLOG pribadi</h2>
        <h1 className={styles.title}>Reza Putra Pratama</h1>
        <p className={styles.info}></p>
        <p className={styles.info}></p>
      </main>
    </div>
  );
}

export default Home;
