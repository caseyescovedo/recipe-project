import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../api/users.js';
import { useAuth } from '../contexts/AuthContext.jsx';

export function Login() {
  const [, setToken] = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: () => login({ username, password }),
    onSuccess: (data) => {
      setToken(data.token);
      navigate('/');
    },
    onError: () => alert('failed to login!'),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate();
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '350px',
        margin: '40px auto',
        padding: '32px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        background: '#fafbfc',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
      }}
    >
      <Link
        to="/"
        style={{
          marginBottom: '8px',
          color: '#1976d2',
          textDecoration: 'none',
        }}
      >
        &larr; Back to main page
      </Link>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label htmlFor="create-username" style={{ fontWeight: 500 }}>
          Username:
        </label>
        <input
          type="text"
          name="create-username"
          id="create-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '1rem',
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label htmlFor="create-password" style={{ fontWeight: 500 }}>
          Password:
        </label>
        <input
          type="password"
          name="create-password"
          id="create-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '1rem',
          }}
        />
      </div>
      <input
        type="submit"
        value={loginMutation.isPending ? 'Logging in...' : 'Log In'}
        disabled={!username || !password || loginMutation.isPending}
        style={{
          padding: '10px',
          background: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 600,
          fontSize: '1rem',
          cursor:
            !username || !password || loginMutation.isPending
              ? 'not-allowed'
              : 'pointer',
          opacity: !username || !password || loginMutation.isPending ? 0.6 : 1,
          marginTop: '10px',
        }}
      />
    </form>
  );
}
