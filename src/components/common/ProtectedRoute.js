import React from 'react'
import {connect} from 'react-redux';
import {Route} from 'react-router';
import propTypes from 'prop-types';

 function ProtectedRoute({component : Component, auth , ...rest }) {
     if(auth.isAuthenticated){
         return(
            <Route  {...rest} render={(props) => (  <Component {...props} />  )} />
         )
     }else{
       return  <h1>UNAUTHORIZED !!!</h1>
     }
}

ProtectedRoute.propTypes = {
    auth : propTypes.object.isRequired
}

const mapStateToProps = (state)=>({
auth : state.auth
})

export default connect(mapStateToProps)(ProtectedRoute);