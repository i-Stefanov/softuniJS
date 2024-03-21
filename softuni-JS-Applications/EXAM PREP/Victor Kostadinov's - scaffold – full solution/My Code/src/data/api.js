import { clearUserData, getUserData } from "../util.js";

const host = "http://localhost:3030";

export async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  const userData = getUserData();

  if (userData) {
    const token = userData.accessToken;
    options.headers["X-Authorization"] = token;
  }

  if (data !== undefined) {
    options.headers["Content-type"] = "application/json";
    options.body = JSON.stringify(data);
  }
  try {
    const response = await fetch(host + url, options);

    let result;
    if (response.status != 204) {
      result = await response.json();
    }

    if (response.ok == false) {
      // status code 403 - means that the server has been restarted so the user data should be deleted and the user should login again
      if (response.status == 403) {
        clearUserData();
      }
      // if the response is not ok then the result will be the error that the server returns
      const err = result;
      throw err;
    }
    return result;
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

// export the request method with fixed method

export const get = request.bind(null, "get");
export const post = request.bind(null, "post");
export const put = request.bind(null, "put");
export const del = request.bind(null, "delete");
