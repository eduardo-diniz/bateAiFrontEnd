import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userCpfOrCnpj, setUserCpfOrCnpj] = useState(null);
  
    const login = (newToken, cpfOuCnpj) => {
      setToken(newToken);
      setUserCpfOrCnpj(cpfOuCnpj);
    };
  
    const logout = () => {
      setToken(null);
      setUserCpfOrCnpj(null);
    };
  
    return (
      <AuthContext.Provider value={{ token, userCpfOrCnpj, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  