import { authHeader }  from "../helpers";

export default class MoneyService {

  _apiBase = 'https://localhost:5001';

  getResource = async (url, requestOptions) => {
    const res = await fetch(`${this._apiBase}${url}`, requestOptions);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  login = async (email, password) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': ' application/json' },
      body: JSON.stringify({email, password})
    };

    const user = await this.getResource(`/users/authenticate`, requestOptions);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }

  logout = () => {
    localStorage.removeItem('user');
  }

  register = async (user) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': ' application/json' },
      body: JSON.stringify(user)
    };

    const res = await this.getResource(`/users/register`, requestOptions);
    return res;
  }

  addAccount = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { ...authHeader(), 'Content-Type': ' application/json'}
    };

    const res = await this.getResource(`/accounts/create`, requestOptions);
    return res;
  }

  closeAccount = async (id) => {
    const requestOptions = {
      method: 'PUT',
      headers: { ...authHeader(), 'Content-Type': ' application/json'},
      body: JSON.stringify(id)
    };

    const acc = await this.getResource(`/accounts/${id}`, requestOptions);
    return acc;
  }

  refillAccount = async (numberAccount, sumRefill) => {
    const requestOptions = {
      method: 'POST',
      headers: { ...authHeader(), 'Content-Type': ' application/json'},
      body: JSON.stringify({numberAccount, sumRefill})
    };

    const res = await this.getResource(`/transactions/refill`, requestOptions);
    return res;
  }

  transferMoney = async (numberAccountOne, numberAccountTwo, sumTransfer) => {
    const requestOptions = {
      method: 'POST',
      headers: { ...authHeader(), 'Content-Type': ' application/json'},
      body: JSON.stringify({numberAccountOne, numberAccountTwo, sumTransfer})
    };

    const res = await this.getResource(`/transactions/transfer`, requestOptions);
    return res;
  }

  getAllUsers = async () => {
    const requestOptions = {
      method: 'GET',
      header: authHeader()
    };

    const res = await this.getResource(`/users/`, requestOptions);
    return res;
  }

  getUser = async (id) => {
    const requestOptions = {
      method: 'GET',
      header: authHeader()
    };

    const user = await this.getResource(`/users/${id}`, requestOptions);
    return user;
  }

  getUserTransactions = async (userId) => {
    const requestOptions = {
      method: 'GET',
      headers : authHeader()
    };

    const res = await this.getResource(`/transactions/${userId}`, requestOptions);
    return res;
  }

  getUserAccounts = async (userId) => {
    const requestOptions = {
      method: 'GET',
      headers: authHeader()
    };

    const res = await this.getResource(`/accounts/${userId}`, requestOptions);
    return res;
  }
}