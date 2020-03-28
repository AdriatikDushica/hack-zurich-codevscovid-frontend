import actions from "./actions";

export const setJwtToken = (token) => ({
  type: actions.SET_JWT_TOKEN,
  payload: {
    token,
  },
});
