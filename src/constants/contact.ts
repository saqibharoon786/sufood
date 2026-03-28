/** WhatsApp: +92 334 5060706 (E.164 digits only, no +) */
export const WHATSAPP_E164 = '923345060706';

export const WHATSAPP_CHAT_URL = `https://wa.me/${WHATSAPP_E164}`;

export function whatsappUrlWithMessage(message: string) {
  return `${WHATSAPP_CHAT_URL}?text=${encodeURIComponent(message)}`;
}
