import Blockly from "blockly/core";

/**
 * A dictionary of the block definitions provided by this module.
 * @type {!Object<string, !BlockDefinition>}
 */
 Blockly.defineBlocksWithJsonArray([
  // Block for sp.mutez.
  {
    'type': 'sp_mutez',
    'message0': 'sp.mutez %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'VALUE',
        'check': 'Number',
      },
    ],
    'output': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for sp.tez.
  {
    'type': 'sp_tez',
    'message0': 'sp.tez %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'VALUE',
        'check': 'Number',
      },
    ],
    'output': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for sp.amount
  {
    'type': 'sp_amount',
    'message0': 'sp.amount',
    'output': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for sp.balance
  {
    'type': 'sp_balance',
    'message0': 'sp.balance',
    'output': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for sp.split_tokens
  {
    'type': 'sp_split_tokens',
    'message0': 'split tokens %1 x %2 / %3',
    'args0': [
      {
        'type': 'input_value',
        'name': 'AMOUNT',
      },
      {
        'type': 'input_value',
        'name': 'QUANTITY',
      },
      {
        'type': 'input_value',
        'name': 'TOTALQUANTITY',
      },
    ],
    'inputsInline': true,
    'previousStatement': null,
    'nextStatement': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
]);
