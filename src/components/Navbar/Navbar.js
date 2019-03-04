import React, { Component } from 'react';
import {NavLink }from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {logoutUser,getCurrentUser} from '../../actions/authActions';

import logo from '../../images/logo.png';

class Navbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       active : {
         report : true,
         style : false
       },
       loginBody : false
    }
  }
  

  setactive = ()=>{
     if(window.location.pathname === "/" || window.location.pathname.includes("reports") || window.location.pathname.includes("article") )
    this.setState({active:{
      style : false,
      report : true
    }})
    else
     
     if( window.location.pathname.includes("styles") || window.location.pathname.includes("curator"))
     this.setState({active:{
      style : true,
      report : false
    }})

    else 
    this.setState({active:{
      style : false,
      report : false
    }})
   }

   componentDidMount(){
     this.setactive();
    this.props.getCurrentUser();

  }



  handleLogout = (e)=>{
    e.preventDefault();
      this.props.logoutUser()
  }

  handleLoginBtn = ()=>{
    this.setState({
      loginBody : !this.state.loginBody
    })
  }
   
  render() {
        return (
      <div  className="myNavbar">

        <div className="myNavbar-logo">
        <NavLink to="/reports"> <img src={logo} onClick={this.setactive} alt="INFRNT"/></NavLink>
        </div>

        <div className="myNavbar-links">
          <ul>
            <li onClick={this.setactive}><NavLink to="/reports"  className={classnames({"active-navLink" : this.state.active.report})}><button > Infrnt Reports</button></NavLink></li>
            <li onClick={this.setactive}><NavLink to="/styles" className={classnames({"active-navLink" : this.state.active.style})} ><button >Curated Styles</button></NavLink></li>

          {this.props.auth.isAuthenticated && !this.state.loginBody? <li className="myNavbar-links-userName">{this.props.auth.user.name}</li> : null}
            <li onClick={this.handleLoginBtn}><i className="fas fa-user-alt myNavbar-links-login-icon"></i>
                  <div className={classnames("myNavbar-links-login-body",{"hidden":!this.state.loginBody})}>
                  <ul>
                  {!this.props.auth.isAuthenticated ? 
                    ( <>
                    <li><a className="btn  btn-danger btn-lg myNavbar-links-login" href="/api/auth/user/google/user"  >Login with google</a></li>
                    <li><a className="btn  btn-primary btn-lg myNavbar-links-login" href="/api/auth/facebook/login/user"  >Login with Facebook</a></li>
                    </>
                    ):(<>
                    <li style={{fontSize : "2rem"}}>{this.props.auth.user.name}</li> 
                      <li><button className="myNavbar-links-login" onClick={this.handleLogout}>Logout</button></li>
                   </>
                    )}
                  </ul>
                  </div>  
            </li>
            
  
     

          </ul>
        </div>
  
      </div>
    )
  }
}

Navbar.propTypes = {
  auth : PropTypes.object.isRequired,
  logoutUser : PropTypes.func.isRequired
}

const mapStateToProps = state =>({
  auth : state.auth
}
)
export default connect(mapStateToProps,{logoutUser,getCurrentUser})(Navbar) ;