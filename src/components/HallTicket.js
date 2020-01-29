import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import FormGroup from '@material-ui/core/FormGroup';
import DatePicker from 'material-ui/DatePicker';
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

export class HallTicket extends Component {


	back = () => {
		this.props.history.push('/dashboard');
	}


	// download = e =>{
	// 	let defaultOptions = {
 //        url:'',
 //        method:'GET',
 //        // mode: 'cors',
 //        headers:{
 //        'content-type': 'application/json',
 //        'accept': 'application/json',
 //        'Authorization' : 'Bearer '+ localStorage.getItem('token')
 //        },
 //        body:null
 //        };

	// 	fetch('https://sih2020backend.herokuapp.com/users/hallticket', defaultOptions).then((res) => {
	// 		console.log(res);
	// 	})
	// }

	download = e => {
		window.open('https://sih2020backend.herokuapp.com/users/hallticket?token=' + localStorage.getItem('token'), '_blank');
	}


    render() {
        return (
            <MuiThemeProvider>
            <React.Fragment>

            <AppBar title="Download HallTicket" />
            <h1> Download your hall ticket by clicking the button below </h1>
			<RaisedButton
              label ="Back"
              primary = {false}
              variant="contained"
              style = {styles.button}
              onClick={this.back}
            />
            <RaisedButton
              label ="Download"
              primary = {true}
              style = {styles.button}
              variant="contained"
              onClick = {this.download}
            />

            </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
	button:{
		margin : 15
	}
}

export default HallTicket
