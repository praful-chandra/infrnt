import {
  GET_CURATOR_STYLES,
  CURATOR_LOAD,
  GET_CURATOR_STYLE_DESIGN,
  GET_STYLE,
  GET_STYLE_DESIGN
} from "../actions/types";

const initialState = {
  curatorStyles: null,
  curatorStyleDesigns: null,
  isCuratorLoading: false,
  style : null,
  styleDesign : null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CURATOR_LOAD:
      return {
        ...state,
        isCuratorLoading: true
      };

    case GET_CURATOR_STYLES:
      return {
        ...state,
        curatorStyles: action.payload,
        isCuratorLoading: false
      };

    case GET_CURATOR_STYLE_DESIGN:
      return {
        ...state,
        curatorStyleDesigns: action.payload,
        isCuratorLoading: false
      };

      case GET_STYLE :return{
          ...state,
            style : action.payload,
            isCuratorLoading: false
      }
      
      case GET_STYLE_DESIGN : return {
        ...state,
        styleDesign: action.payload,
            isCuratorLoading: false
      }

    default:
      return state;
  }
};


