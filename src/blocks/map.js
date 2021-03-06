import Blockly from "blockly/core";

/**
 * A dictionary of the block definitions provided by this module.
 * @type {!Object<string, !BlockDefinition>}
 */
 Blockly.defineBlocksWithJsonArray([
  // Block for sp.pair
  {
    'type': 'sp_pair',
    'message0': 'Pair of %1 and %2',
    'args0': [
      {
        'type': 'field_dropdown',
        'name': 'KEY1',
        'options': [
          ['address', 'Address'],
          ['integer', 'TInt'],
          ['unsigned integer', 'TNat'],
        ],
      },
      {
        'type': 'field_dropdown',
        'name': 'KEY2',
        'options': [
          ['integer', 'TInt'],
          ['unsigned integer', 'TNat'],
          ['address', 'Address'],
        ],
      },
    ],
    'output': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for sp.map
  {
    'type': 'sp_map',
    'message0': 'map with %1 and %2',
    'args0': [
      {
        'type': 'field_dropdown',
        'name': 'KEY1',
        'options': [
          ['address', 'sp.TAddress'],
          ['mutez', 'sp.TMutez'],
          ['integer', 'sp.TInt'],
          ['unsigned integer', 'sp.TNat'],
        ],
      },
      {
        'type': 'field_dropdown',
        'name': 'KEY2',
        'options': [
          ['mutez', 'sp.TMutez'],
          ['integer', 'sp.TInt'],
          ['unsigned integer', 'sp.TNat'],
          ['address', 'sp.TAddress'],
        ],
      },
    ],
    'output': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for sp.big_map
  {
    'type': 'sp_big_map',
    'message0': 'big map with %1 and %2',
    'args0': [
      {
        'type': 'field_dropdown',
        'name': 'KEY1',
        'options': [
          ['address', 'sp.TAddress'],
          ['mutez', 'sp.TMutez'],
          ['integer', 'sp.TInt'],
          ['unsigned integer', 'sp.TNat'],
        ],
      },
      {
        'type': 'field_dropdown',
        'name': 'KEY2',
        'options': [
          ['mutez', 'sp.TMutez'],
          ['integer', 'sp.TInt'],
          ['unsigned integer', 'sp.TNat'],
          ['address', 'sp.TAddress'],
        ],
      },
    ],
    'output': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for getting value from map
  {
    'type': 'map_variables_get',
    'message0': 'get value of map %1 with key %2',
    'args0': [
      {
        'type': 'field_variable',
        'name': 'VAR',
        'variable': '%{BKY_VARIABLES_DEFAULT_NAME}',
      },
      {
        'type': 'input_value',
        'name': 'KEY',
      },
    ],
    'output': null,
    'style': 'logic_blocks',
    'helpUrl': '%{BKY_VARIABLES_GET_HELPURL}',
    'tooltip': '%{BKY_VARIABLES_GET_TOOLTIP}',
  },
  // Block for setting value to map
  {
    'type': 'map_variables_set',
    'message0': 'set map %1 with key %2 value %3',
    'args0': [
      {
        'type': 'field_variable',
        'name': 'VAR',
        'variable': '%{BKY_VARIABLES_DEFAULT_NAME}',
      },
      {
        'type': 'input_value',
        'name': 'KEY',
      },
      {
        'type': 'input_value',
        'name': 'VALUE',
      },
    ],
    'inputsInline': true,
    'previousStatement': null,
    'nextStatement': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_VARIABLES_SET_TOOLTIP}',
    'helpUrl': '%{BKY_VARIABLES_SET_HELPURL}',
  },
]);
