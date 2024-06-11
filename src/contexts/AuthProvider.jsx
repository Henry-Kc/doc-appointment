import { createContext, useState } from 'react';

import { supabase } from '../client';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [showPass, setShowPass] = useState('password');
  const [role, setRole] = useState(null);

  const passwordHandler = () => {
    setShowPass(showPass === 'password'? 'text' : 'password');
  };

  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      setToken(data);
      const domain = email.split('@')[1]; // Extract the domain from the email
      if (domain === 'admin.com') {
        setRole('admin');
      } else if (domain === 'doc.com') {
        setRole('doctor');
      } else {
        setRole('user');
      }
    } catch (error) {
      alert(error);
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setToken(false);
      setRole(null);
    } catch (error) {
      alert(error);
    }
  };

  const signup = async (fullName, email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { full_name: fullName } } });
      if (error) throw error;
      alert('Check your email for verification link');
      setToken(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, role, signup, showPass, passwordHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };