export function saveLocal(key, value) {
    if (typeof localStorage === 'undefined') return false;

    return localStorage.setItem(key, JSON.stringify(value));
}
