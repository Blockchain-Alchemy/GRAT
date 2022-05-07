import Blockly from "blockly/core";

/**
 * A dictionary of the block definitions provided by this module.
 * @type {!Object<string, !BlockDefinition>}
 */
 Blockly.defineBlocksWithJsonArray([
  // Block for sp.now data type.
  {
    'type': 'sp_now',
    'message0': 'now',
    'output': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for sp.timestamp.
  {
    'type': 'sp_timestamp',
    'message0': 'timestamp of %1 seconds',
    'args0': [
      {
        'type': 'input_value',
        'name': 'SECONDS',
        'check': 'Number',
      },
    ],
    'output': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for add to sp.timestamp.
  {
    'type': 'sp_timestamp_add_seconds',
    'message0': 'add %1 seconds to %2',
    'args0': [
      {
        'type': 'input_value',
        'name': 'VALUE',
      },
      {
        'type': 'field_variable',
        'name': 'VAR',
        'variable': '%{BKY_VARIABLES_DEFAULT_NAME}',
      },
    ],
    'output': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
]);
