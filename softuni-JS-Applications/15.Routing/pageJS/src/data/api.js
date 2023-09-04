const host = "http://localhost:3030";
async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };
  if (data !== undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }
  try {
    const response = await fetch(host + url, options);
    console.log(host + url);
    if (response.status == 204) {
      //if status == 204 (no content(body)) return without await
      return response;
    }
    const data = await response.json();
    if (!response.ok) {
      // if there is an error, the server adds message to the data json
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    alert(error.message);
    throw error;
  }
}
export const get = request.bind(null, "get");
export const post = request.bind(null, "post");
export const put = request.bind(null, "put");
export const del = request.bind(null, "delete");
