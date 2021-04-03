import React, { useEffect, useState } from 'react';
import LayoutAdmin from '../../components/admin/layout'
import BreadcrumbsLink from '../../components/breadcrumbsLink';
import { api } from '../../services/api';

function Dashboard() {

  const [titulo, setTitulo] = useState('')
  useEffect(() => {
    async function obterInfo() {
      api.get('/').then(res => {
        console.log(res.data)
        setTitulo(res.data.greeting)
      }).catch(err => {
        console.log(err)
      })
    }

    obterInfo()
  }, [])
  return (
   <LayoutAdmin>
     <BreadcrumbsLink/>
   </LayoutAdmin>
  );
}

export default Dashboard;