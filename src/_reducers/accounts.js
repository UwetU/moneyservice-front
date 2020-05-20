import { userConstants } from "../_constants";

export function accounts(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_ACCOUNTS_REQUEST:
      return {
        loading: true
      };
    case userConstants.GET_ACCOUNTS_SUCCESS:
      return action.accounts;
    case userConstants.GET_ACCOUNTS_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}