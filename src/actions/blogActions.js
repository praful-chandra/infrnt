//import jwt_decode from 'jwt-decode';
import {
  UPLOAD_BLOG,
  GET_CURATOR_BLOGS,
  GET_ALL_BLOGS,
  GET_SELECTED_BLOGS,
  BLOG_ERROR,
  BLOG_LOAD
} from "./types";

import axios from "axios";

export const testBlog = () => dispatch => {
  axios.post("/api/blogs/test").then(data => {
    console.log(data);
  });
};

export const postBlog = (FormData, type) => dispatch => {

  dispatch({
    type:BLOG_LOAD
  })

  if (type === "blogHead") {
    axios
      .post("/api/blogs/postBlogHead", FormData)
      .then(blogData => {
        dispatch({
          type: UPLOAD_BLOG,
          payload: blogData.data
        });
      })
      .catch(err => {
        if (err.resopnse) {
          dispatch({
            type: BLOG_ERROR,
            payload: err.resopnse.data
          });
        }
      });
  } else {
    if (type === "blogContent") {
      axios
        .post("/api/blogs/postBlogContent", FormData)
        .then(blogData => {
          dispatch({
            type: UPLOAD_BLOG,
            payload: null
          });
        })
        .catch(err => {
          if (err.resopnse) {
            dispatch({
              type: BLOG_ERROR,
              payload: err.resopnse.data
            });
          }
        });
    }
  }
};

export const getCuratorBlogs = () => dispatch => {
  dispatch({
    type:BLOG_LOAD
  })
  axios
    .post("/api/blogs/getCuratorBLogs")
    .then(blogData => {
      
      dispatch({
        type: GET_CURATOR_BLOGS,
        payload: blogData.data
      });
    })
    .catch(err => {
      if (err.resopnse) {
        dispatch({
          type: BLOG_ERROR,
          payload: err.resopnse.data
        });
      }
    });
};

export const getAllBlogs = () => dispatch => {
  dispatch({
    type:BLOG_LOAD
  })
  axios
    .get("/api/blogs/getAllBlogs")
    .then(blogData => {
      dispatch({
        type: GET_ALL_BLOGS,
        payload: blogData.data
      });
    })
    .catch(err => {
      if (err.resopnse) {
        dispatch({
          type: BLOG_ERROR,
          payload: err.resopnse.data
        });
      }
    });
};

export const getSelectedBlog = blogId => dispatch => {
  dispatch({
    type:BLOG_LOAD
  })
  const blog = {
    id: blogId
  };
  axios
    .post("/api/blogs/getSelectedBlog", blog)
    .then(blogData => {
      dispatch({
        type: GET_SELECTED_BLOGS,
        payload: blogData.data
      });
    })
    .catch(err => {
      if (err.resopnse) {
        dispatch({
          type: BLOG_ERROR,
          payload: err.resopnse.data
        });
      }
    });
};

export const likeBlog = blogId => dispatch => {
  // dispatch({
  //   type:BLOG_LOAD
  // })
  const blog = {
    id: blogId
  };
  axios
    .post("/api/blogs/likeBlog", blog)
    .then(blogData => {
      dispatch({
        type: GET_SELECTED_BLOGS,
        payload: blogData.data
      });
    })
    .catch(err => {
      if (err.resopnse) {
        dispatch({
          type: BLOG_ERROR,
          payload: err.resopnse.data
        });
      }
    });
};
