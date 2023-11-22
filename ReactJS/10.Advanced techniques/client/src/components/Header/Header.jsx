import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
export default function Header() {
  const { isAuthenticated, userEmail } = useContext(AuthContext);
  return (
    <header>
      {/* <!-- Navigation --> */}
      <h1>
        {/* href = 'to' in the Link elements */}
        <Link className="home" to="/">
          GamesPlay
        </Link>
      </h1>
      <nav>
        <Link to="/catalog">All games</Link>
        {/* <!-- Logged-in users --> */}
        {isAuthenticated && (
          <div id="user">
            <Link to="/create-game">Create Game</Link>
            <Link to="/logout">Logout</Link>
            <p>{userEmail.split("@")[0]}</p>
          </div>
        )}

        {/* <!-- Guest users --> */}
        {!isAuthenticated && (
          <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
