import {Add_To_Cart} from './constants';

export function AddToCart(item) {
  return {
    type: Add_To_Cart,
    data: item,
  };
}
