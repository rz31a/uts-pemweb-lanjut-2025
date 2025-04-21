import { Link } from "react-router-dom";
import styles from "./About.module.css"; // Gunakan CSS module khusus untuk About

function About() {
  return (
    <div className={styles.wrapper}>
      {/* Navbar */}
      <header className={styles.navbar}>
        <nav className={styles.navLinks}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/projects" className={styles.link}>Proyek</Link>
          <Link to="/contact" className={styles.link}>Kontak</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className={styles.hero}>
        <h2 className={styles.tagline}>Autobiografi</h2>
        <h1 className={styles.title}>Reza Putra Pratama</h1>
        <p className={styles.info}>Latar belakang.</p>
        <p className={styles.info}>Saya Reza Putra Pratama asal sukabumi, jawa barat. saya adalah seorang lulusan multimedia dari SMKN 1 Gegerbitung tahun 2023. sekarang saya tengah menempuh perguruan tinggi di INSTITUT TEKNOLOGI NASIONAL BANDUNG jurusan INFORMATIKA. setelah belajar selama kurang lebih satu tahun setengah di perguruan tinggi saya telah mempelajari beberapa kemampuan.</p>
        <p className={styles.info}>Disini juga saya jadi tau cara melakukan hosting atau membuat tunnel dari jaringan lokal ke internet, sehingga memungkinkan untuk mengakses aplikasi atau server lokal melalui URL publik yang dapat digunakan untuk pengujian atau integrasi menggunakan nginx</p>       
        <h3 className={styles.subtitle}>Skills:</h3>
        <ul className={styles.list}>
          <li>JavaScript</li>
          <li>React</li>
          <li>Html</li>
          <li>Css</li>
        </ul>
        <h3 className={styles.subtitle}>Tools & Framework:</h3>
        <p className={styles.info}>Git, Laravel, Xampp, delphi7.</p>
      </main>
    </div>
  );
}

export default About;
