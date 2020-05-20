import {transactionConstants} from "../_constants";
import MoneyService from "../services";

const moneyService = new MoneyService();

function refillAccount(numberAccount, sumRefill) {
  return dispatch => {
    dispatch(request({numberAccount}));

    moneyService.refillAccount(numberAccount, sumRefill)
      .then(
        transaction => dispatch(success(transaction)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request(transaction) {
    return { type: transactionConstants.REFILL_REQUEST, transaction}
  }

  function success(transaction) {
    return { type: transactionConstants.REFILL_SUCCESS, transaction}
  }

  function failure(error) {
    return { type: transactionConstants.REFILL_FAILURE, error}
  }
}

function transferMoney(numberAccountOne, numberAccountTwo, sumTransfer) {
  return dispatch => {
    dispatch(request({numberAccountOne, numberAccountTwo}));

    moneyService.transferMoney(numberAccountOne, numberAccountTwo, sumTransfer)
      .then(
        transaction => dispatch(success(transaction)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request(transaction) {
    return { type: transactionConstants.TRANSFER_REQUEST, transaction}
  }

  function success(transaction) {
    return { type: transactionConstants.TRANSFER_SUCCESS, transaction}
  }

  function failure(error) {
    return { type: transactionConstants.TRANSFER_FAILURE, error}
  }
}

export const transactionActions = {
  refillAccount,
  transferMoney
};