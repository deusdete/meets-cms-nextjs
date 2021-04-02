import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  card:{

    textAlign: 'center',
    padding: 25,
    margin: 10,
    height: 500
  },
  item:{
    padding: 25
  }
}))

export default function Card({src, title, text}) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.card} >
      <Image src={src} width={100} height={100} className={classes.item}  />
      <Typography variant="h6" className={classes.item} >
        {title}
      </Typography>
      <Typography variant="body1" className={classes.item} >
      {text}
      </Typography>
      <Button variant="outlined" >
        Saiba mais
      </Button>
    </Paper>
  )
}