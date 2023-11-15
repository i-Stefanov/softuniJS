import { requestFactory } from "./requester";
const baseUrl = "http://localhost:3030/users";

export const authServiceFactory = (token) => {
  const request = requestFactory(token);
  return {
    login: async (userData) => await request.post(`${baseUrl}/login`, userData),
    register: async (userData) =>
      await request.post(`${baseUrl}/register`, userData),
    logout: async () => await request.get(`${baseUrl}/logout`),
  };
};
