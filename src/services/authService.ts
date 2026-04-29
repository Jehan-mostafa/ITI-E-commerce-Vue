import axios from "axios";

const API_KEY = "AIzaSyCUC0eUm7BxGsshVmccvE9yUcqw1j-UhPw";

const authClient = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
  params: {
    key: API_KEY,
  },
});

export const registerUser = async (email: string, pass: string) => {
  try {
    const response = await authClient.post("/accounts:signUp", {
      email: email,
      password: pass,
      returnSecureToken: true,
    });

    console.log("Response Data:", response.data);
    return response.data; // idToken  & email  & localId
  } catch (error: any) {
    console.error("API Error:", error.response.data.error.message);
    throw error.response.data.error.message;
  }
};
/**!SECTION
 * https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCUC0eUm7BxGsshVmccvE9yUcqw1j-UhPw
 * {
  "email": "gm309861@gmail.com",
  "password": "gehangehan",
  "returnSecureToken": true
}
    
 */
