import React from 'react';
import firebaseApp from '../../../utils/firebaseUtils';
import styles from '../Login.style';

const loginText = "Login";
const passwordText = "Password";

export default class Signin extends React.Component {

    constructor(props){
        super(props)
        this.state={
          logged: false,
          login: ""
        };
        this.setLogin = this.setLogin.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.onPressLoginButton = this.onPressLoginButton.bind(this)
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.input}>
                    <p>{loginText}</p>
                    <input id="login" value={this.state.login} onChange={this.setLogin}></input>
                </div>
                <div style={styles.input}>
                    <p>{passwordText}</p>
                    <input id="password" type="password" value={this.state.password} onChange={this.setPassword}></input>
                </div>
                <div style={styles.input}>
                    <button onClick={this.onPressLoginButton}>{loginText}</button>
                </div>
                {this.state.logged && <p>Uhuu</p>}
            </div>
        )
    }

    setLogin(event){
      const currentState = this.state;
      this.setState({
        ...currentState,
        login : event.target.value
      })
    }

    setPassword(event){
      const currentState = this.state;
      this.setState({
        ...currentState,
        password : event.target.value
      })
    }

    onPressLoginButton(){
      const login = this.state.login;
      const password = this.state.password;
      firebaseApp.auth().signInWithEmailAndPassword(login, password)
        .then(() => {
          this.setState({
            ...this.state,
            logged : true
          })
        }).then((error) => {
      });
    }

}
