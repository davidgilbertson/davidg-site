export default function(url) {
    let xhr = new XMLHttpRequest();

    return new Promise((resolve) => {
        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4 || xhr.status != 200) return;
            return resolve(xhr.responseText);
        };

        xhr.send();
    });
}
