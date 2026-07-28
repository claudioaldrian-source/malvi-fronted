import persona1 from '@/assets/avatars/persona1.png'
import persona2 from '@/assets/avatars/persona2.png'
import persona3 from '@/assets/avatars/persona3.png'

export const avatars: Record<string, string> = {
  'admin1@gmail.com': persona1,
  'admin2@gmail.com': persona2,
  'guest1@gmail.com': persona3,

  // Por ahora reutilizamos imágenes
  'guest2@gmail.com': persona1,
  'root1@gmail.com': persona2,
  'root2@gmail.com': persona3,
  'user1@gmail.com': persona1,
  'user2@gmail.com': persona2,
}