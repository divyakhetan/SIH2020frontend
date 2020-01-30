import React, { Component } from 'react'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List'
import {Link} from 'react-router-dom';



export class Profile extends Component {
	state = {
    step: 1,
      salutation:'',
      firstName: '',
      lastName: '',
      fathersFirstName: '',
      fathersLastName: '',
      mothersFirstName: '',
      mothersLastName: '',
      dob:'',
      district:'',
      state:'',
      zipcode:'',
      email: '',
      phno:'',
      photourl:'',

  };


  	componentDidMount = () => {
  		console.log("hi")
  		axios.get('https://sih2020backend.herokuapp.com/users/profile', {
  			headers : { 'Authorization' : 'Bearer '+ localStorage.getItem('token') }
  		}).then((res) => {
  			console.log(res.data.user);
  			// return res.json();
  			this.setState({
  				salutation: res.data.user.name.salutation,
  				firstName : res.data.user.name.firstName,
  				lastName : res.data.user.name.lastName,  
  				fathersFirstName : res.data.user.fathersName.firstName,
  				fathersLastName : res.data.user.fathersName.lastName,
  				mothersFirstName :res.data.user.mothersName.firstName,
  				mothersLastName :res.data.user.mothersName.lastName,
  				dob : res.data.user.dob,
  				district : res.data.user.address.district,
  				state : res.data.user.address.state,
  				zipcode : res.data.user.address.zipcode,
  				email : res.data.user.email,
  				phno : res.data.user.phno,
  				photourl : res.data.user.photoUrl

  			})
  		});
  	}

    render() {
    	const { firstName, lastName, salutation,fathersFirstName,fathersLastName,mothersFirstName,mothersLastName,dob,streetAdress,streetAdress2,district,state,zipcode,email,phno, photourl} = this.state;

        return (
        <MuiThemeProvider >
        <React.Fragment>
     
        
            <AppBar title="Profile" />
        	<img 
		      src={photourl}
		      alt="new"
		      />
 

            <List>
            <ListItem
             primaryText = "Salutation"
             secondaryText = {salutation}
            />

            <ListItem
             primaryText = "First Name"
             secondaryText = {firstName}
            />

            <ListItem
             primaryText = "Last Name"
             secondaryText = {lastName}

            />

            <ListItem
             primaryText = "Fathers first Name"
             secondaryText = {fathersFirstName}

            />
            <ListItem
             primaryText = "Father Last Name"
             secondaryText = {fathersLastName}

            />
            <ListItem
             primaryText = "Mother First Name"
             secondaryText = {mothersFirstName}

            />

            <ListItem
             primaryText = "Mother Last Name"
             secondaryText = {mothersLastName}
            />
            

            <ListItem
             primaryText = "Date of Birth"
             secondaryText = {dob}
            />
            

            <ListItem
             primaryText = "District"
             secondaryText = {district}

            />

            <ListItem
             primaryText = "State"
             secondaryText = {state}

            />

            <ListItem
             primaryText = "Zipcode"
             secondaryText = {zipcode}

            />

            <ListItem
             primaryText = "Email"
             secondaryText = {email}

            />

            <ListItem
             primaryText = "Phone Number"
             secondaryText = {phno}

            />

            
            </List>

            <Link to = "/dashboard">
            <RaisedButton
              label ="Home"
              primary = {false}
              variant="contained"
              style = {styles.button}
            />
            </Link>

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

export default Profile