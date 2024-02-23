// using currying 'a function returning another function that takes the second parameter'
export function renderTemplate(templateAsString) {
  const pattern = /{{(.+?)}}/gm;
  return (data) => {
    return templateAsString.replace(pattern, (match, propName) => {
      return data[propName];
    });
  };
}

/*
export function renderTemplate(templateAsString, data) {
  const pattern = /{{(.+?)}}/gm;
  return templateAsString.replace(pattern, (match, propName) => {
    return data[propName];
  });
}
*/
