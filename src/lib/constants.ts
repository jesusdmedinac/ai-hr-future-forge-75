const WHATSAPP_NUMBER = "593964222040";

const encodedInfoMessage = encodeURIComponent("Hola, quiero más información sobre el IAthon HR.");
const encodedSignupMessage = encodeURIComponent("¡Hola! Quiero inscribirme en el IAthon HR. ¿Me ayudan con el proceso?");

export const WHATSAPP_LINK_INFO = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedInfoMessage}`;
export const WHATSAPP_LINK_SIGNUP = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedSignupMessage}`;
