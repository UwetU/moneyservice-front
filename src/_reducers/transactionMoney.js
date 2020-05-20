import { transactionConstants } from "../_constants";

export function transactionMoney(state = {}, action) {
  switch (action.type) {
    case transactionConstants.TRANSFER_REQUEST:
      return {
        transfer: true
      };
    case transactionConstants.TRANSFER_SUCCESS:
      return {};
    case transactionConstants.TRANSFER_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}