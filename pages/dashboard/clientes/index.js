import { Button, ButtonGroup, createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import LayoutAdmin from '../../../components/admin/layout'
import BreadcrumbsLink from '../../../components/breadcrumbsLink';

import { api } from '../../../services/api';
import { Delete, Add } from '@material-ui/icons';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00aeed',
    },
    secondary: {
      main: '#00C851',
    },
  },
});

function Clientes() {

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
      <BreadcrumbsLink />
      <Grid container justify="space-between" direction="row">
        <Grid item>
          <ThemeProvider theme={theme}>
            <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group">
              <Button
                startIcon={<Add />}
              >
                Cadastrar
            </Button>
              <Button
                color="primary"
                startIcon={<Delete />}
              >
                Apagar
            </Button>
              <Button
                color="primary"
              >
                Lote em ação
              </Button>
            </ButtonGroup>
          </ThemeProvider>

        </Grid>
        <Grid item>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </LayoutAdmin>
  );
}

export default Clientes;