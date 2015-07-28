export const isOnServer = (typeof window === 'undefined');
export const isOnClient = (typeof window !== 'undefined' && !!window.document);
export const isWebPack = false;

export function saveLocal(key, value) {
    if (typeof localStorage === 'undefined') return false;

    return localStorage.setItem(key, JSON.stringify(value));
}

export function loadLocal(key) {
    if (typeof localStorage === 'undefined') return false;

    let result;

    try {
        result = JSON.parse(localStorage.getItem(key));
    } catch(e) {
        result = false;
    }

    return result;
}