export const marketplace = [
  // #region Create Smart Contract Block.
  {
    text: 'Create Contract',
    hint: 'Contract is the first block under Contract',
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'contract',
    },
  },
  {
    text: 'Rename Contract',
    hint: 'Click unnamed and rename the contract Marketplace',
    event: {
      type: 'BLOCK_CHANGE',
      name: 'NAME',
    },
    block: {
      type: 'contract',
    },
  },
  // #endregion

  // #region Create Construct Block.
  {
    text: 'Create Construct',
    hint: 'Construct is the second block under Contract, attach it to the Contract',
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'construct_defnoreturn',
    },
  },
  {
    text: 'Add Set Contract Variable',
    hint: "It's the 5th block under Contract, attach it to the Contstruct",
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'contract_variables_set',
    },
  },
  {
    text: 'Rename Variable from item to price',
    hint: 'Click the word item and select Rename Variable.. then enter price ',
    event: {
      type: 'VAR_RENAME',
      name: 'NAME',
    },
    block: {
      type: 'contract_variables_set',
      name: 'price',
    },
  },
  {
    text: 'Add tez',
    hint: "It's the second block under Mutez, attach it to the Set Contract Variable",
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'sp_tez',
    },
  },
  {
    text: 'Add sp.tez 1',
    hint: "It's the second block under Mutez, attach it into the second verify slot, change the amount to 1",
    event: {
      type: 'BLOCK_CHANGE',
      name: 'NUM',
    },
    block: {
      type: 'math_number',
    },
  },
  // #endregion

  // #region EntryPoint - SetPrice
  {
    text: 'Add EntryPoint',
    hint: "It's the third block under Contract, attach it to the Contract",
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'entrypoint',
    },
  },
  {
    text: 'Rename EntryPoint to setPrice',
    hint: 'Click unnamed and rename the entrypoint setPrice',
    event: {
      type: 'BLOCK_CHANGE',
      name: 'NAME',
    },
    block: {
      type: 'entrypoint',
      newValue: 'setPrice',
    },
  },
  {
    text: 'Add EntryPoint Argument',
    hint: 'Click plus button in the entrypoint block',
    event: {
      type: 'VAR_CREATE',
    },
    block: {
      type: 'entrypoint',
    },
  },
  {
    text: 'Rename Variable from x to value',
    hint: 'Click the word item and select Rename Variable.. then enter value ',
    event: {
      type: 'BLOCK_CHANGE',
      element: 'field',
    },
    block: {
      type: 'entrypoint',
      variable: 'value',
    },
  },
  {
    text: 'Add Verify Admin',
    hint: "It's the 9th block under Contract, attach it to the Entrypoint",
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'sp_verify_admin',
    },
  },
  {
    text: 'Add Set Contract Variable',
    hint: "It's the 5th block under Contract, attach it to the Contstruct",
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'contract_variables_set',
    },
  },
  {
    text: 'Select contract variable price',
    hint: 'Click the word item and select price variable.',
    event: {
      type: 'VAR_CHANGE',
      name: 'VAR',
    },
    block: {
      name: 'price',
    },
  },
  {
    text: 'Attach value to price',
    hint: 'Select value block under variables, attach it to the Set Contract Variable',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'variables_get',
      varName: 'price',
      parent: {
        type: 'contract_variables_set',
      },
    },
  },
  // #endregion

  // #region EntryPoin - Buy
  {
    text: 'Add EntryPoint',
    hint: "It's the third block under Contract, attach it to the Contract",
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'entrypoint',
    },
  },
  {
    text: 'Rename EntryPoint to buy',
    hint: 'Click unnamed and rename the entrypoint buy',
    event: {
      type: 'BLOCK_CHANGE',
      name: 'NAME',
    },
    block: {
      type: 'entrypoint',
      newValue: 'buy',
    },
  },
  {
    text: 'Add EntryPoint Argument',
    hint: 'Click plus button in the entrypoint block',
    event: {
      type: 'VAR_CREATE',
    },
    block: {
      type: 'entrypoint',
    },
  },
  {
    text: 'Rename Variable from x to amount',
    hint: 'Click the word item and select Rename Variable.. then enter amount ',
    event: {
      type: 'BLOCK_CHANGE',
      element: 'field',
    },
    block: {
      type: 'entrypoint',
      variable: 'amount',
    },
  },

  {
    text: 'Add Set Variable',
    hint: 'Set Variable is the first block under Variables',
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'variables_set',
    },
  },
  {
    text: 'Rename Variable from item to itemPrice',
    hint: 'Click the word item and select Rename Variable.. then enter itemPrice ',
    event: {
      type: 'VAR_RENAME',
      name: 'NAME',
    },
    block: {
      type: 'variables_set',
      name: 'itemPrice',
    },
  },
  {
    text: 'Add Math Arithmetic',
    hint: "It's the 2th block under Math",
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'math_arithmetic',
    },
  },
  {
    text: 'Attach Math Arithmetic to Set Variable',
    hint: 'Attach Math Arithmetic into the Set Variable slot',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'math_arithmetic',
      parent: {
        type: 'variables_set',
      },
    },
  },
  {
    text: 'Add Get Contract Variable',
    hint: "It's the 6th block under Contract",
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'contract_variables_get',
    },
  },
  {
    text: 'Attach Get Contract Variable to Math Arithmetic',
    hint: 'Drag Get Contract Variable block and drop in the first slot of Match Arithmetic.',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'contract_variables_get',
      parent: {
        type: 'math_arithmetic',
      },
    },
  },
  {
    text: 'Select variable price',
    hint: 'Click the word item and select price variable.',
    event: {
      type: 'VAR_CHANGE',
      name: 'VAR',
    },
    block: {
      name: 'price',
    },
  },
  {
    text: 'Set verify operator to multply',
    hint: 'Click the = in Verify and change it to *',
    event: {
      type: 'BLOCK_CHANGE',
      name: 'OP',
    },
    block: {
      type: 'math_arithmetic',
      newValue: 'MULTIPLY',
    },
  },
  {
    text: 'Attach amount variable to Math Arithmetic',
    hint: 'Attach amount variable to the second slot of Match Arithmetic.',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'variables_get',
      varName: 'amount',
      parent: {
        type: 'math_arithmetic',
      },
    },
  },

  {
    text: 'Add Verify',
    hint: "It's the 7th block under Contract, attach it to the Entrypoint",
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'sp_verify',
    },
  },
  {
    text: 'Attach sp.amount to Verify',
    hint: 'The sp.amount is the third block under Mutez',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'sp_amount',
      parent: {
        type: 'sp_verify',
      },
    },
  },
  {
    text: 'Attach itemPrice variable to Verify block',
    hint: 'the itemPrice variable is under Variables.',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'variables_get',
      varName: 'itemPrice',
      parent: {
        type: 'sp_verify',
      },
    },
  },
  {
    text: 'Create Transfer Amount',
    hint: 'Transfer Amount is 5th block under FA 1.2',
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'sp_transfer_token',
    },
  },
  {
    text: 'Attach amount variable to Transfer block',
    hint: 'The variables are under Variables.',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'variables_get',
      varName: 'amount',
      parent: {
        type: 'sp_transfer_token',
      },
    },
  },
  {
    text: 'Attach Self Address to Transfer block',
    hint: 'Self Address is the third block under Address',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'sp_self_address',
      parent: {
        type: 'sp_transfer_token',
      },
    },
  },
  {
    text: 'Attach Sender Address to Transfer block',
    hint: 'Sender Address is the 4th block under Address',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'sp_sender',
      parent: {
        type: 'sp_transfer_token',
      },
    },
  },
  // #endregion

  // #region EntryPoint - Sell
  // #region balance = balanceOf(sp.sender)
  {
    text: 'Add EntryPoint',
    hint: "It's the third block under Contract, attach it to the Contract",
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'entrypoint',
    },
  },
  {
    text: 'Rename EntryPoint to sell',
    hint: 'Click unnamed and rename the entrypoint sell',
    event: {
      type: 'BLOCK_CHANGE',
      name: 'NAME',
    },
    block: {
      type: 'entrypoint',
      newValue: 'sell',
    },
  },
  {
    text: 'Add EntryPoint Argument',
    hint: 'Click plus button in the entrypoint block',
    event: {
      type: 'VAR_CREATE',
    },
    block: {
      type: 'entrypoint',
    },
  },
  {
    text: 'Rename Variable from x to amount',
    hint: 'Click the word item and select Rename Variable.. then enter amount ',
    event: {
      type: 'BLOCK_CHANGE',
      element: 'field',
    },
    block: {
      type: 'entrypoint',
      variable: 'amount',
    },
  },
  {
    text: 'Add Set Variable',
    hint: 'Set Variable is the first block under Variables',
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'variables_set',
    },
  },
  {
    text: 'Rename Variable from balance',
    hint: 'Click the word item and select Rename Variable.. then enter balance ',
    event: {
      type: 'VAR_RENAME',
      name: 'NAME',
    },
    block: {
      type: 'variables_set',
      name: 'balance',
    },
  },
  {
    text: 'Add balance_of',
    hint: 'balance_of is the third block under FA 1.2',
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'sp_get_balance',
    },
  },
  {
    text: 'Attach balance_of to Set Variable',
    hint: 'Attach balance_of block to Set Variable',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'sp_get_balance',
      parent: {
        type: 'variables_set',
      },
    },
  },
  {
    text: 'Add Sender Address',
    hint: 'Sender Address is the 4th block under Address, attach it into the balance_of slot',
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'sp_sender',
    },
  },
  {
    text: 'Add Sender Address',
    hint: 'Sender Address is the 4th block under Address, attach it into the balance_of slot',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'sp_sender',
      parent: {
        type: 'sp_get_balance',
      },
    },
  },
  // #endregion

  // #region verify(balance >= amount)
  {
    text: 'Add Verify',
    hint: "It's the 7th block under Contract, attach it to the Entrypoint",
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'sp_verify',
    },
  },
  {
    text: 'Attach balance variable to the Verify',
    hint: 'Attach balance variable into the first Verify slot',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'variables_get',
      varName: 'balance',
      parent: {
        type: 'sp_verify',
      },
    },
  },
  {
    text: 'Set verify operator to >=',
    hint: 'Click the = in Verify and change it to >=',
    event: {
      type: 'BLOCK_CHANGE',
      name: 'OP',
    },
    block: {
      type: 'sp_verify',
      newValue: 'GTE',
    },
  },
  {
    text: 'Attach amount variable to the Verify',
    hint: 'Attach amount variable into the second Verify slot',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'variables_get',
      varName: 'amount',
      parent: {
        type: 'sp_verify',
      },
    },
  },
  // #endregion

  // #region transfer(sp.sender, self, amount)
  {
    text: 'Create Transfer Amount',
    hint: 'Transfer Amount is 5th block under FA 1.2',
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'sp_transfer_token',
    },
  },
  {
    text: 'Attach amount variable to Transfer block',
    hint: 'The variables are under Variables.',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'variables_get',
      varName: 'amount',
      parent: {
        type: 'sp_transfer_token',
      },
    },
  },
  {
    text: 'Attach Sender Address',
    hint: 'Sender Address is the 4th block under Address, attach it into first Transfer slot',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'sp_sender',
      parent: {
        type: 'sp_transfer_token',
      },
    },
  },
  {
    text: 'Attach Self Address',
    hint: 'Self Address is the third block under Address, attach it into second Transfer slot',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'sp_self_address',
      parent: {
        type: 'sp_transfer_token',
      },
    },
  },
  // #endregion

  // #region itemPrice = self.data.price * amount
  {
    text: 'Add Set Variable',
    hint: 'Set Variable is the first block under Variables',
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'variables_set',
    },
  },
  {
    text: 'Rename Variable from item to itemPrice',
    hint: 'Click the word item and select Rename Variable.. then enter itemPrice ',
    event: {
      type: 'VAR_RENAME',
      name: 'NAME',
    },
    block: {
      type: 'variables_set',
      name: 'itemPrice',
    },
  },
  {
    text: 'Add Math Arithmetic',
    hint: "It's the 2th block under Math",
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'math_arithmetic',
    },
  },
  {
    text: 'Attach Math Arithmetic to Set Variable',
    hint: 'Attach Math Arithmetic into the Set Variable slot',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'math_arithmetic',
      parent: {
        type: 'variables_set',
      },
    },
  },
  {
    text: 'Add Get Contract Variable',
    hint: "It's the 6th block under Contract",
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'contract_variables_get',
    },
  },
  {
    text: 'Attach Get Contract Variable to Math Arithmetic',
    hint: 'Drag Get Contract Variable block and drop in the first slot of Match Arithmetic.',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'contract_variables_get',
      parent: {
        type: 'math_arithmetic',
      },
    },
  },
  {
    text: 'Select variable price',
    hint: 'Click the word item and select price variable.',
    event: {
      type: 'VAR_CHANGE',
      name: 'VAR',
    },
    block: {
      name: 'price',
    },
  },
  {
    text: 'Set verify operator to multply',
    hint: 'Click the = in Verify and change it to *',
    event: {
      type: 'BLOCK_CHANGE',
      name: 'OP',
    },
    block: {
      type: 'math_arithmetic',
      newValue: 'MULTIPLY',
    },
  },
  {
    text: 'Attach amount variable to Math Arithmetic',
    hint: 'Attach amount variable to the second slot of Match Arithmetic.',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'variables_get',
      varName: 'amount',
      parent: {
        type: 'math_arithmetic',
      },
    },
  },
  // #endregion

  // #region verify(sp.balance >= itemPrice)
  {
    text: 'Add Verify',
    hint: "It's the 7th block under Contract, attach it to the Verify",
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'sp_verify',
    },
  },
  {
    text: 'Attach sp.balance variable to the Verify',
    hint: "It's the 4th block under Mutez, attach it to the Verify",
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'variables_get',
      varName: 'balance',
      parent: {
        type: 'sp_verify',
      },
    },
  },
  {
    text: 'Set verify operator to >=',
    hint: 'Click the = in Verify and change it to >=',
    event: {
      type: 'BLOCK_CHANGE',
      name: 'OP',
    },
    block: {
      type: 'sp_verify',
      newValue: 'GTE',
    },
  },
  {
    text: 'Attach itemPrice variable to the Verify',
    hint: 'Attach itemPrice variable into the second Verify slot',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'variables_get',
      varName: 'itemPrice',
      parent: {
        type: 'sp_verify',
      },
    },
  },
  // #endregion

  // #region send(sp.sender, itemPrice)
  {
    text: 'Add Send',
    hint: "It's the send block under FA 1.2",
    event: {
      type: 'BLOCK_CREATE',
    },
    block: {
      type: 'sp_send',
    },
  },
  {
    text: 'Attach Sender Address to Send block',
    hint: 'Sender Address is the 4th block under Address, attach it into the first Send slot',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'sp_sender',
      parent: {
        type: 'sp_send',
      },
    },
  },
  {
    text: 'Attach itemPrice variable to the Send',
    hint: 'Attach itemPrice variable into the second Send slot',
    event: {
      type: 'BLOCK_MOVE',
    },
    block: {
      type: 'variables_get',
      varName: 'itemPrice',
      parent: {
        type: 'sp_verify',
      },
    },
  },
  // #endregion

  // #endregion
];
