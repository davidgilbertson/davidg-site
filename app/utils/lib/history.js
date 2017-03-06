const onChangeListeners = [];

function push(pathname) {
    window.history.pushState({}, '', pathname);

    onChangeListeners.forEach(callback => callback(pathname));
}

export default {
    push,
    onChange: cb => onChangeListeners.push(cb),
};
