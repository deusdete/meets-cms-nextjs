import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

function Dashboard() {

  const [titulo, setTitulo] = useState('')
  useEffect(() => {
    async function obterInfo() {
      api.get('/').then(res => {
        console.log(res.data)
        setTitulo(res.data.greeting)
      })
    }

    obterInfo()
  }, [])
  return (
   <div>
      <h1>Dashbaord</h1>
      <p>API retornou: {titulo}</p>
   </div>
  );
}

export default Dashboard;