import axios from "axios";
import { ADD_DATA_FAILURE, ADD_DATA_REQUEST, ADD_DATA_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, TOGGLE_DATA_FAILURE, TOGGLE_DATA_REQUEST, TOGGLE_DATA_SUCCESS } from "./actionType";

export const getDataRequest = () => {
  return {
    type: GET_DATA_REQUEST
  };
};

export const getDataSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload
  };
};

export const getDataFailure = () => {
  return {
    type: GET_DATA_FAILURE
  };
};

export const getMarriagedata = (payload) => (dispatch) => {
  dispatch(getDataRequest());
  axios
    .get("https://json-mock-server-rajatsahu18.vercel.app/getMarriageData")
    .then((res) => {
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });
};

// add Todos

export const addDataRequest = () => {
  return {
    type: ADD_DATA_REQUEST
  };
};

export const addDataSuccess = (payload) => {
  return {
    type: ADD_DATA_SUCCESS,
    payload
  };
};

export const addDataFailure = () => {
  return {
    type: ADD_DATA_FAILURE
  };
};

export const addMarriageData = (payload) => (dispatch) => {
  dispatch(addDataRequest());
  axios
    .post("https://json-mock-server-rajatsahu18.vercel.app/getMarriageData", payload)
    .then((res) => {
      dispatch(addDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(addDataFailure());
    });
};

export const toggleDataRequest = () => {
  return {
      type: TOGGLE_DATA_REQUEST
  }
}

export const toggleDataSuccess = (payload) => {
  return {
      type: TOGGLE_DATA_SUCCESS,
      payload
  }
}

export const toggleDataFailure = () => {
  return {
      type: TOGGLE_DATA_FAILURE
  }
}

export const toggleData = ({id, title, status}) => dispatch => {
  dispatch(toggleDataRequest())
  return axios.patch(`https://json-mock-server-rajatsahu18.vercel.app/getMarriageData/${id}`)
  .then(res => {
      dispatch(toggleDataSuccess(res.data))
      return status=!status
  })
  .catch(err => {
      dispatch(toggleDataFailure())
      console.log('error')
  })
}