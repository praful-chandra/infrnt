import React, { Component } from 'react';
import {connect} from "react-redux";
import {Redirect } from "react-router-dom";

import {loginTl,getCurrentTl} from "../../../actions/tlActions";
class tl extends Component {
constructor(props) {
    super(props)

    this.state = {
         email : "",
         password : "",
         tl:{
             isAuthenticated : false
         }
    }
}

componentDidMount(){
    if(localStorage.jwtToken && !this.state.tl.isAuthenticated){

    this.props.getCurrentTl(localStorage.jwtToken);
    
    }
     
   }

   
   componentWillReceiveProps(nextProps){
    if(nextProps.tl){
        this.setState({
            tl : nextProps.tl
        })
    }
    }


handleChange = (e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}

handelFormSubmit = (e)=>{
    e.preventDefault();
    const tl={
        email : this.state.email,
        password: this.state.password
    }

    this.props.loginTl(tl);
}


    render() {
        return (
            <div>
                <div className="container">
        {/* {this.state.curator.isAuthenticated ? (<Redirect to="/backend/curator/dashboard" />) : null} */}
           <div className="authPage-signIn  adminAuth" >
    
    <h1>Sign In as Team leader</h1>
    <form className="authPage-signIn-form" onSubmit={this.handelFormSubmit}>
      <input type="email" name="email" placeholder="email" id="curatorEmail" value={this.state.email} onChange={this.handleChange} required/>    
      <input type="password" name="password" placeholder="password" id="curatorPassword" value={this.state.password}  onChange={this.handleChange} required/>
    
      <input type="submit" className="authPage-signIn-form-btn adminAuth-btn" value="Log In"/>
    </form>
    
    </div>
    {/* {this.state.curator.curatorError && this.state.curator.curatorError !== "notLoggedIn" ? (
    <div className="alert alert-danger bigger" role="alert">
  {this.state.curator.curatorError}
</div>
) : null} */}
        </div>
            </div>
        )
    }
}
const mapStateToProps = state=>({
tl : state.tl
})


export default connect(mapStateToProps,{loginTl,getCurrentTl})(tl)