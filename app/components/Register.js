import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from './common/Form'

import {registerRequest} from '../index_actions'

class Register extends Component {
  constructor (props) {
    super(props)

    this._register = this._register.bind(this)
  }

  render () {
    let {dispatch} = this.props
    let {formState, currentlySending, error} = this.props.data

    return (
	<div className="row">
		<div className="col-md-2"></div>
		<div className="col-md-8">	
			<div className="panel panel-default">
				<div className="panel-heading"><strong>REGISTER</strong></div>
				<div className="panel-body">
				  <Form data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._register} btnText={'Register'} error={error} currentlySending={currentlySending} />
				</div>
			</div>
		</div>
		<div className="col-md-2"></div>
	</div> 		  
    )
  }

  _register (username, password) {
    this.props.dispatch(registerRequest({username, password}))
  }
}

Register.propTypes = {
  data: React.PropTypes.object,
  history: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Register)
