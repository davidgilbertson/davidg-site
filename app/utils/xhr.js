export default function(url) {
    const xhr = new XMLHttpRequest();

    return new Promise((resolve) => {
        xhr.open('GET', url, true);

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4 || xhr.status !== 200) {
                reject({err: 'error'});
            }

            resolve(xhr.responseText);
        };

        xhr.send();
    });
}
