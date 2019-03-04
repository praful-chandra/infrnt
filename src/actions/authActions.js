import { SET_USER } from "./types";
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import axios from "axios";


export const getCurrentUser = () => dispatch => {

  axios
    .get("/api/auth/current")
    .then(result => {
      if(result.data.success){
        const {token} =result.data;
           //set token to storage
           localStorage.setItem('jwtToken',token);
            
           //set token to auth header
           setAuthToken(token);

           //decode token to get user data
           const decoded = jwt_decode(token);
           dispatch({
            type: SET_USER,
            payload: decoded.users
          });
      }


     
    })
    .catch(err => console.log(err));
};

export const logoutUser = history => dispatch => {
  axios.get("/api/auth/logout").then(() => {
       //delete token in localStorage 
       localStorage.removeItem('jwtToken');

       //delete header in axios
       setAuthToken(null);
    dispatch({
      type: SET_USER,
      payload: null
    });

    window.location.replace("/");
  });
};
