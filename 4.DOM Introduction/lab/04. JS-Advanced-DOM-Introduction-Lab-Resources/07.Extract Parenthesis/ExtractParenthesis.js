function extract(content) {
    let contentElement = document.getElementById(content);

    let pattern = /\(([^(]+)\)/g;

    let resultMatches = contentElement.textContent.matchAll(pattern);
    let result = [];
    for (const match of resultMatches) {
        result.push(match[1]);
    }
    return result.join('; ')
}   