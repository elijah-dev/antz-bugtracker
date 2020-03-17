import { FORM_OPEN_SIGNIN, FORM_OPEN_SIGNUP, FORM_CLOSE } from './index';

export const openFormSignin = () => {
  return {
    type: FORM_OPEN_SIGNIN
  };
};

export const openFormSignup = () => {
  return {
    type: FORM_OPEN_SIGNUP
  };
};

export const closeForm = () => {
  return {
    type: FORM_CLOSE
  };
};
