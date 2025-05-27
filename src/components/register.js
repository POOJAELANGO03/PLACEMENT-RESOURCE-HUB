import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDO020Y-f2skVEHHS2KSQeuXUYJNEDspAE",
  authDomain: "padi-e25ad.firebaseapp.com",
  projectId: "padi-e25ad",
  storageBucket: "padi-e25ad.firebasestorage.app",
  messagingSenderId: "755688669239",
  appId: "1:755688669239:web:1d73fe330d2c9af8053fb2",
  measurementId: "G-QES3YDE3Q5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Password should be at least 6 characters');
      setLoading(false);
      return;
    }
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await updateProfile(userCredential.user, { displayName: formData.name });
      setSuccess(true);
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Email is already in use');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email format');
      } else {
        setError('Failed to register. Please try again.');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Your Account</h2>
        <p style={styles.subtitle}>Already have an account? <a href="/login" style={styles.link}>Sign in</a></p>
        {success && <div style={styles.success}>Registration successful! You can now log in.</div>}
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input style={styles.input} type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input style={styles.input} type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input style={styles.input} type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input style={styles.input} type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
          <button type="submit" style={styles.button} disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
        </form>
      </div>
    </div>
  );
};

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
    textAlign: 'center',
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
    letterSpacing: '1px'
  },
  subtitle: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '25px',
    fontWeight: '300'
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
  input: {
    padding: '12px 15px',
    margin: '10px 0',
    borderRadius: '30px',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    color: '#fff',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    outline: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1) inset'
  },
  button: {
    padding: '12px',
    backgroundColor: '#6366F1',
    color: '#fff',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '30px',
    cursor: 'pointer',
    marginTop: '20px',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    outline: 'none'
  },
  success: {
    color: '#d4edda',
    backgroundColor: 'rgba(21, 87, 36, 0.4)',
    border: '1px solid rgba(21, 87, 36, 0.3)',
    padding: '12px',
    borderRadius: '10px',
    marginBottom: '15px',
    fontSize: '15px'
  },
  error: {
    color: '#f8d7da',
    backgroundColor: 'rgba(114, 28, 36, 0.4)',
    border: '1px solid rgba(114, 28, 36, 0.3)',
    padding: '12px',
    borderRadius: '10px',
    marginBottom: '15px',
    fontSize: '15px'
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
    color: 'rgba(255, 255, 255, 0.5)'
  },
  dividerLine: {
    flex: '1',
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  dividerText: {
    padding: '0 15px',
    fontSize: '14px'
  },
  socialButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '5px'
  },
  socialButton: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  forgotPassword: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'right',
    marginTop: '10px',
    transition: 'all 0.3s ease'
  }
};

export default RegisterPage;