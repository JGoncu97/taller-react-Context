import { createContext, useState } from 'react';

export const Worshop = createContext();

export const WorshopProvider = ({ children }) => {
  
  const usersData = [
    { name: 'Juan', lastname: 'Pérez', username: 'juan123' },
    { name: 'Maria', lastname: 'Gómez', username: 'maria456' },
    { name: 'Carlos', lastname: 'Rodríguez', username: 'carlos789' },
  ];

  const [user, setUser] = useState(null);

  const validateUser = (username) => {
  
    const foundUser = usersData.find((u) => u.username.toLowerCase() === username.toLowerCase());

    if (foundUser) {
      setUser(foundUser); 
      
    }else {
        alert('el usuario no existe')
    }
  };

  return (
    <Worshop.Provider value={{ validateUser, user }}>
      {children}
    </Worshop.Provider>
  );
};
