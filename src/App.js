
import { makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useEffect, useState } from 'react';
const useStyles = makeStyles({
  root: {
    width: 345,
    background: 'rgba(255,255,255,0.5)',

  },
  Applogo: {
    zIndex: -1
  },
  App: {
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    position: 'relative',

  },
  search: {
    position: "absolute",
    bottom: "5em",
    right: "50em",
    borderRadius: '1.5em',
    color: 'white',
    textTransform: 'uppercase',
    padding: '1em 1.5em'
  },
  like: {
    background: '#007bff'
  },
  dislike: {
    background: '#ffc107'
  },
  media: {
    height: 140,
  },
});


function App() {

  const classes = useStyles();
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [voto, setVoto] = useState(false);
  const [total, setTotal] = useState(0);
  let domi
  function setVotoLike(select){
    if(select==1){
      setLike(like+1)
      setVoto(true)
      setTotal(total+1)
    }else{
      setDislike(dislike+1)
      setVoto(true)
      setTotal(total+1)
    }

  }
 
  let card_select = ()=> {

    if (voto == false) {
      domi = (<Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Dinos tu opinion
            <p >Iron Man</p>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Da clic en me gusta o en no me gusta sobre iron man
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid xs={6} className={classes.like}>
            <Button onClick={() => setVotoLike(1)} size="small" color="primary">
              <ThumbUpIcon></ThumbUpIcon>
            </Button>
          </Grid>
          <Grid xs={6} className={classes.dislike}>
            <Button onClick={() => setVotoLike(2)} size="small" color="warning">
              <ThumbDownAltIcon></ThumbDownAltIcon>
            </Button>
          </Grid>

        </CardActions>
      </Card>)
    }else{
      domi = (<Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Dinos tu opinion
            <p >Iron Man</p>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Gracias por votar
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
       <Grid xs={12}>
            <Button onClick={() => setVoto(false)} size="small" color="primary">
              Volver a botar
            </Button>
            </Grid>
 
        

        </CardActions>
      </Card>)
    }
  }
  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    data()
    

  });

  card_select()

  let data = () => {

  }

  return (
    <div className={classes.App}>

      <img src="iron_man.jpg" className={classes.Applogo} alt="logo" />
      <div className={classes.search}>
        {domi}
        <ProgressBar>
          <ProgressBar striped variant="primary" now={(like/total)*100} key={1} label={`${parseInt((like/total)*100)}%`}/>
          <ProgressBar variant="warning" now={(dislike/total)*100} key={2} label={`${parseInt((dislike/total)*100)}%`}/>

        </ProgressBar>
      </div>

    </div>
  );
}

export default App;
