import { Component } from "react";
import "./index.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    showSubmitError: false,
    errorMessage: "",
    isValidatePass: false,
    isValidateName: false,
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = () => {
    const { history } = this.props;

    history.replace("/");
  };

  onSubmitFailure = (errorMessage) => {
    this.setState({ showSubmitError: true, errorMessage });
  };
  validatePassword = () => {
    const { password } = this.state;
    if (password === "") {
      this.setState({
        isValidatePass: true,
      });
    } else {
      this.setState({
        isValidatePass: false,
      });
    }
    return password !== "";
  };

  validateUserName = () => {
    const { username } = this.state;
    if (username === "") {
      this.setState({
        isValidateName: true,
      });
    } else {
      this.setState({
        isValidateName: false,
      });
    }

    return username !== "";
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const isValidateUserName = this.validateUserName();
    const isValidatePassword = this.validatePassword();

    if (isValidatePassword && isValidateUserName) {
      const userDetails = { username, password };
      const url = "https://apis.ccbp.in/login";
      const options = {
        method: "POST",
        body: JSON.stringify(userDetails),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok === true) {
        this.onSubmitSuccess();
      } else {
        this.onSubmitFailure(data.error_msg);
      }
    }
  };

  renderPasswordField = () => {
    const { password, isValidatePass } = this.state;
    const errorHighlight  = isValidatePass? 'error-color': ''
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className={`password-input-field ${errorHighlight}`}
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
         {isValidatePass && <p className="error-message">Required</p>}
      </>
    );
  };

  renderUsernameField = () => {
    const { username, isValidateName } = this.state;
    const errorHighlight  = isValidateName? 'error-color': ''
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className={`username-input-field ${errorHighlight}`}
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
        {isValidateName && <p className="error-message">Required</p>}
      </>
    );
  };

  render() {
    const { showSubmitError, errorMessage } = this.state;
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMessage}</p>}
        </form>
      </div>
    );
  }
}

export default LoginForm;
