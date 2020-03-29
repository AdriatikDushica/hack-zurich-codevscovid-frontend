import actions from "./actions";

export const setJwtToken = (token, email) => ({
  type: actions.SET_JWT_TOKEN,
  payload: {
    token,
    email,
  },
});
