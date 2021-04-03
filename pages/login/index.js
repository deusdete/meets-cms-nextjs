import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Image from 'next/image'
import { CircularProgress, Paper } from '@material-ui/core';
import { api } from '../../services/api';
import { useRouter } from 'next/router';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      ©{new Date().getFullYear()}{' Meets CRM'}
      <Link color="inherit" href="https://meets.com.br/">
        | Termos e condições | Política de Privacidade
      </Link>{' '}

      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: 'linear-gradient(to bottom, #3797EF 50%, #FFFFFF 50%)',
    minHeight: 800,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    paddingTop: theme.spacing(6),
    textAlign: 'center'
  },
  row: {
    padding: theme.spacing(2),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  buttonSubmit: {
    color: '#fff',
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const router = useRouter()

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [enviado, setEnviado] = useState(false)
  const [errorMensagem, setErrorMensagem] = useState('');

  async function handleLogin(event) {
    event.preventDefault();
    setEnviado(true)
    setErrorMensagem('');

    api.post('/auth', { email, senha }).then(res => {
      console.log(res.data)
      const { error, token } = res.data;

      if (error) {
        setErrorMensagem(error)

      } else {
        api.defaults.headers.Authorization = `Bearer ${token}`

        router.push('/dashboard')
      }

      setEnviado(false)

    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className={classes.main}>
      <Container maxWidth="sm" className={classes.paper}>
        <Image src="/logo/logotipo-meets-ass.svg" height={60} width={200} />
        <Paper elevation={1} className={classes.form}>
          <Grid container className={classes.row} spacing={2}>
            <Grid item xs={12}>
              {errorMensagem && <Typography variant="body2" color="error">{errorMensagem}</Typography>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Login"
                name="email"
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                onChange={e => setSenha(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleLogin}
                className={classes.buttonSubmit}
              >
                {enviado ? <CircularProgress color="secondary" /> : 'ENTRAR'}
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="column" alignContent="center" >
            <Grid item>
              <Link href="/teste-gratis" variant="body2">
                {"Ainda não tem sua conta ? CADASTRE-SE"}
              </Link>
            </Grid>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>

          </Grid>

        </Paper>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>

    </div>

  );
}