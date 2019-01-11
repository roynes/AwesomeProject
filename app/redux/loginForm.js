import { updateObject } from "../utility";

export const actionTypes = {
  SAVE_EMAIL: 'SAVE_EMAIL',
  SAVE_PASSWORD: 'SAVE_PASSWORD'
}

const initialState = {
  password: '',
  email: ''
}

export const loginFormActionCreators = {
  saveEmail: (value) => {
    return {
      type: actionTypes.SAVE_EMAIL,
      payload: value
    }
  },

  savePassword: (value) => {
    return {
      type: actionTypes.SAVE_PASSWORD,
      payload: value
    }
  }
};

export const loginFormReducers = (prevState = initialState, action) => {
  switch(action.type) {
    case actionTypes.SAVE_EMAIL: 
      return updateObject(prevState, { email: action.payload });

    case actionTypes.SAVE_PASSWORD: 
      return updateObject(prevState, { password: action.payload });
  }

  return prevState;
}