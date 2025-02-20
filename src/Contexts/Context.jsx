import React from 'react';
import { createContext, useEffect, useState } from 'react';


export const Worshop = createContext();

export const WorshopProvider = ({ children }) => {
  
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(60); 

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

  

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <Worshop.Provider value={{ validateUser, user,isRunning, setIsRunning ,time, setTime}}>
      {children}
    </Worshop.Provider>
  );
};
