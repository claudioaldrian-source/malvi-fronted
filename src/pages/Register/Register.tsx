import { Link } from '@tanstack/react-router'
import styles from '../Auth/Auth.module.css'
import Button from '@/components/ui/Button/Button'
import planetBg from '@/assets/planeta_luminoso.png'

function Register() {
  return (
    <main className={styles.container}>

      <section className={styles.left}>
        <div className={styles.form}>
          <h1 className={styles.title}>Crear Cuenta</h1>
          <p className={styles.subtitle}>Completá tus datos para registrarte</p>

          <label className={styles.label} htmlFor="name">Nombre</label>
          <input className={styles.input} id="name" type="text" placeholder="Tu nombre" />

          <label className={styles.label} htmlFor="email">Email</label>
          <input className={styles.input} id="email" type="email" placeholder="tu@email.com" />

          <label className={styles.label} htmlFor="password">Contraseña</label>
          <input className={styles.input} id="password" type="password" placeholder="••••••••" />

          <Button variant="primary" type="submit">Registrarse</Button>

          <p className={styles.footer}>
            ¿Ya tenés cuenta? <Link to="/login">Iniciá sesión</Link>
          </p>
        </div>
      </section>

      <section 
        className={styles.right}
        style={{ backgroundImage: `url(${planetBg})` }}
      >
        <div className={styles.grid}></div>
        <div className={styles.circleOne}></div>
        <div className={styles.circleTwo}></div>

        <div className={styles.hero}>

          <div className={styles.badge}>✨ Nuevo</div>

          <div className={styles.logo}>
            ARG
          </div>

          <h2>Bienvenido</h2>

          <p>
            Diseñando interfaces modernas
            con React + TypeScript.
          </p>

          <ul className={styles.features}>
            <li>⚡ Rápido y liviano</li>
            <li>🔒 Seguro por diseño</li>
            <li>🎨 UI moderna</li>
          </ul>
        </div>
      </section>

    </main>
  )
}

export default Register
