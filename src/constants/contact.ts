/** WhatsApp: +92 318 9587264 (E.164 digits only, no +) */
export const WHATSAPP_E164 = '923189587264';

export const WHATSAPP_CHAT_URL = `https://wa.me/${WHATSAPP_E164}`;

export function whatsappUrlWithMessage(message: string) {
  return `${WHATSAPP_CHAT_URL}?text=${encodeURIComponent(message)}`;
}
