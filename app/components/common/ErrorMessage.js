import React from 'react'

function ErrorMessage (props) {
  return (
	<div className="alert alert-danger">
		<strong>Error!</strong> {props.error}
	</div>
  )
}

ErrorMessage.propTypes = {
  error: React.PropTypes.string
}

export default ErrorMessage
