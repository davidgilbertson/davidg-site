export default function loadLocal(key) {
    if (typeof localStorage === 'undefined') return false;

    let result;

    try {
        result = JSON.parse(localStorage.getItem(key));
    } catch (e) {
        result = false;
    }

    return result;
}
