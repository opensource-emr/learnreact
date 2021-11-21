import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import myglobal  from "./Global"

function Login() {
  const history = useHistory();


  const [user, _setUser] = useState({ UserName: "", Password: "" });
  const setUser = e => {
    _setUser(prevState => ({
        ...prevState,
          [e.target.name]: e.target.value
    }));
};
  const Validate = e => {

      fetch('https://localhost:44333/Security/CheckUser', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then((data) => { 
          myglobal.token = data.value;
          history.push('/Customer');
        }).catch((error) => {
          console.error(error); });
          
  };
  return (
    <div className="App">
        {user.name} {user.Password}
       <input   onChange={setUser} type="text" name="UserName"/>
       <input   onChange={setUser} type="text" name="Password"/>
       <input value="Login" type="button" onClick={Validate}/><br>
       </br>
       </div>
  );
}

export default Login;
