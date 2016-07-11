import Promise from 'promise';

export function xhr(url) {
    const xhrRequest = new XMLHttpRequest();

    return new Promise((resolve) => {
        xhrRequest.open('GET', url, true);

        xhrRequest.onreadystatechange = () => {
            if (xhrRequest.readyState !== 4 || xhrRequest.status !== 200) return;

            resolve(xhrRequest.responseText);
        };

        xhrRequest.send();
    });
}
