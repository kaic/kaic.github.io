export const WHATSAPP_NUMBER = '5511980205003';

export const DEFAULT_WA_MESSAGE =
  'Olá, Kaic! Conheci a Kaic Systems pelo site e gostaria de conversar sobre a presença digital da minha empresa.';

export const CONTACT_EMAIL = 'me@kaic.me';

export const CNPJ = '63.925.829/0001-15';

export const SITE_URL = 'https://kaic.me';

export const SITES_URL = 'https://kaic.me/sites';

export const waLink = (message: string = DEFAULT_WA_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
