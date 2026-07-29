import styles from "./DashboardCard.module.css";

type DashboardCardProps = {
  title: string;
  icon: string;
};

export default function DashboardCard({
  title,
  icon,
}: DashboardCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>

      <h3>{title}</h3>
    </div>
  );
}