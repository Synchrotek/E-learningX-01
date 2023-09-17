import React from 'react';
import './Login.css';

const Login = () => {
  return (<div class="login">

    <form action="" class="login__form">
      <h1 class="login__title"><b>Login</b></h1>


      <div class="login__inputs">
        <div class="login__box">
          <input type="email" placeholder="Email ID" required class="login__input" />
          <i class="ri-mail-fill"></i>
        </div>

        <div class="login__box">
          <input type="password" placeholder="Password" required class="login__input" />
          <i class="ri-lock-2-fill"></i>
        </div>
      </div>

      <div class="login__check">
        <input type="checkbox" class="login__check-input" id="user-check" />
        <label for="user-check" class="login__check-label">Remember me</label>
      </div>

      <button type="submit" class="login__button">Login</button>

      <div class="login__register">
        Don't have an account? <a href="#">Register</a>
      </div>
    </form>
  </div>

  )
}

export default Login