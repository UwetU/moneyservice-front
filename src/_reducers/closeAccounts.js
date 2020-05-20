import { accountConstants } from "../_constants";

export function closeAccounts(state = {}, action) {
  switch (action.type) {
    case accountConstants.CLOSE_REQUEST:
      return {
        closing: true
      };
    case accountConstants.CLOSE_SUCCESS:
      return {};
    case accountConstants.CLOSE_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}