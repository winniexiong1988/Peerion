import { REQUEST_BALANCE, SUCCESS_BALANCE } from './constants';

export function requestBalance(block) {
  return {
    type: REQUEST_BALANCE,
    block,
  };
}

export function saveBalance(balance) {
  return {
    type: SUCCESS_BALANCE,
    balance,
  };
}
