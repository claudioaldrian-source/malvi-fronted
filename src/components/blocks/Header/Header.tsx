import styles from "./Header.module.css";
import fondoMalvinas from "@/assets/backgrounds/fondo_malvinas1.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.info}>

<span className={styles.welcome}>Bienvenido Veterano</span>

        <h1>Portal Malvinas</h1>

        <p>
          Honrar la memoria, preservar la historia y acercar las Islas
          Malvinas a todos los argentinos.
        </p>
      </div>

      <div className={styles.imageContainer}>
        <img
          src={fondoMalvinas}
          alt="Islas Malvinas"
          className={styles.image}
        />
      </div>
    </header>
  );
}