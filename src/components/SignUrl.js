import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'
import {Link} from 'react-router-dom';



export class FormPersonalDetails extends React.Component {
  state = {
    selectedFile : null,
    password : ''
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

 back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile : event.target.files[0]
    });
  };

  changeValue = event => {
    console.log(event.target.value);
    this.setState({
      password : event.target.value
    });
  };

 
  fileUploadHandler = () => {
    const fd = new FormData();
    //  let defaultOptions = {
    //     url:'',
    //     method:'POST',
    //     // mode: 'cors',
    //     headers:{
    //     'content-type': 'application/json',
    //     'accept': 'application/json',
    //     'Authorization' : 'Bearer '+ localStorage.getItem('token')
    //     },
    //     body:fd
    //     };

    
    fd.append('zip', this.state.selectedFile, this.state.selectedFile.name);
    fd.append('password', this.state.password)
    console.log(fd);
    axios.post('https://sih2020backend.herokuapp.com/kyc', fd, {
      headers: {
        Authorization : 'Bearer '+ localStorage.getItem('token')
      }
    })
    // fetch('https://sih2020backend.herokuapp.com/kyc', defaultOptions).then((res) => {
    //   console.log(res.data.filepath);
    //   this.props.sendUrl(res.data.filepath)
        
    // })
  }



 
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
        
            <AppBar title="Upload documents" />
            <h3> Add zip file</h3>
            <input type = "file" onChange ={this.fileSelectedHandler} />
            <br/>
            <br/>
            
  
            <br/>
            <br/>

            <TextField
              hintText="Enter the 4 digit password for the zip file"
              floatingLabelText="4 digit password"
              onChange={this.changeValue}
              
            />
            <br/>
            <br/>
            <RaisedButton onClick = {this.fileUploadHandler}> Upload </RaisedButton>

            <br/>
            <br/>

            

            <Link to = "/dashboard">
            <RaisedButton
                label ="Home"
                primary = {true}
                variant="contained"
                style = {styles.button}
              />
         </Link>

            <RaisedButton
              label ="Continue"
              primary = {true}
              variant="contained"
              style = {styles.button}
              onClick={this.continue}
            />
            <br/>
            <br/>
         
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

export default FormPersonalDetails;