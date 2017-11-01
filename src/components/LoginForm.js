import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: this.props.login,
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const inputName = event.target.name
    this.setState({
      [inputName]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { username, password } = this.state
    if (!username || !password) {
      return
    }

    this.props.onSubmit({
      username,
      password
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
