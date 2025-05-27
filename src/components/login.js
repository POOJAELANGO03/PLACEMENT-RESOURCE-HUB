import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#111827',
    background: 'linear-gradient(135deg, #111827, #1E3A8A)',
    fontFamily: "'Poppins', 'Segoe UI', Roboto, sans-serif",
    overflow: 'hidden',
    position: 'relative'
  },
  card: {
    backgroundColor: 'rgba(30, 41, 59, 0.8)',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    width: '350px',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)'
  },
  title: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#fff',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    letterSpacing: '1px',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '25px',
    fontWeight: '300',
    textAlign: 'center'
  },
  link: {
    color: '#818CF8',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    marginBottom: '16px',
    textAlign: 'left'
  },
  label: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '5px',
    display: 'block'
  },
  input: {
    padding: '12px 15px',
    marginTop: '5px',
    borderRadius: '30px',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(240, 244, 248, 0.9)',
    color: '#000',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    outline: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1) inset',
    width: '100%',
    boxSizing: 'border-box'
  },
  forgotPasswordContainer: {
    textAlign: 'right',
    marginBottom: '20px'
  },
  forgotPassword: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.6)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0'
  },
  buttonContainer: {
    width: '100%'
  },
  button: {
    padding: '12px',
    backgroundColor: '#6366F1',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    outline: 'none',
    width: '100%'
  },
  buttonDisabled: {
    backgroundColor: 'rgba(99, 102, 241, 0.4)',
    cursor: 'not-allowed'
  },
  error: {
    color: '#f8d7da',
    backgroundColor: 'rgba(114, 28, 36, 0.4)',
    border: '1px solid rgba(114, 28, 36, 0.3)',
    padding: '12px',
    borderRadius: '10px',
    marginBottom: '15px',
    fontSize: '15px',
    textAlign: 'center'
  }
};

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const auth = getAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate('/');
    } catch (err) {
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Invalid email or password');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Too many failed login attempts. Please try again later');
      } else {
        setError('Failed to sign in. Please try again.');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    navigate('/reset-password');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome back</h2>
        <p style={styles.subtitle}>
          Don't have an account? <Link to="/register" style={styles.link}>Create account</Link>
        </p>
        
        {error && <div style={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email address</label>
            <input
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          
          <div style={styles.forgotPasswordContainer}>
            <button 
              type="button" 
              onClick={handleForgotPassword} 
              style={styles.forgotPassword}
            >
              Forgot password?
            </button>
          </div>
          
          <div style={styles.buttonContainer}>
            <button 
              type="submit" 
              disabled={loading} 
              style={{
                ...styles.button,
                ...(loading ? styles.buttonDisabled : {})
              }}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;