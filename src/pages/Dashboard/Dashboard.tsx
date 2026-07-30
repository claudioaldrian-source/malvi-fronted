import { useState } from "react";

import styles from "./Dashboard.module.css";

import Header from "@/components/blocks/Header/Header";
import Sidebar from "@/components/blocks/Sidebar/Sidebar";
import MFASetupModal from "@/components/blocks/MFASetupModal/MFASetupModal";

export default function Dashboard() {
  const [openMFA, setOpenMFA] = useState(false);
  return (
    <>
      <Header />

      <div className={styles.layout}>
        <Sidebar />

        <main className={styles.content}>
  <h2>Portal Malvinas</h2>

  <p>Bienvenido al Dashboard</p>

  <button onClick={() => setOpenMFA(true)}>
    Activar MFA
  </button>
</main>
      </div>

<MFASetupModal
  open={openMFA}
  onClose={() => setOpenMFA(false)}
/>

    </>
  );
}