import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
	constructor(props) {
    super(props);

	const  users = [
		{ userID: 1, username: "ibrahima", password: "welcome" },
		{ userID: 2, username: "jean_hary1099", password: "jean10061981" },
		{ userID: 3, username: "sam_sweeper", password: "sweeper0005" },
		{ userID: 4, username: "yasmine1989", password: "0175648976" },
		{ userID: 5, username: "william_lee", password: "okay9009878" },
		{ userID: 6, username: "willipe_chooh", password: "chooh908@6-76" }
	  ]

    this.state = { users };
	}
	
  render () {
    return (
		<div className="row">
			  <div className="col-md-2"></div>
			  <div className="col-md-8">
				  <table className="table">
					<thead>
					  <tr>
						<th>Username</th>
						<th>Password</th>
					  </tr>
					</thead>
					<tbody>
					  {
						this.state.users.map(p => (
						  <tr key={p.userID}>
							<td>{p.username}</td>
							<td>------------------</td>
						  </tr>
						))
					  }
					</tbody>
				  </table>
			  </div>
			  <div className="col-md-2"></div>
        </div>
    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Home)
