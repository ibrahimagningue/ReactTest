import React, {Component} from 'react'
import ErrorMessage from './ErrorMessage'

import {changeForm} from '../../index_actions'

class Form extends Component {
  constructor (props) {
    super(props)

    this._onSubmit = this._onSubmit.bind(this)
    this._changeUsername = this._changeUsername.bind(this)
    this._changePassword = this._changePassword.bind(this)
  }
  render () {
    let {error} = this.props

    return (
      <form onSubmit={this._onSubmit}>
        {error ? <ErrorMessage error={error} /> : null}
		 
        <div className='form-group'>
		  <label className='form-group' htmlFor='username'>
            Username:
          </label>
          <input
            className='form-control'
            type='text'
            id='username'
            value={this.props.data.username}
            placeholder='username'
            onChange={this._changeUsername}
			required
			/>

        </div>
        <div className='form-group'>
          <label className='form-group'htmlFor='password'>
            Password:
          </label>
		  <input
            className='form-control'
            id='password'
            type='password'
            value={this.props.data.password}
            placeholder='••••••••••'
            onChange={this._changePassword} 
			required
			/>

        </div>
        <div className='form-group'>
          {this.props.currentlySending ? (
            <a href='#' className={props.className + ' btn btn--loading'} disabled='true'></a>
          ) : (
            <button className='btn btn-default' type='submit'>
              {this.props.btnText}
            </button>
             )}
        </div>
      </form>
    )
  }

  _changeUsername (event) {
    this._emitChange({...this.props.data, username: event.target.value})
  }

  _changePassword (event) {
    this._emitChange({...this.props.data, password: event.target.value})
  }

  _emitChange (newFormState) {
    this.props.dispatch(changeForm(newFormState))
  }

  _onSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.props.data.username, this.props.data.password)
  }
}

Form.propTypes = {
  dispatch: React.PropTypes.func,
  data: React.PropTypes.object,
  onSubmit: React.PropTypes.func,
  changeForm: React.PropTypes.func,
  btnText: React.PropTypes.string,
  error: React.PropTypes.string,
  currentlySending: React.PropTypes.bool
}

export default Form
