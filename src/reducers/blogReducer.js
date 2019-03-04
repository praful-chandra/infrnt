import {
  UPLOAD_BLOG,
  GET_CURATOR_BLOGS,
  GET_ALL_BLOGS,
  GET_SELECTED_BLOGS,
  BLOG_ERROR,
  BLOG_LOAD
} from "../actions/types";

const initialState = {
  CuratorBlogs: null,
  UploadBlog: null,
  allBlogs: null,
  selectedBlog: null,
  blogError: null,
  blogLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BLOG_LOAD:
      return {
        ...state,
        blogLoading: true
      };

    case UPLOAD_BLOG:
      return {
        ...state,
        UploadBlog: action.payload,
        blogLoading: false
      };

    case GET_CURATOR_BLOGS:
      return {
        ...state,
        CuratorBlogs: action.payload,
        blogLoading: false
      };

    case GET_ALL_BLOGS:
      return {
        ...state,
        allBlogs: action.payload,
        blogLoading: false
      };
    case GET_SELECTED_BLOGS:
      return {
        ...state,
        selectedBlog: action.payload,
        blogLoading: false
      };

    case BLOG_ERROR:
      return {
        ...state,
        blogError: action.payload,
        blogLoading: false
      };

    default:
      return state;
  }
};
