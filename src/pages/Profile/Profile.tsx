import { useState } from "react";
import styles from "./Profile.module.css";
import MFASetupModal from "@/components/blocks/MFASetupModal/MFASetupModal";

export default function Profile() {
  const [openMFA, setOpenMFA] = useState(false);

  return (
    <main className={styles.container}>
      <h1>Mi Perfil</h1>

      <h2>Seguridad</h2>

      <p>Autenticación en dos pasos</p>

      <button onClick={() => setOpenMFA(true)}>
        Activar MFA
      </button>

      <MFASetupModal
        open={openMFA}
        onClose={() => setOpenMFA(false)}
      />
    </main>
  );
}