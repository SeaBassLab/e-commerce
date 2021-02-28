import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginRequest } from '../actions'
import { TextInput, Icon } from 'react-materialize'

const Login = props => {
  const [ form, setValues] = useState()

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.loginRequest(form)
    props.history.push('/')
  }

  return(
    <>
      <section className="container">
          <section className="row">
            <h2>Inicia sesión</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-field col s6">
                  <TextInput
                      email
                      name="email"
                      id="TextInput-4"
                      label="Email"
                      onChange={handleInput}
                      validate
                    />
                </div>
                <div className="input-field col s6">
                  <TextInput
                      id="TextInput-4"
                      name="password"
                      label="Password"
                      onChange={handleInput}
                      password
                    />
                </div>
              </div>
              <button className="btn green">Iniciar sesión</button>
            </form>
          <div className="row col l4">
            <p>
              <label>
                  <input type="checkbox" className="filled-in" />
                  <span>Recordarme</span>
              </label>
            </p>
                <a href="/">Olvidé mi contraseña</a>
          </div>
           
          <div className="row col l4">
            <div><Icon>account_circle</Icon>Inicia sesión con Google</div>
            <div><Icon>account_circle</Icon>Inicia sesión con Twitter</div>
          </div>
          <div className="row col l4">
            <p>
              No tienes ninguna cuenta {' '}
              <Link to="/register">
                Regístrate
              </Link>
            </p>
          </div>
          </section>
        </section>
    </>
    )
}

const mapDispatchToProps = {
  loginRequest,
}

export default connect(null,mapDispatchToProps)(Login)