import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Image from 'next/image'
import { Container, CssBaseline, Grid, Link } from '@material-ui/core';
import Card from '../components/funcionalidades/card';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>

          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <Image src="/logo/meets.png" height={30} width={100} />
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              HOME
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              INTEGRAÇÕES
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              PLANOS
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              BLOG
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              SUPORTE
            </Link>
          </nav>
          <Button href="/login" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" >
        <Grid container alignItems="center" justifyContent="center" spacing={5} style={{ marginTop: 50 }} >
          <Grid item xs={12} md={6}>
            <Typography variant="h3" style={{ marginBottom: 25 }} >
              Simplifique e aumente suas vendas com Meets CRM
            </Typography>
            <Typography variant="body1" style={{ marginBottom: 25 }} >
              Torne suas vendas mais simples e práticas. Acompanhe as atividades certas a serem realizadas. Gestão de leads sem esforço enquanto aumenta sua taxa de conversão de vendas.
            </Typography>
            <Button variant="contained" color="primary" >
              TESTE GRÁTIS
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image src="/images/white-label-meets-1.png" width={550} height={452} />
          </Grid>
        </Grid>

        <Grid container alignItems="center" justifyContent="center" spacing={5} style={{ marginTop: 50 }} >
          <Grid item xs={12} md={4}>
            <Image src="/images/meetszap-1.png" width={348} height={298} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" style={{ marginBottom: 25 }} >
              Novo! Whatsapp para empresas:
              Um número, vários atendentes.
            </Typography>
            <Typography variant="body1" style={{ marginBottom: 25 }} >
              Concentre todos os atendimentos do Whatsapp num único lugar totalmente integrado. Realize seus atendimentos do WhatsApp e Facebook diretamente pelo Meets aproveitando toda a inteligência de um dos melhores CRM’s do Brasil.
            </Typography>
            <Button variant="outlined" color="primary" >
              SAIBA MAIS
            </Button>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" spacing={5} style={{ marginTop: 50, paddingBottom: 100 }} >
          <Grid item xs={12} style={{ textAlign: 'center', padding: 25 }} >
            <Typography variant="h3">Funcionalidades</Typography>
            <Typography variant="body1">Conheça mais sobre o Meets CRM</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              src="/images/oportunidades_1.png"
              title="Oportunidades"
              text="Conheça como gerir suas oportunidades de Vendas e Negócios de uma forma simples, rápida e organizada."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              src="/images/atendimento_1.png"
              title="Atendimento"
              text="Tenha maior controle sobre suas propostas e nunca mais esqueça o que você tratou da última vez que falou com o seu cliente."
            />

          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              src="/images/atividade-1.png"
              title="Atividades"
              text="Gerencie as atividades e lembretes para facilitar o seu trabalho diário e de sua equipe. Seja lembrado pelo Meets através de e-mails e notificações no seu celular."
            />

          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              src="/images/funil_1.png"
              title="Funil de Vendas"
              text="Aumente seus resultados criando múltiplos funis de atendimento e vendas. Organize de forma padrão para você e sua equipe."
            />
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Image src="/images/meets-dashboard-1-1024x583.png" width={1232} height={750} />
        </Grid>

        <Grid container alignItems="center" justifyContent="center" spacing={5} style={{ marginTop: 50 }} >
          <Grid item xs={12} md={6}>
            <Image src="/images/mockup.png" width={436} height={361} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" style={{ marginBottom: 25 }} >
              Leve o Meets aonde você for
            </Typography>
            <Typography variant="body1" style={{ marginBottom: 25 }} >
              Mobilidade, controle e informações na palma de sua mão. Baixe agora mesmo o nosso aplicativo e tenha seus dados sempre em mãos. Versão para iOS e Android.
            </Typography>
            <Grid item>
              <Image src="/images/android-download-png.png" width={144} height={42} />
              <Image src="/images/download_AppleStore.png" width={144} height={42} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment >
  )
}
