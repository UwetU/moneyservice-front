import { accountConstants } from "../_constants";
import MoneyService from "../services";

const moneyService = new MoneyService();

function addAccount() {
  return dispatch => {
    dispatch(request());

    moneyService.addAccount()
      .then(
        account => dispatch(success(account)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return { type: accountConstants.ADD_REQUEST}
  }

  function success(account) {
    return { type: accountConstants.ADD_SUCCESS, account}
  }

  function failure(error) {
    return { type: accountConstants.ADD_FAILURE, error}
  }
}

function closeAccount(id) {
  return dispatch => {
    dispatch(request({id}));

    moneyService.closeAccount(id)
      .then(
        account => dispatch(success()),
        error => dispatch(failure(error.toString()))
      );
  };

  function request(id) {
    return { type: accountConstants.CLOSE_REQUEST, id}
  }

  function success() {
    return { type: accountConstants.CLOSE_SUCCESS}
  }

  function failure(error) {
    return { type: accountConstants.CLOSE_FAILURE, error}
  }
}

export const accountActions = {
  addAccount,
  closeAccount
};