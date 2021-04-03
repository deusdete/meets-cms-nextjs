import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function BreadcrumbsLink() {


  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      <Link color="inherit" href="/dashboard">
        Inicio
      </Link>
      <Typography color="textPrimary">Clientes/Leads</Typography>
    </Breadcrumbs>
  )
}