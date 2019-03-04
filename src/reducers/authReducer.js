import { SET_USER} from "../actions/types";
import isEmpty from '../validation/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: null
};

export default (state = initialState, action) => {

  switch (action.type) {

    case SET_USER:
      return {
        ...state,
        user: isEmpty(action.payload) ? null : action.payload,
        isAuthenticated: !isEmpty(action.payload)
      };

    


      

    default:
      return state;
  }
};
