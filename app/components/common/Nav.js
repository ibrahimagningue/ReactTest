import React, {Component} from 'react'
import {Link} from 'react-router'

import {logout, clearError} from '../../index_actions'

class Nav extends Component {
  constructor (props) {
    super(props)
    this._logout = this._logout.bind(this)
    this._clearError = this._clearError.bind(this)
  }

  render () {
	let navButtons = this.props.loggedIn ? (
		<ul className="nav navbar-nav navbar-right">
			<li><Link to='/dashboard' onClick={this._clearError}>Dashboard</Link></li>
			{this.props.currentlySending ? (
		      <li><a href='#' className={props.className + ' btn btn--loading'} disabled='true'>  </a></li>
			) : (
			  <li><a href='#' className='btn btn--login btn--nav' onClick={this._logout}>Logout</a></li>
			)}
		</ul>
		) : (
		<ul className="nav navbar-nav navbar-right">
			<li><Link to='/register' onClick={this._clearError}><span className="glyphicon glyphicon-user"></span> Register</Link></li>
			<li><Link to='/login' onClick={this._clearError}><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
		</ul>
		)

    return (
		<nav className="navbar navbar-inverse">
		  <div className="container-fluid">
			<div className="navbar-header">
			  <a className="navbar-brand" href="#">Navigation Bar</a>
			</div>
			<ul className="nav navbar-nav">
				<li><Link to='/' onClick={this._clearError} >Home</Link></li>
			</ul>
			{navButtons}
		  </div>
		</nav> 
    )
  }

  _logout () {
    this.props.dispatch(logout())
  }

  _clearError () {
    this.props.dispatch(clearError())
  }
}

Nav.propTypes = {
  loggedIn: React.PropTypes.bool,
  currentlySending: React.PropTypes.bool,
  dispatch: React.PropTypes.func
}

export default Nav
