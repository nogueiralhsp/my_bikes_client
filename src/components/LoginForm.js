import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const user = JSON.stringify(this.state)
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: user,
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_API_URL}/auth/login`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Username:
          <input
            type="text"
            // value={username}
            onChange={(event) => this.setState({ username: event.target.value })} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            // value={password}
            onChange={(event) => this.setState({ password: event.target.value })} />
        </label>
        <br />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    );
  }
}

export default LoginForm;
