import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'



export class Confirm extends React.Component {
  continue = (e) => {
    e.preventDefault();
    //send data to back end here //

    let defaultOptions = {
        url:'',
        method:'POST',
        // mode: 'cors',
        headers:{
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization' : 'Bearer '+ localStorage.getItem('token')
        },
        body:JSON.stringify(this.props.values)
        };
    
       fetch("https://sih2020backend.herokuapp.com/users/fillForm", defaultOptions).then((res)=>{
        return res.json();
        // this.props.history.push('/dashboard'); 
        
    }).then(json => {
        console.log(json);
    });
    this.props.nextStep();
  };

 back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    console.log(JSON.stringify(this.props.values))
    const { values : {firstName, lastName, salutation,fathersFirstName,fathersLastName,mothersFirstName,mothersLastName,dob,streetAdress,streetAdress2,district,state,zipcode,email,phno, signurl, aadharurl}} = this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
      
    
        
            <AppBar title="Confirm the Data" />
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
             primaryText = "Street Address"
             secondaryText = {streetAdress}

            />

             <ListItem
             primaryText = "Street Address 2"
             secondaryText = {streetAdress2}

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

             <ListItem
             primaryText = "Signature URL"
             secondaryText = {signurl}

            />

            <ListItem
             primaryText = "Aadhar Card URL"
             secondaryText = {aadharurl}

            />
            </List>


            <RaisedButton
              label ="Back"
              primary = {false}
              variant="contained"
              style = {styles.button}
              onClick={this.back}
            />

            <RaisedButton
              label ="Continue"
              primary = {true}
              variant="contained"
              style = {styles.button}
              onClick={this.continue}
            />
         
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

export default Confirm;