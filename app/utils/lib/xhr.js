import Promise from 'promise';

export default function(url) {
    const xhr = new XMLHttpRequest();

    return new Promise((resolve) => {
        xhr.open('GET', url, true);

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4 || xhr.status !== 200) return;

            resolve(xhr.responseText);
        };

        xhr.send();
    });
}
