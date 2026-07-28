import { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import styles from './Login.module.css'
import Button from '@/components/ui/Button/Button'
import { login } from '@/api/login'
import planetBg from '@/assets/planeta_espejo_vacio.png'


function Login() {
  const navigate = useNavigate()

  // Inputs controlados: React es la fuente de verdad del valor
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault() // Evita que el navegador recargue la página
    setError(null)
    setLoading(true)
    try {
      const data = await login(email, password)
      // Guardamos el token para las futuras peticiones autenticadas
      localStorage.setItem('token', data.token)
localStorage.setItem('role', data.role)
localStorage.setItem('nombre', data.nombre)
localStorage.setItem('apellido', data.apellido)
      navigate({ to: '/' })
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className={styles.container}>

      <section className={styles.left}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Iniciar Sesión</h1>
          <p className={styles.subtitle}>Ingresá tu email y contraseña para continuar</p>

          <label className={styles.label} htmlFor="email">Email</label>
          <input
            className={styles.input}
            id="email"
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className={styles.label} htmlFor="password">Contraseña</label>
          <input
            className={styles.input}
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Mensaje de error que viene del backend */}
          {error && <p className={styles.error}>{error}</p>}

          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? 'Ingresando...' : 'Iniciar Sesión'}
          </Button>  

<p className={styles.footer}>
  ¿No tenés cuenta?{' '}
  <Link to="/register">
    Crear cuenta
  </Link>
</p>
        </form>
      </section>



      <section className={styles.right}>

  <div className={styles.stars}></div>

  <div className={styles.starsGold}></div>

  <div className={styles.grid}></div>

  <img
    src={planetBg}
    alt="Planeta Tierra"
    className={styles.planet}
  />

  <div className={styles.hero}>

    <span className={styles.badge}>
      🛡️ Acceso Seguro
    </span>

    <h2>
      Ya sos parte
      <br />
      de la <span>nueva era</span>
    </h2>

    <p>
      La tecnología evoluciona cada día.
      <br />
      Ingresá y seguí construyendo
      <br />
      el futuro.
    </p>

    <div className={styles.cards}>

      <div className={styles.card}>
        <div className={styles.icon}>🧠</div>

        <div>
          <h3>Inteligencia Artificial</h3>
          <p>Potenciando ideas y creando soluciones.</p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>⚛️</div>

        <div>
          <h3>React + TypeScript</h3>
          <p>Tecnologías modernas y escalables.</p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>🚀</div>

        <div>
          <h3>Desarrollo FullStack</h3>
          <p>Construimos experiencias sin límites.</p>
        </div>
      </div>

    </div>

  </div>

</section>

    </main>
  )
}

export default Login
