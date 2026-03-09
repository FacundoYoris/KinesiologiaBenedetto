export const INSTAGRAM_URL = 'https://www.instagram.com/kine.leobendetto/'

export const WHATSAPP_PHONE_INTL = '5493424321136'

export const WHATSAPP_MESSAGE =
  'Hola Leonardo, quisiera consultar por turnos disponibles de kinesiología.'

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE_INTL}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`

export const PHONE_DISPLAY = '+54 9 342 432-1136'

const mapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

export const MAPS_FIK_URL = mapsSearch(
  'FIK - Espacio de Salud, Necochea 6209, Santa Fe, Santa Fe, Argentina',
)

export const MAPS_KINAB_URL = mapsSearch(
  'KinAB, Pedro Ferre 2119, Santa Fe, Santa Fe, Argentina',
)
