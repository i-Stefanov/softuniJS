import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Register() {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onRegisterSubmit
  );
  return (
    <>
      {/* <!-- Register Page ( Only for Guest users ) --> */}
      <section id="register-page" className="content auth">
        <form id="register" method="POST" onSubmit={onSubmit}>
          <div className="container">
            <div className="brand-logo"></div>
            <h1>Register</h1>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={changeHandler}
              placeholder="maria@email.com"
            />

            <label htmlFor="pass">Password:</label>
            <input
              type="password"
              id="register-password"
              name="password"
              value={values.password}
              onChange={changeHandler}
            />

            <label htmlFor="con-pass">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={changeHandler}
            />

            <input className="btn submit" type="submit" value="Register" />

            <p className="field">
              <span>
                If you already have profile click <Link to="/login">here</Link>
              </span>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}
