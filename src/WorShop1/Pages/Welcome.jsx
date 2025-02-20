import React, { useContext, useEffect, useState } from 'react';
import { Worshop } from '../../Contexts/Context';


export const Welcome = () => {
  const { validateUser, user } = useContext(Worshop);
  const [users, setUser] = useState({ name: '', lastname: '', username: '' });

  const onSubmit = (event) => {
    event.preventDefault();
   
    
    validateUser(users.username.toLowerCase()); 
    setUser({ name: '', lastname: '', username: '' });
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value, 
    }));
  };

  return (
    <header className='w-80 h-80 bg-indigo-900 rounded-xl p-8 text-white'>
      <h1 className="text-3xl" >Bienvenido {user ? `${user.username}` : 'Usuario'}</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label>¿Cuál es su nombre?</label>
          <input 
            type="text"  
            name="name" 
            className='border border-black bg-white text-black rounded-lg mt-1 ml-9 px-2 py-1'
            value={users.name} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>¿Cuál es su apellido?</label>
          <input 
            type="text"  
            name="lastname"
            className='border border-black bg-white text-black rounded-lg mt-1 ml-9 px-2 py-1'
            value={users.lastname} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>¿Cuál es su username?</label>
          <input 
            type="text"  
            name="username"
            className='border border-black bg-white text-black rounded-lg mt-1 ml-9 px-2 py-1'
            value={users.username} 
            onChange={handleChange} 
          />
        </div>

        <button type="submit" 
        className='bg-white text-black border border-black rounded-lg mt-4 ml-17 px-2 py-1'>
          Buscar Nombre
        </button>
      </form>
    </header>
  );
};
