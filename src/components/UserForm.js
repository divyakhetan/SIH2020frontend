import React, { Component } from 'react';
import FormUserDetail from './FormUserDetail';
import SignUrl from './SignUrl';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
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
      streetAdress:'',
      streetAdress2:'',
      district:'',
      state:'',
      zipcode:'',
      email: '',
      phno:'',
      signurl:'',
      aadharurl: '', 
      gender: '',
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  receiveUrl = (filepath) =>{
    this.setState({signurl :filepath})
  }

  receiveUrl1 = (filepath) =>{
    this.setState({aadharurl :filepath})
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, salutation,fathersFirstName,fathersLastName,mothersFirstName,mothersLastName,dob,streetAdress,streetAdress2,district,state,zipcode,email,phno, signurl, aadharurl, gender} = this.state;
    const values = { firstName, lastName, salutation,fathersFirstName,fathersLastName,mothersFirstName,mothersLastName,dob,streetAdress,streetAdress2,district,state,zipcode,email,phno, signurl, aadharurl, gender};
    // console.log(firstName)
    switch (step) {
      case 0:
      return(console.log('hi'))
      
      case 1:
        return (
          <SignUrl
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            sendUrl = {this.receiveUrl}
            sendUrl1 = {this.receiveUrl1}

          />
        );

        case 2:
        return (
          <FormUserDetail
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
         <Confirm 
         	nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
         />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;