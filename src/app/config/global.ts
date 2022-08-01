import { module } from '../interface/general'

export const MODULES = {
  webchat: 'webchat',
  callback: 'callback',
  phonelink: 'phonelink',
  location: 'location',
}

export const MODULES_LIST: module[] = [
  {
    title: 'Chat en linea',
    icon: 'chat',
    module: MODULES.webchat,
  },
  {
    title: 'Prefieres que te llamemos',
    icon: 'phone_callback',
    module: MODULES.callback,
  },
  {
    title: 'Llamanos a nuestra linea',
    icon: 'phonelink_ring',
    module: MODULES.phonelink,
  },
  {
    title: 'Puntos de atencion',
    icon: 'location_on',
    module: MODULES.location,
  },
]

export const MSG_ERROR = {
  required: 'Campo requerido',
  requiredTrue: 'Aceptar las condiciones',
  minlength: 'Minimo reuqerido',
  pattern: 'Formato incorrecto',
  email: 'Email incorrecto',
  compare: 'No son iguales',
}

export const PATTERNS = {
  patternDate: /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
  patternNumber: /^([0-9]*)+$/,
  patternPhone: /^([0-9]{7,20})?$/,
  patternName: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ' ]{3,60}$/,
  patternEmail:
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
  patternQuantities: /^[0-9]+([.][0-9]{1,2})?$/,
}

export const TYPES_IDS = [
  { value: 0, name: 'CC - Cédula de ciudadanía' },
  { value: 1, name: 'CD - Carnet diplomático' },
  { value: 3, name: 'CE - Cédula de extranjería' },
]
export const CONTRYES = [{ name: 'COLOMBIA' }, { name: 'VENEZUELA' }]

export const EMPOINTS = {
  health: 'health-status',
}
