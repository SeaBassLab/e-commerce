import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerRequest } from '../actions'
import { TextInput, Icon } from 'react-materialize'

const Register = props => {
    const [form, setValues] = useState()

    const handleInput = event => {
      setValues({
        ...form,
        [event.target.name]: event.target.value
      })
    }  

    const handleSubmit = event => {
      event.preventDefault()
      props.registerRequest(form)
      props.history.push('/')
    }

    return (
      <>
        <section className="container">
          <section className="row col l6">
            <h2>Regístrate</h2>
            <form className="col s12"  onSubmit={handleSubmit} >
              <div className="row">
              <div className="row">
                <TextInput 
                  name="name"
                  id="TextInput-4"
                  type="text" 
                  label="First Name"
                  onChange={handleInput}
                />
                <TextInput 
                  name="last-name"
                  id="TextInput-4" 
                  label="Last Name"
                  onChange={handleInput} 
                  validate
                />
              </div>
              <div className="row col l6">
                <TextInput
                  email
                  name="email"
                  id="TextInput-4"
                  label="Email"
                  onChange={handleInput}
                  validate
                />
                <TextInput 
                  id="TextInput-4"
                  name="password"
                  label="Password"
                  onChange={handleInput}
                  password 
                />
              </div>
              <button className="btn grenn">Registrarme</button>
              </div>
            </form>
            <Link to="/login">
              Iniciar sesión
            </Link>
          </section>
        </section>
      </>
)
}

const mapDispatchToProps = {
  registerRequest,
}

export default connect(null, mapDispatchToProps) (Register)