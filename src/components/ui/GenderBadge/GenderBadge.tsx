import styles from "./GenderBadge.module.css";

type GenderBadgeProps = {
  gender: string;
};

function GenderBadge({ gender }: GenderBadgeProps) {
  const isMale = gender.toLowerCase() === "masculino";

  return (
    <span
      className={`${styles.badge} ${
        isMale ? styles.male : styles.female
      }`}
    >
      <span className={styles.icon}>
        {isMale ? "👨" : "👩"}
      </span>

      {isMale ? "Masculino" : "Femenino"}
    </span>
  );
}

export default GenderBadge;