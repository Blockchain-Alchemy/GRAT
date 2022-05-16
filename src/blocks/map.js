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
  // Block for sp.big_map
  {
    'type': 'sp_big_map',
    'message0': 'big map with %1 and %2',
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
]);
