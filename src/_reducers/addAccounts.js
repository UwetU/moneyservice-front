import { accountConstants } from "../_constants";

export function addAccounts(state = {}, action) {
  switch (action.type) {
    case accountConstants.ADD_REQUEST:
      return {
        adding: true
      };
    case accountConstants.ADD_SUCCESS:
      return {};
    case accountConstants.ADD_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}