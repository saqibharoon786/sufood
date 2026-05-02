/** WhatsApp: +92 316 5757901 (E.164 digits only, no +) */
export const WHATSAPP_E164 = '923165757901';

export const WHATSAPP_CHAT_URL = `https://wa.me/${WHATSAPP_E164}`;

export function whatsappUrlWithMessage(message: string) {
  return `${WHATSAPP_CHAT_URL}?text=${encodeURIComponent(message)}`;
}
