import donate from './donate.json';
import marketpalce from './marketplace.json';

export const loadRecipe = {
  donate: () => {
    return {
      id: 'donate',
      name: 'Fundrasier Contract',
      description:
        'This contract will allow users to send Tezos to the contract and it will keep a ledger of donations.',
      recipes: donate,
    };
  },
  marketplace: () => {
    return {
      id: 'marketplace',
      name: 'Marketplace Contract',
      description: 'This contract will allow users to send Tezos to the contract and it will keep a ledger of donations.',
      recipes: marketpalce,
    };
  },
};
