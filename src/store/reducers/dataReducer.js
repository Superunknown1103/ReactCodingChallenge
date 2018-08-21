import { GET_DATA, UPDATE_DATA, LOADING } from "../actions/types";

const initialState = {
  data: [],
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_VALUE': {
      return {
        ...state,
        data: state.data.map(item => item._id === action.payload.id
          ? { ...item, description: action.payload.newValue }
          : item
        ),
      }
    }
    case 'FILTER_ITEMS': {
      const newData = state.data.filter(item => {
        // something with action.payload
        //  return data.text.indexOf(action.payload) > -1
      });
      return {
        ...state,
        data: newData,
      }
    }
    case LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case UPDATE_DATA:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
  console.log(state, action);
}

const loading = dispatch => 
  dispatch({
    type: LOADING
  });
