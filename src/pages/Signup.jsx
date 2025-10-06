import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../api/users.js';

export function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signupMutation = useMutation({
    mutationFn: () => signup({ username, password }),
    onSuccess: () => navigate('/login'),
    onError: () => alert('failed to sign up!'),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signupMutation.mutate();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-8 bg-white rounded shadow space-y-6"
    >
      <Link to="/" className="text-blue-600 hover:underline text-sm">
        Back to main page
      </Link>
      <hr />
      <div>
        <label
          htmlFor="create-username"
          className="block text-gray-700 font-semibold mb-2"
        >
          Username:
        </label>
        <input
          type="text"
          name="create-username"
          id="create-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>
      <div>
        <label
          htmlFor="create-password"
          className="block text-gray-700 font-semibold mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          name="create-password"
          id="create-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>
      <input
        type="submit"
        value={signupMutation.isPending ? 'Signing up...' : 'Sign Up'}
        disabled={!username || !password || signupMutation.isPending}
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 disabled:opacity-50 transition"
      />
    </form>
  );
}
