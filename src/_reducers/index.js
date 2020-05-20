import { combineReducers } from 'redux';

import { auth } from "./auth";
import { alert } from "./alert";
import { registration } from "./register";
import { addAccounts } from "./addAccounts";
import { closeAccounts } from "./closeAccounts";
import { refillAccounts } from "./refillAccounts";
import { transactionMoney } from "./transactionMoney";
import { accounts } from "./accounts";
import { transactions } from "./transactions";

const rootReducer = combineReducers({
  auth,
  registration,
  alert,
  addAccounts,
  closeAccounts,
  refillAccounts,
  transactionMoney,
  accounts,
  transactions
});

export default rootReducer;