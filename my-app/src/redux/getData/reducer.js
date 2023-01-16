import { ADD_DATA_FAILURE, ADD_DATA_REQUEST, ADD_DATA_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType";

const initState = {
  isLoading: false,
  error: false,
  marriage: []
};

export const reducer = (state = initState, action) => {
  switch (action.type) {

    case GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        marriage: action.payload,
        isLoading: false
      };

    case GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };

    case ADD_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false
      };

    case ADD_DATA_SUCCESS:
      return {
        ...state,
        marriage: [...state.todos, action.payload],
        isLoading: false
      };

    case ADD_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };
      default:
        return state;
    }
  };