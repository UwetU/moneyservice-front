import { userConstants } from "../_constants";
import MoneyService from "../services";
import { alertActions } from "./alert.actions";
import { history } from "../helpers";

const moneyService = new MoneyService();

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }));

    moneyService.login(email, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user}
  }

  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user}
  }

  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error}
  }
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    moneyService.register(user)
      .then(
        user => {
          dispatch(success());
          history.push('/login');
          dispatch(alertActions.success('Registration successful'));
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user }
  }

  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user }
  }

  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error }
  }
}

function logout() {
  moneyService.logout();
  return { type: userConstants.LOGOUT };
}

function getUserAccounts(userId) {
  return dispatch => {
    dispatch(request(userId));

    moneyService.getUserAccounts(userId)
      .then(
        accounts => {
          dispatch(success(userId, accounts));
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request(userId) {
    return { type: userConstants.GET_ACCOUNTS_REQUEST, userId }
  }

  function success(userId, accounts) {
    return { type: userConstants.GET_ACCOUNTS_SUCCESS, userId, accounts }
  }

  function failure(error) {
    return { type: userConstants.GET_ACCOUNTS_FAILURE, error }
  }
}

function getUserTransactions(userId) {
  return dispatch => {
    dispatch(request(userId));

    moneyService.getUserTransactions(userId)
      .then(
        transactions => {
          dispatch(success(userId, transactions));
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request(userId) {
    return { type: userConstants.GET_TRANSACTION_REQUEST, userId }
  }

  function success(userId, transactions) {
    return { type: userConstants.GET_TRANSACTION_SUCCESS, userId, transactions }
  }

  function failure(error) {
    return { type: userConstants.GET_TRANSACTION_FAILURE, error }
  }
}

export const userActions = {
  login,
  register,
  logout,
  getUserAccounts,
  getUserTransactions
};


