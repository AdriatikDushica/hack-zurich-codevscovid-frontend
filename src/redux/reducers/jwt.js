import actions from "./actions";

function jwt(
  state = { token: "asd", email: "adriatik.dushica@gmail.com" },
  action
) {
  switch (action.type) {
    case actions.SET_JWT_TOKEN:
      return action.payload;
    default:
      return state;
  }
}

export default jwt;
