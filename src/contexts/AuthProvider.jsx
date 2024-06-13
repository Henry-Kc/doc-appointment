import { createContext, useState, useEffect, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { supabase } from '../client';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState(false);
  const [showPass, setShowPass] = useState('password');
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const setToken = (token) => {
    sessionStorage.setItem('token', JSON.stringify(token));
    setTokenState(token);
  };


  const passwordHandler = () => {
    setShowPass(showPass === 'password' ? 'text' : 'password');
  };

  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      console.log(data)
      setToken(data);
      const domain = email.split('@')[1]; // Extract the domain from the email
      if (domain === 'admin.com') {
        setRole('admin');
        navigate('/admin/dashboard');
      } else if (domain === 'doc.com') {
        setRole('doctor');
        navigate('/doctor/dashboard');
        
      } else {
        setRole('user');
        navigate('/user/dashboard');
      }
      
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Error signing in. Please try again.');
    }
  };
  
  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setTokenState(false);
      setRole(null);
      sessionStorage.removeItem('token')
      navigate('/login')

    } catch (error) {
      alert(error);
    }
  };

  const signup = async (fullName, email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email,
          password,
          options: {
            data: {
              full_name: fullName
            }
          }
        }
      )
      if (error) throw error;
      console.log('Signup successful:', data);
      alert('Check your email for verification link');
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up. Please try again.');

    }
  };
  useEffect(() => {
    if (token) {
      sessionStorage.setItem('token', JSON.stringify(token));
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, logout, role, signup, showPass, passwordHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };