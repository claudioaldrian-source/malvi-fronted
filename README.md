# Portal Malvinas - Frontend

Aplicación Frontend desarrollada con React + TypeScript para la administración del Portal Malvinas.

El proyecto implementa autenticación mediante JWT, protección de rutas, panel administrativo, gestión de usuarios, autenticación de dos factores (MFA), diseño responsive y una interfaz moderna inspirada en la identidad visual de Malvinas.

---

# Tecnologías utilizadas

- React 19
- TypeScript
- Vite
- TanStack Router
- CSS Modules
- Fetch API

---

# Funcionalidades

✔ Login de usuarios

✔ Registro de usuarios

✔ Protección de rutas

✔ Dashboard administrativo

✔ Gestión de usuarios

✔ Visualización de datos

✔ Edición de usuarios

✔ Modal reutilizable

✔ MFA (Google Authenticator)

✔ Diseño responsive

✔ Componentes reutilizables

✔ Animaciones CSS

✔ Interfaz temática Portal Malvinas

---

# Instalación

```bash
npm install
```

---

# Ejecutar

```bash
npm run dev
```

Frontend disponible en:

```
http://localhost:5173
```

---

# Arquitectura

```
src
│
├── api
│
├── assets
│   ├── avatars
│   └── backgrounds
│
├── components
│   ├── blocks
│   │   ├── Modal
│   │   └── Sidebar
│   │
│   └── ui
│       ├── Button
│       ├── GenderBadge
│       ├── LocationLink
│       └── ...
│
├── config
│
├── pages
│   ├── Auth
│   ├── Login
│   ├── Register
│   ├── Dashboard
│   ├── Home
│   ├── MFA
│   └── Profile
│
├── store
│
├── styles
│
├── types
│
├── App.tsx
├── main.tsx
└── router.tsx
```

---

# Flujo de autenticación

1. Login mediante email y contraseña.
2. Validación del JWT.
3. Si el usuario posee MFA activo:
   - Solicitud del código de Google Authenticator.
4. Verificación del código.
5. Acceso al Dashboard.
6. Protección automática de rutas privadas.

---

# Componentes principales

- Login
- Register
- Dashboard
- Home
- Modal
- Sidebar
- Button
- GenderBadge
- LocationLink

---

# Características

- Arquitectura modular.
- Componentes reutilizables.
- CSS Modules.
- Navegación mediante TanStack Router.
- Integración con API REST.
- Preparado para escalar.

---

# Estado del proyecto

Proyecto académico en constante evolución.

Actualmente implementa:

- Login.
- Registro.
- Dashboard.
- Gestión de usuarios.
- MFA.
- Diseño Portal Malvinas.
- Integración completa con el Backend.

Próximas funcionalidades:

- Noticias.
- Historia.
- Biblioteca multimedia.
- Perfil del veterano.
- Administración de contenido.
- Panel de estadísticas.