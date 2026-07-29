import styles from "./Dashboard.module.css";

import DashboardCard from "@/components/ui/DashboardCard/DashboardCard";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>

      <h1>Portal Malvinas</h1>

      <p className={styles.subtitle}>
        Bienvenido al Dashboard
      </p>

      <div className={styles.grid}>

        <DashboardCard
          title="Usuarios"
          icon="👥"
        />

        <DashboardCard
          title="Noticias"
          icon="📰"
        />

        <DashboardCard
          title="Eventos"
          icon="📅"
        />

        <DashboardCard
          title="Historia"
          icon="📍"
        />

        <DashboardCard
          title="Configuración"
          icon="⚙️"
        />

        <DashboardCard
          title="Perfil"
          icon="👤"
        />

      </div>

    </div>
  );
}