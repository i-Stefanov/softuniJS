function extract(content) {
  const pattern = /\((.*?)\)/gm;
  const contentText = document.querySelector(`#${content}`).textContent;
  const matches = Array.from(contentText.matchAll(pattern)).map(
    (match) => match[1]
  );
  return matches.join(`; `);
}
