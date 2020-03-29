import actions from "./actions";

function jwt(state = null, action) {
  switch (action.type) {
    case actions.SET_JWT_TOKEN:
      return action.payload;
    default:
      return state;
  }
}

export default jwt;
