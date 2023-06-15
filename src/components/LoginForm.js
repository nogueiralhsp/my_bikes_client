import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this)
  }
  usernameHandler(e) {
    this.setState({ username: e.target.value })
  }
  passwordHandler(e) {
    this.setState({ password: e.target.value });
  }

  submitHandler = (event) => {
    event.preventDefault();
    // code to handle form submission
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": this.state.username,
      "password": this.state.password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_API_URL}/auth/login`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


  }

  render() {
    return (
      <div className='login-form'>
        <form onSubmit={this.submitHandler} >
          <label>
            <p>Username:</p>
            <input
              type="text"
              id='username'
              placeholder='username'
              onChange={this.usernameHandler}
            />
          </label>
          <label>
            <p>Password:</p>
            <input
              type="password"
              id='password'
              onChange={this.passwordHandler} />
          </label>
          <div className='login-form__submit__button'>
            <button type="submit">Login</button>
          </div>
          <p >
            Don't have an account? <a className='links' href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
