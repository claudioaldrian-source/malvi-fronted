import { API_URL } from '@/config/globals'
import type { User } from '@/api/types'

// ------------------------------------------------------------
// GET /users → devuelve la lista de usuarios
// Es una ruta protegida: hay que mandar el token del login
// ------------------------------------------------------------
export async function getUsers(): Promise<User[]> {
  // El token guardado en el login prueba quiénes somos
  const token = localStorage.getItem('token')

 const response = await fetch(`${API_URL}/users`, {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

console.log("STATUS:", response.status);

const body = await response.json();

console.log("BODY:", body);

if (!body.success) {
  throw new Error(body.message);
}

return body.data;
}