
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
                    image="data:image/jpeg;base64,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"
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
              <Link to = '/profile'>
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


