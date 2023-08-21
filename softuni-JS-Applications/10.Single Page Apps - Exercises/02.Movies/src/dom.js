const main = document.querySelector("main");
export function showView(section) {
  main.replaceChildren(section);
}
export function e(type, attributes, ...content) {
  const res = document.createElement(type);

  for (let [attr, value] of Object.entries(attributes || {})) {
    if (attr.substring(0, 2) == "on") {
      res.addEventListener(attr.substring(2).toLowerCase(), value);
    } else {
      res[attr] = value;
    }
  }
  // if the content is nested array this line makes it FLAT
  content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

  content.forEach((e) => {
    if (typeof e == "string" || typeof e == "number") {
      const node = document.createTextNode(e);
      res.appendChild(node);
    } else {
      res.appendChild(e);
    }
  });

  return res;
}
