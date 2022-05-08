import Blockly from "blockly/core";

/**
 * A dictionary of the block definitions provided by this module.
 * @type {!Object<string, !BlockDefinition>}
 */
 Blockly.defineBlocksWithJsonArray([
  // Block for sp.mutez.
  {
    'type': 'sp_mutez',
    'message0': 'mutez of %1',
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
    'message0': 'tez of %1',
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
  }
]);
