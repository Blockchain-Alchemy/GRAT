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
  // Block for sp.timestamp_from_utc_now.
  {
    'type': 'sp_timestamp_from_utc_now',
    'message0': 'current UTC timestamp',
    'output': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for sp.timestamp.
  {
    'type': 'sp_timestamp_of',
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
  // Block for add seconds to sp.timestamp.
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
    'inputsInline': true,
    'previousStatement': null,
    'nextStatement': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for add seconds to sp.timestamp.
  {
    'type': 'sp_timestamp_add_minutes',
    'message0': 'add %1 minutes to %2',
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
    'inputsInline': true,
    'previousStatement': null,
    'nextStatement': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for add hours to sp.timestamp.
  {
    'type': 'sp_timestamp_add_hours',
    'message0': 'add %1 hours to %2',
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
    'inputsInline': true,
    'previousStatement': null,
    'nextStatement': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for add days to sp.timestamp.
  {
    'type': 'sp_timestamp_add_days',
    'message0': 'add %1 days to %2',
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
    'inputsInline': true,
    'previousStatement': null,
    'nextStatement': null,
    'style': 'logic_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
]);
