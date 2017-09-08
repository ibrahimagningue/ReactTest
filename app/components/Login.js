import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from './common/Form'

import {loginRequest} from '../index_actions'

class Login extends Component {
  constructor (props) {
    super(props)

    this._login = this._login.bind(this)
  }

  render () {
    let {dispatch} = this.props
    let {formState, currentlySending, error} = this.props.data

    return (
	 <div className="row">
		<div className="col-md-2"></div>
		<div className="col-md-8">
			<div className="panel panel-default">
				<div className="panel-heading"><strong>LOGIN</strong></div>
				<div className="panel-body">
					<Form data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._login} btnText={'Login'} error={error} currentlySending={currentlySending} />
				</div>
			</div>	  
		</div>
		<div className="col-md-2"></div>
	</div> 

    )
  }

  _login (username, password) {
    this.props.dispatch(loginRequest({username, password}))
  }
}

Login.propTypes = {
  data: React.PropTypes.object,
  history: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

// Which props do we want to inject, given the global state?
function select (state) {
  return {
    data: state
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Login)
