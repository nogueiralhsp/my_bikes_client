import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      email: '',
      password: ''
    }
    this.nameHandler = this.nameHandler.bind(this)
    this.usernameHandler = this.usernameHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.handlePwdChange = this.handlePwdChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this)
  }
  nameHandler(e) {
    this.setState({ name: e.target.value })
  }
  usernameHandler(e) {
    this.setState({ username: e.target.value })
  }

  emailHandler(e) {
    this.setState({ email: e.target.value })
  }

  handlePwdChange(e) {
    this.setState({ password: e.target.value });
  }

  submitHandler = (event) => {
    event.preventDefault();
    const user = JSON.stringify(this.state)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      headers: myHeaders,
      body: user,
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_API_URL}/users/signup`, requestOptions)
      .then(response => response.json())
      .then(result => {
        try {
          console.log(result);

          // Redirect to the dashboard page after successful login
          this.props.history.push('/');
        } catch (error) {
          console.log('there was an error');
        }
      })
      .catch(error => console.log('error', error));

    // code to handle form submission
  }
  render() {
    return (
      <div className='header'>
        <form onSubmit={this.submitHandler}>
          <label>
            Username:
            <input
              type="text"
              id='username'
              placeholder='username'
              onChange={this.usernameHandler} />
          </label>
          <br />
          <label>
            Name:
            <input
              type="text"
              id='name'
              placeholder='Name'
              onChange={this.nameHandler} />
          </label>
          <br />
          <label>
            Email:
            <input
              type='email'
              id='email'
              placeholder='email'
              onChange={this.emailHandler} />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              id="password"
              placeholder="password"
              onChange={this.handlePwdChange}
            />
          </label>
          <br />
          <button type="submit" onClick={this.submitHandler}>Sign Up</button>
        </form>
      </div>

    );
  }

}

export default SignupPage;