import { Link } from 'react-router-dom';
import { User } from './User.jsx';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../contexts/AuthContext.jsx';
export function Header() {
  const [token, setToken] = useAuth();
  if (token) {
    const { sub } = jwtDecode(token);
    return (
      <div>
        Logged in as <User id={sub} />
        <br />
        <button
          onClick={() => setToken(null)}
          className="mt-2 px-4 py-2 underline text-blue-600 bg-transparent rounded hover:text-blue-800 transition"
          style={{ border: 'none', background: 'none', cursor: 'pointer' }}
        >
          Logout
        </button>
        <Link
          to="/dashboard"
          className="ml-4 text-blue-600 underline hover:text-blue-800"
        >
          Dashboard
        </Link>
      </div>
    );
  }
  return (
    <div className="border border-gray-300 rounded p-4">
      <Link to="/login" className="text-blue-600 underline hover:text-blue-800">
        Log In
      </Link>
      |
      <Link
        to="/signup"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Sign Up
      </Link>
    </div>
  );
}
