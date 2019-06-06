import axios from "axios";

import {
  GET_STYLE_BY_CODE,
  STYLE_LOAD,
  STYLE_ERROR,
  GET_ALL_STYLES,
  GET_BY_CURATORCODE
} from "./types";

export const getStyleByCode = styleCode => dispatch => {
  dispatch({
    type: STYLE_LOAD
  });

  axios.post("/api/style/byCode", { styleCode }).then(data => {
    const result = data.data;

    if (result.success)
      dispatch({
        type: GET_STYLE_BY_CODE,
        payload: result.data
      });
    else
      dispatch({
        type: STYLE_ERROR,
        payload: result.error
      });
  });
};

export const getAllStyles = () => dispatch => {
  dispatch({
    type: STYLE_LOAD
  });

  axios.get("/api/style/all").then(data => {
    const result = data.data;

    if (result.success)
      dispatch({
        type: GET_ALL_STYLES,
        payload: result.data
      });
    else
      dispatch({
        type: STYLE_ERROR,
        payload: result.error
      });
  });
};


export const getByCuratorCode = (curatorCode)=>dispatch=>{
    dispatch({
        type: STYLE_LOAD
      });

      axios.post("/api/style/bycuratorcode",{curatorCode}).then(
          res=>{
              if(res.data.success)
              dispatch({
                  type : GET_BY_CURATORCODE,
                  payload : res.data.styles
              })
              else{
                  dispatch({
                    type : GET_BY_CURATORCODE,
                    payload : []
                  })
              }
          }
      )

}