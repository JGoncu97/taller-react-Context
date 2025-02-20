import React, { useContext, useEffect, useState } from 'react';
import { Worshop } from '../../Contexts/Context';
import './Welcome.css';

export const Welcome = () => {
  const { validateUser, user } = useContext(Worshop);
  const [users, setUser] = useState({ name: '', lastname: '', username: '' });

  const onSubmit = (event) => {
    event.preventDefault();
   
    
    validateUser(users.username.toLowerCase()); 
    console.log({user});
    
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value, 
    }));
  };

  return (
    <header className='containerFather'>
      <h1>Bienvenido {user ? `${user.username}` : 'Usuario'}</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label>¿Cuál es su nombre?</label>
          <input 
            type="text"  
            name="name" 
            value={users.name} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>¿Cuál es su apellido?</label>
          <input 
            type="text"  
            name="lastname"
            value={users.lastname} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>¿Cuál es su username?</label>
          <input 
            type="text"  
            name="username"
            value={users.username} 
            onChange={handleChange} 
          />
        </div>

        <button type="submit">
          Buscar Nombre
        </button>
      </form>
    </header>
  );
};
