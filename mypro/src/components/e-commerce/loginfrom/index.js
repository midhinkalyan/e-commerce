import React, { Component } from "react";
import "../../../App.css";
import { redirect } from "react-router-dom";
class Loginpage extends Component {
  state = {
    uname: "",
    password: "",
    error: "",
  };

  onsubmit = () => {
    const { uname, password } = this.state;
    if (uname.trim() === "" || password.trim() === "") {
      this.setState({ error: "Enter both username and password" });
    } else {
      // 👇 Simple redirect
      window.location.href = "/home";
    }
  };

  render() {
    const { uname, password, error } = this.state;

    return (
      <div
        className="login-page"
        style={{
          backgroundImage: "url('/logo1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="login-container">
          <h1 className="title">VINTAGE</h1>
          <p>LOGIN</p>
          <h5>USERNAME</h5>
          <input
            type="text"
            placeholder="Phone number or email"
            value={uname}
            onChange={(e) => this.setState({ uname: e.target.value })}
          />
          <h5>PASSWORD</h5>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button onClick={this.onsubmit}>Login</button>
        </div>
      </div>
    );
  }
}

export default Loginpage;
