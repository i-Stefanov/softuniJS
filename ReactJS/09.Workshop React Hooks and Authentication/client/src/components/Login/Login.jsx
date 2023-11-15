import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
const LoginFormKeys = {
  Email: "email",
  Password: "password",
};
export default function Login() {
  // Pass the context we want to use in the component to the useContext hook
  const { onLoginSubmit } = useContext(AuthContext);
  // Set initial values for the useForm hook values.The name of the property in he object should match the name of the input element  (name="email",name="password")
  const { values, changeHandler } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    onLoginSubmit
  );
  return (
    <>
      {/* <!-- Login Page ( Only for Guest users ) --> */}
      <section id="login-page" className="auth">
        <form id="login" onSubmit={onLoginSubmit}>
          <div className="container">
            <div className="brand-logo"></div>
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name={LoginFormKeys.Email}
              placeholder="Sokka@gmail.com"
              value={values[LoginFormKeys.Email]}
              onChange={changeHandler}
            />

            <label htmlFor="login-pass">Password:</label>
            <input
              type="password"
              id="login-password"
              name={LoginFormKeys.Password}
              value={values[LoginFormKeys.Password]}
              onChange={changeHandler}
            />
            <input type="submit" className="btn submit" value="Login" />
            <p className="field">
              <span>
                If you don't have profile click <a href="#">here</a>
              </span>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}
