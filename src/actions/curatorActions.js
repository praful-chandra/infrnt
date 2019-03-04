import axios from 'axios';
import {SET_USER,GET_CURATOR_STYLES,CURATOR_LOAD,GET_STYLE, GET_CURATOR_STYLE_DESIGN,GET_STYLE_DESIGN} from './types';

export const updateProfile = (formData)=>dispatch=>{
    axios.post("/api/curator/updateProfile",formData).then(res=>{
        dispatch({
            type: SET_USER,
            payload: res.data
          })
    }
     
    );
}

export const addStyle = (formData)=>dispatch =>{
    axios.post("/api/curator/styles/addStyle",formData).then(res=>{
        window.location.replace("/curatorb/styles");
        
    })
}

export const getCuratorStyles = (curator)=>dispatch=>{
    dispatch ({type : CURATOR_LOAD});
    axios.post("/api/curator/styles/getcuratorStyles",curator).then(res=>{
       
        dispatch({
            type : GET_CURATOR_STYLES,
            payload : res.data
        })
        
    })
}

export const getCuratorStyleDesigns = (curator)=>dispatch=>{
    dispatch ({type : CURATOR_LOAD});
    let c = {
        curatorId : curator
    }
    axios.post("/api/curator/styles/getcuratorStyleDesigns",c).then(res=>{
       
        dispatch({
            type : GET_CURATOR_STYLE_DESIGN,
            payload : res.data
        })
        
    })
}

export const getStyle = (Style)=>dispatch =>{
    dispatch ({type : CURATOR_LOAD});
    axios.get("/api/curator/styles/getStyle/"+Style).then(
        res=>{
            dispatch({
                type : GET_STYLE,
                payload : res.data
            })
        }
    )
}

export const getDesign = (styleId)=>dispatch=>{
    dispatch ({type : CURATOR_LOAD});
    axios.get("/api/curator/styles/getDesign/"+styleId).then(
    res=>{
        dispatch({
            type : GET_STYLE_DESIGN,
            payload : res.data
        })
    }
    )
}

export const addDesign = (design)=> dispatch=>{
    dispatch ({type : CURATOR_LOAD});
    axios.post("/api/curator/styles/adddesign",design).then(res=>{
        
        if(res.data.success){
       window.location.replace("/curatorb/styles/edit/"+res.data.styleId);
        }
    })
}