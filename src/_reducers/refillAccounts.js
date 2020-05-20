import { transactionConstants } from "../_constants";

export function refillAccounts(state = {}, action) {
  switch (action.type) {
    case transactionConstants.REFILL_REQUEST:
      return {
        refill: true
      };
    case transactionConstants.REFILL_SUCCESS:
      return {};
    case transactionConstants.REFILL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}