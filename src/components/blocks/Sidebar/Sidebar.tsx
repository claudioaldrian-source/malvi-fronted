import styles from "./Sidebar.module.css";
import { useNavigate } from "@tanstack/react-router";

export default function Sidebar() {

const navigate = useNavigate();

  return (
    <aside className={styles.sidebar}>

      <button onClick={() => navigate({ to: "/" })}>
  👥 Usuarios
</button>

      <button>📰 Noticias</button>

      <button>📅 Eventos</button>

      <button>📍 Historia</button>

      <button>⚙ Configuración</button>

      <button onClick={() => navigate({ to: "/profile" })}>
  👤 Perfil
</button>

<button onClick={() => navigate({ to: "/profile" })}>
  👤 Perfil
</button>

<button
  onClick={() => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("nombre");
    localStorage.removeItem("apellido");

    navigate({ to: "/login" });
  }}
>
  🚪 Cerrar sesión
</button>

    </aside>
  );
}