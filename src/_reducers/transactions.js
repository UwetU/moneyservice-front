import { userConstants } from "../_constants";

export function transactions(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_TRANSACTION_REQUEST:
      return {
        loading: true
      };
    case userConstants.GET_TRANSACTION_SUCCESS:
      return action.transactions;
    case userConstants.GET_TRANSACTION_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}