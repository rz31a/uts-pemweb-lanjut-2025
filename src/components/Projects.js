import { Link } from "react-router-dom";
import styles from "./Projects.module.css"; // Tambahkan CSS module

function Projects() {
  const projectList = [
    { name: "Proyek 1", desc: "Yaitu membangun website jual beli mobile menggunakan Laravel dan Xampp. dimulai dari form login hingga membeli mobil yaitu pembayaran menggunakan m-banking.", tech: "Html, CSS, Java." },
    { name: "Proyek 2", desc: "Membangun aplikasi dengan Delphi 7 menggunakan Object Pascal melibatkan pembuatan antarmuka pengguna, pemrograman logika aplikasi, dan koneksi ke database. Dengan XAMPP (MySQL),Proses utama meliputi desain UI, konfigurasi database, pemrograman SQL untuk CRUD (Create, Read, Update, Delete), serta kompilasi aplikasi menjadi file", tech: "Pascal" }
  ];

  return (
    <div className={styles.wrapper}>
      {/* Navbar */}
      <header className={styles.navbar}>
        <nav className={styles.navLinks}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/about" className={styles.link}>Tentang Saya</Link>
          <Link to="/contact" className={styles.link}>Kontak</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className={styles.hero}>
        <h2 className={styles.tagline}>Portofolio</h2>
        <h1 className={styles.title}>Proyek Saya</h1>
        {projectList.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{project.name}</h3>
            <p className={styles.projectDesc}>{project.desc}</p>
            <small className={styles.projectTech}>Bahasa Pemrograman: {project.tech}</small>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Projects;
