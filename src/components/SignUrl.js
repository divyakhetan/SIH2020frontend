import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'



export class FormPersonalDetails extends React.Component {
  state = {
    selectedFile : null,
    selectedFile1 : null
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
  }

  fileSelectedHandler1 = event => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile1 : event.target.files[0]
    });
  }

 

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('file', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('https://sih2020backend.herokuapp.com/upload',fd).then((res) => {
      console.log(res.data.filepath);
      this.props.sendUrl(res.data.filepath)
        
    })
  }



  fileUploadHandler1 = () => {
    const fd = new FormData();
    fd.append('file', this.state.selectedFile1, this.state.selectedFile1.name);
    axios.post('https://sih2020backend.herokuapp.com/upload',fd).then((res) => {
      console.log(res.data.filepath);
      this.props.sendUrl1(res.data.filepath)
        
    })
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider >
        <React.Fragment>
        
            <AppBar title="Upload documents" />
            <h3> Add signature photo</h3>
            <input type = "file" onChange ={this.fileSelectedHandler} />
            <br/>
            <br/>
            <RaisedButton onClick = {this.fileUploadHandler}> Upload </RaisedButton>
  
            <br/>
            <br/>

            <h3> Add Aadhar Card photo</h3>
            <input type = "file" onChange ={this.fileSelectedHandler1} />
            <br/>
            <br/>
            <RaisedButton onClick = {this.fileUploadHandler1}> Upload </RaisedButton>
  
            <br/>
            <br/>

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

export default FormPersonalDetails;