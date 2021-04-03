import { Button, Checkbox, Container, Divider, FormControl, FormControlLabel, Grid, InputLabel, Link, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Image from 'next/image'
import { useState } from "react";

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
    backgroundImage: 'linear-gradient(to bottom, #3797EF 50%, #FFFFFF 50%)'
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
  quantInput: {
    color: '#000',
    fontSize: 26,
    textAlign: 'center'
  },
  displayValue: {
    height: 56,
    width: '100%',
    minWidth: 200,
    fontSize: 20,
    alignItems: 'center',
    
    
    border: '0.5px solid #bfbcbc'
  },
  value:{
    textAlign: 'center',
    marginTop: 8,
  }
}))


export default function TesteGratis() {
  const classes = useStyles()

  const [quantUsuarios, setQuantUsuarios] = useState(1)

  function handleQuantUsuario() {

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

        <Paper elevation={1} className={classes.form}>
          <Grid container className={classes.row} spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth>
                <TextField label="Nome pessoal ou Empresa" variant="outlined" />
              </FormControl>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth>
                <TextField label="Email" variant="outlined" />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth>
                <TextField label="Celular" variant="outlined" />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth>
                <TextField
                  label="Senha (mínimo de 6 caracteres)"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined" />
              </FormControl>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth>
                <TextField
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
                  onClick={handleQuantUsuario}>
                  <AddIcon />
                </Button>
                <div className={classes.displayValue}>
                 <Typography variant="h4" className={classes.value}>{quantUsuarios}</Typography>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={handleQuantUsuario}>
                  <RemoveIcon />
                </Button>
              </div>
            </Grid>
            <Grid item={12} sm={4} style={{ textAlign: 'center' }}>
              <Checkbox
                checked={true}
                name="checkedB"
                color="primary"
              />
              <Link href="#">Li e aceito os termos de uso.</Link>
            </Grid>
          </Grid>
          <Divider />

          <Grid container className={classes.row} direction="column" alignContent="center">
            <Button variant="contained" size="large" color="primary" className={classes.buttonSubmit}>
              Começar agora
            </Button>
          </Grid>
        </Paper>

      </Container>
    </div>

  )
}