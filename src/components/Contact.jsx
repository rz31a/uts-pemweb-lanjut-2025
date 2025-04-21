import { Link } from "react-router-dom";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.wrapper}>
      {/* Navbar */}
      <header className={styles.navbar}>
        <nav className={styles.navLinks}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/about" className={styles.link}>Tentang Saya</Link>
          <Link to="/projects" className={styles.link}>Proyek</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className={styles.hero}>
        <h2 className={styles.tagline}>Hubungi Saya</h2>
        <h1 className={styles.title}>Reza Putra Pratama</h1>
        <div className={styles.contactDetails}>
          <p className={styles.info}>
            📧 Email: <a href="mailto:reza.putra31@mhs.itenas.ac.id">reza.putra31@mhs.itenas.ac.id</a>
          </p>
          <p className={styles.info}>
            📞 Telp: <a href="tel:085721272403">085721272403</a>
          </p>
          <p className={styles.info}>
            💻 GitHub: <a href="https://github.com/" target="_blank" rel="noopener noreferrer">github.com</a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Contact;
