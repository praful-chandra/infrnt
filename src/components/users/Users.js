import React, { Component } from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getCurrentUser} from '../../actions/authActions';
class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {

  }
}

componentDidMount(){
  this.props.getCurrentUser();
}

authWithGoogle = e=>{
  e.preventDefault();

  this.props.googleAuth(this.props.history,"curator");

}

  render(){
    return(
      <div className="container">
 
            {this.props.auth.user ? ( <h1>Welcome : {this.props.auth.user.name}</h1> ) : null}


      </div>

    )
  }
}

Users.propTypes = {
  auth : PropTypes.object.isRequired,
  getCurrentUser: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
  auth : state.auth
})

export default connect(mapStateToProps,{getCurrentUser})(Users);
