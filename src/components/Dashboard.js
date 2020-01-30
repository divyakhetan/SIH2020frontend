
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  button:{
    marginLeft: 1750
  }
}));

function lg() {
    return( localStorage.clear())
  }


export default function Dashboard() {




  const classes = useStyles();

  return (
    <MuiThemeProvider>
    <React.Fragment>
   
      <CssBaseline />
      <AppBar position="relative">

        <Toolbar>
          {/* <CameraIcon className={classes.icon} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Dashboard          
             <Link to = "/">
          <RaisedButton
            label ="Logout"
            primary = {true}
            variant="contained"
            onClick = {lg}
            className = {classes.button}     
            />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              STET Exam
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
             An eligibility exam for teachers by the Government of Sikkim.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            
              <Grid item xs={12} sm={6} md={6}>
              <Link to = '/userform'>
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDH3C2a2oRdVlgJ4jzLq79GinnSK9D6KRlbHZaM7ktVur4x_Ql"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Fill Form
                    </Typography>
                  </CardContent>
                  <CardActions>
                      
                  </CardActions>
                </Card>
                </Link>
              </Grid>



              <Grid item xs={12} sm={6} md={6}>
              <Link to = '/hallticket'>
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://lh3.googleusercontent.com/proxy/_MFs6ZYFYUoJbMwO9HPex_pR_cL9S_7Pbf9FXiEfUoVXrSEHcjiaDS7I2bQrCwOWwoeNlDlkuOW9D0WFN-3F"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Download HallTicket
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
                </Link>
              </Grid>


              


              
              <Grid item xs={12} sm={6} md={6}>
              <Link to = '/hallticket'>
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-TkKPOC27KicANELOAjnl0k6EIxQBbAyc11dvFrhcCaJLJ7Ob"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      View Profile
                    </Typography>
                  </CardContent>
                  <CardActions>
                        

                  </CardActions>
                </Card>
                </Link>
              </Grid>


              <Grid item xs={12} sm={6} md={6}>
              <Link to = '/hallticket'>
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="data:image/png;base64,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"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      View Results
                    </Typography>
                  </CardContent>
                  <CardActions>
                       

                  </CardActions>
                </Card>
                </Link>
              </Grid>
            
          </Grid>
        </Container>
      </main>

    
    </React.Fragment>
     </MuiThemeProvider>

  );
}


