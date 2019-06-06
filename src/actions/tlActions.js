import {
  GET_ALL_TL,
  TL_LOAD,
  TL_ERROR,
  GET_TL_BY_CODE,
  LOGIN_TL,
  SET_TL
} from "./types";
import setAuthToken from "../utils/setAuthToken";

import axios from "axios";
import jwt_decode from 'jwt-decode';


export const getAllTl = () => dispatch => {
  dispatch({
    type: TL_LOAD
  });

  axios
    .get("/api/admin/viewalltl")
    .then(result => {
      dispatch({
        type: GET_ALL_TL,
        payload: result.data
      });
    })
    .catch(err => {
      dispatch({
        type: TL_ERROR,
        payload: err.result
      });
    });
};

export const getTlByCode = tlCode => dispatch => {
  dispatch({
    type: TL_LOAD
  });

  axios
    .post("/api/tl/byCode", { tlCode })
    .then(result => {
      if (result.data.success) {
        dispatch({
          type: GET_TL_BY_CODE,
          payload: result.data.tlData
        });
      } else
        dispatch({
          type: TL_ERROR,
          payload: "SOME ERROR OCCOURED"
        });
    })
    .catch();

};

export const loginTl = loginData =>dispatch=>{
  dispatch({
    type: TL_LOAD
  });
console.log(loginData);

  axios.post("/api/tlAuth/login",loginData).then(result=>{
    
    if(result.data.success){
      const {token} =result.data;
                   //set token to storage
                   localStorage.setItem('jwtToken',token);
                    
                   //set token to auth header
                   setAuthToken(token);
        
                   //decode token to get user data
                   const decoded = jwt_decode(token);
                   dispatch({
                    type: LOGIN_TL,
                    payload: decoded.users
                  });
    }else{
                  dispatch({
                      type : TL_ERROR,
                      payload : "AUTH ERROR 1"
                  })
              }
  }).catch(err=>{
    console.log(err.response);
    
    dispatch({
        type : TL_ERROR,
        payload : "AUTH ERROR 2"
    })
})
}

export const getCurrentTl = tlToken =>dispatch=>{
  dispatch({
    type: TL_LOAD
  });
  axios
    .get("/api/tlAuth/current", {
      headers: { Authorization: tlToken }
    })
    .then(result => {
      if (result.data.typeOfUser === "teamLeader") {
        axios.defaults.headers.common["Authorization"] = tlToken;
        dispatch({
          type: SET_TL,
          payload: result.data
        });
      } else {
        dispatch({
          type: TL_ERROR,
          payload: "notLoggedIn"
        });
      }
    })
    .catch(err => {
      dispatch({
        type: TL_ERROR,
        payload: "notLoggedIn"
      });
    });

}

