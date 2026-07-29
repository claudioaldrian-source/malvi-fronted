import styles from "./Dashboard.module.css";

import Header from "@/components/blocks/Header/Header";
import Sidebar from "@/components/blocks/Sidebar/Sidebar";


export default function Dashboard() {
  return (
    <>
      <Header />

      <div className={styles.layout}>
        <Sidebar />

        <main className={styles.content}>
  <h2>Portal Malvinas</h2>

  <p>Bienvenido al Dashboard</p>
</main>
      </div>
    </>
  );
}