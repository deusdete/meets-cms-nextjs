
import { useState } from "react";

import Image from 'next/image'

import { Button, Checkbox, CircularProgress, Container, Divider, FormControl, FormControlLabel, Grid, InputLabel, Link, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/47543-congratulation.json'
import { api } from "../../services/api";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: 'center',
    padding: '64px 0 32px'
  },
  text: {
    padding: 5,
    color: '#fff'
  },
  container: {
    backgroundImage: 'linear-gradient(to bottom, #3797EF 50%, #FFFFFF 50%)',
    minHeight: 800
  },
  form: {
    backgroundColor: '#fff'
  },
  row: {
    padding: 35
  },
  button: {
    height: 56,
    color: '#fff'
  },
  buttonSubmit: {
    color: '#fff'
  },
  displayValue: {
    height: 56,
    width: '100%',
    minWidth: 200,
    fontSize: 20,
    alignItems: 'center',


    border: '0.5px solid #bfbcbc'
  },
  value: {
    textAlign: 'center',
    marginTop: 8,
  }
}))

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default function TesteGratis() {
  const classes = useStyles();


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('')
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmSenha] = useState('')
  const [quantUsuarios, setQuantUsuarios] = useState(1)
  const [aceito, setAceito] = useState(false)

  const [enviado, setEnviado] = useState(false)
  const [errorMensagem, setErrorMensagem] = useState(null);
  const [sucesso, setSucesso] = useState(false)

  function handleQuantUsuario(event, type) {
    event.preventDefault();

    if (type === 'add') {
      setQuantUsuarios(quantUsuarios + 1)
    } else {
      if (quantUsuarios > 1) {
        setQuantUsuarios(quantUsuarios - 1)
      }
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setEnviado(true);
    setErrorMensagem(null)

    const data = {
      nome,
      email,
      celular,
      senha,
      qtde_usuarios: quantUsuarios,
      aceito
    }

    api.post('/cadastro_site', data).then(res => {
      console.log(res.data)
      const { errors } = res.data;

      if (errors) {
        setErrorMensagem(errors[0])
      } else {
        setSucesso(true)
      }

      setEnviado(false)
    }).catch(err => {
      console.log(err)
      setErrorMensagem({
        info: "Falha ao criar seu cadastro"
      })
      setEnviado(false)
    })
  }

  return (
    <div className={classes.container}>
      <Container>
        <Grid className={classes.header}>
          <Image src="/logo/logotipo-meets-ass.svg" height={30} width={100} />
          <Typography variant="h4" className={classes.text}  >
            Faça seu cadastro e comece agora mesmo!
        </Typography>
          <Typography variant="h5" className={classes.text}>
            Preencha os campos abaixo e inicie seu período de testes por 15 dias gratuitos.
        </Typography>
          <Typography variant="body1" className={classes.text}>
            Você não precisa dar nenhuma informação de pagamento agora. Caso você não deseje realizar a assinatura, ao final do período, ela será cancelada automaticamente.
        </Typography>
        </Grid>
        {sucesso ? (
          <Paper elevation={1} className={classes.form}>
            <Grid container className={classes.row} spacing={2}>
              <Grid item xs={12} sm={6}>
                <Grid item xs={12}>
                  <Typography variant="h4"  >
                    Parabéns
                </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" >
                    Preencha os campos abaixo e inicie seu período de testes por 15 dias gratuitos.
                </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Link href="/dashboard">Clique aqui para acessar o Meets</Link>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Lottie
                  width={300}
                  height={200}
                  options={defaultOptions}
                />
              </Grid>
            </Grid>


          </Paper>
        ) :
          (<Paper elevation={1} className={classes.form}>
            <Grid container className={classes.row} spacing={2}>
            <Grid item xs={12}>
              {errorMensagem &&  errorMensagem.info && <Typography variant="body2" color="error">{errorMensagem.info}</Typography>}
            </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                  <TextField
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    label="Nome pessoal ou Empresa"
                    error={errorMensagem && errorMensagem.source.pointer === 'nome' ? true : false}
                    helperText={errorMensagem && errorMensagem.source.pointer === 'nome' ? errorMensagem.detail : ''}
                    variant="outlined" />
                </FormControl>

              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                  <TextField
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    label="Email"
                    error={errorMensagem && errorMensagem.source.pointer === 'email' ? true : false}
                    helperText={errorMensagem && errorMensagem.source.pointer === 'email' ? errorMensagem.detail : ''}
                    variant="outlined" />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                  <TextField
                    value={celular}
                    onChange={e => setCelular(e.target.value)}
                    label="Celular"
                    error={errorMensagem && errorMensagem.source.pointer === 'celular' ? true : false}
                    helperText={errorMensagem && errorMensagem.source.pointer === 'celular' ? errorMensagem.detail : ''}
                    variant="outlined" />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                  <TextField
                    onChange={e => setSenha(e.target.value)}
                    label="Senha (mínimo de 6 caracteres)"
                    type="password"
                    autoComplete="current-password"
                    error={errorMensagem && errorMensagem.source.pointer === 'senha' ? true : false}
                    helperText={errorMensagem  && errorMensagem.source.pointer === 'senha' ? errorMensagem.detail : ''}
                    variant="outlined" />
                </FormControl>

              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                  <TextField
                    onChange={e => setConfirmSenha(e.target.value)}
                    label="Confima senha"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined" />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className={classes.row} direction="column" alignContent="center">
              <Grid item xs={12} sm={4}>
                <div style={{ display: 'flex', direction: 'row' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={e => handleQuantUsuario(e, 'sub')}>
                    <RemoveIcon />
                  </Button>
                  <div className={classes.displayValue}>
                    <Typography variant="h4" className={classes.value}>{quantUsuarios}</Typography>
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={e => handleQuantUsuario(e, 'add')}>
                    <AddIcon />
                  </Button>

                </div>
              </Grid>
              <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
                <Checkbox
                  checked={aceito}
                  onChange={() => setAceito(!aceito)}
                  name="checkedB"
                  color="primary"
                />
              Li e aceito os <Link href="#">termos de uso.</Link>
              </Grid>
            </Grid>
            <Divider />

            <Grid container className={classes.row} direction="column" alignContent="center">
              <Button
                disabled={!aceito}
                onClick={handleSubmit}
                variant="contained"
                size="large"
                color="primary"
                className={classes.buttonSubmit}>
                {enviado ? <CircularProgress color="secondary" /> : 'Começar agora'}
              </Button>
            </Grid>
          </Paper>)}

      </Container>
    </div>

  )
}