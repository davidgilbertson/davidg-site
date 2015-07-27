export const isOnServer = (typeof window === 'undefined');
export const isOnClient = (typeof window !== 'undefined' && !!window.document);
export const isWebPack = false;