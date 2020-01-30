import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom';



export class Success extends React.Component {


  render() {
    return (
      <MuiThemeProvider >
        <React.Fragment>
        
            <AppBar title="Success" />
            <h1>Success !!!!!</h1>

            <Link to = '/dashboard'>
            <RaisedButton
              label ="Home"
              primary = {true}
              style = {styles.button}
              variant="contained"
              onClick = {this.home}
            />

            
            </Link>
         
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
	button:{
		margin : 15
	}
}

export default Success;