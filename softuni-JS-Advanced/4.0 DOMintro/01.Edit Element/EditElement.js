function editElement(elem, match, replacer) {
  const matcher = new RegExp(match, `g`);
  elem.textContent = elem.textContent.replace(matcher, replacer);
}
