const baseUrl = "http://localhost:3005/api/users";
export const getAll = async () => {
  const response = await fetch(baseUrl);
  const result = await response.json();
  return result.users;
};
export const getUser = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`);
  const result = await response.json();
  return result.user;
};
export const create = async (userData) => {
  // the data sent to the server should be in specific format so it needs to be modified
  // take the country, city, address and addressNumber from the userdata and add the rest of the key-value pairs to an object called data
  const { country, city, street, streetNumber, ...data } = userData;
  // add new key address to the data object with value another object with ey value pairs  country:country, city:city, address:address, addressNumber:addressNumber
  data.address = { country, city, street, streetNumber };
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result.user;
};
const update = async (userData) => {
  const { country, city, street, streetNumber, ...data } = userData;
  // add new key address to the data object with value another object with ey value pairs  country:country, city:city, address:address, addressNumber:addressNumber
  data.address = { country, city, street, streetNumber };
  const response = await fetch(baseUrl, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result.user;
};
export const del = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
  const result = await response.json();
  return result;
};
