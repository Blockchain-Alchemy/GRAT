import Blockly from "blockly/core";

/**
 * A dictionary of the block definitions provided by this module.
 * @type {!Object<string, !BlockDefinition>}
 */
 Blockly.defineBlocksWithJsonArray([
  {
    'type': 'sp_verify_admin',
    'message0': 'verify_admin',
    'previousStatement': null,
    'nextStatement': null,
    'style': 'logic_blocks',
    'helpUrl': '%{BKY_LOGIC_COMPARE_HELPURL}',
    'extensions': ['sp_logic_compare', 'sp_logic_op_tooltip'],
  },
  {
    'type': 'sp_verify',
    'message0': 'verify %1 %2 %3',
    'args0': [
      {
        'type': 'input_value',
        'name': 'A',
      },
      {
        'type': 'field_dropdown',
        'name': 'OP',
        'options': [
          ['=', 'EQ'],
          ['\u2260', 'NEQ'],
          ['\u200F<', 'LT'],
          ['\u200F\u2264', 'LTE'],
          ['\u200F>', 'GT'],
          ['\u200F\u2265', 'GTE'],
        ],
      },
      {
        'type': 'input_value',
        'name': 'B',
      }
    ],
    'inputsInline': true,
    'previousStatement': null,
    'nextStatement': null,
    'style': 'logic_blocks',
    'helpUrl': '%{BKY_LOGIC_COMPARE_HELPURL}',
    'extensions': ['sp_logic_compare', 'sp_logic_op_tooltip'],
  },
  {
    'type': 'sp_verify_message',
    'message0': 'verify %1 %2 %3 with message %4',
    'args0': [
      {
        'type': 'input_value',
        'name': 'A',
      },
      {
        'type': 'field_dropdown',
        'name': 'OP',
        'options': [
          ['=', 'EQ'],
          ['\u2260', 'NEQ'],
          ['\u200F<', 'LT'],
          ['\u200F\u2264', 'LTE'],
          ['\u200F>', 'GT'],
          ['\u200F\u2265', 'GTE'],
        ],
      },
      {
        'type': 'input_value',
        'name': 'B',
      },
      {
        'type': 'input_value',
        'name': 'MESSAGE',
        'check': ['String', 'Array'],
      },
    ],
    'inputsInline': true,
    'previousStatement': null,
    'nextStatement': null,
    'style': 'logic_blocks',
    'helpUrl': '%{BKY_LOGIC_COMPARE_HELPURL}',
    'extensions': ['sp_logic_compare', 'sp_logic_op_tooltip'],
  },
]);

/**
 * Adds dynamic type validation for the left and right sides of a logic_compare
 * block.
 * @mixin
 * @augments Block
 * @readonly
 */
 const LOGIC_COMPARE_ONCHANGE_MIXIN = {
  /**
   * Called whenever anything on the workspace changes.
   * Prevent mismatched types from being compared.
   * @param {!AbstractEvent} e Change event.
   * @this {Block}
   */
  onchange: function(e) {
    if (!this.prevBlocks_) {
      this.prevBlocks_ = [null, null];
    }

    const blockA = this.getInputTargetBlock('A');
    const blockB = this.getInputTargetBlock('B');
    // Disconnect blocks that existed prior to this change if they don't match.
    if (blockA && blockB &&
        !this.workspace.connectionChecker.doTypeChecks(
            blockA.outputConnection, blockB.outputConnection)) {
      // Mismatch between two inputs.  Revert the block connections,
      // bumping away the newly connected block(s).
      Blockly.Events.setGroup(e.group);
      const prevA = this.prevBlocks_[0];
      if (prevA !== blockA) {
        blockA.unplug();
        if (prevA && !prevA.isDisposed() && !prevA.isShadow()) {
          // The shadow block is automatically replaced during unplug().
          this.getInput('A').connection.connect(prevA.outputConnection);
        }
      }
      const prevB = this.prevBlocks_[1];
      if (prevB !== blockB) {
        blockB.unplug();
        if (prevB && !prevB.isDisposed() && !prevB.isShadow()) {
          // The shadow block is automatically replaced during unplug().
          this.getInput('B').connection.connect(prevB.outputConnection);
        }
      }
      this.bumpNeighbours();
      Blockly.Events.setGroup(false);
    }
    this.prevBlocks_[0] = this.getInputTargetBlock('A');
    this.prevBlocks_[1] = this.getInputTargetBlock('B');
  },
};

/**
 * "sp_logic_compare" extension function. Adds type left and right side type
 * checking to "sp_logic_compare" blocks.
 * @this {Block}
 * @readonly
 */
 const LOGIC_COMPARE_EXTENSION = function() {
  // Add onchange handler to ensure types are compatible.
  this.mixin(LOGIC_COMPARE_ONCHANGE_MIXIN);
};

Blockly.Extensions.register('sp_logic_compare', LOGIC_COMPARE_EXTENSION);

/**
 * Tooltip text, keyed by block OP value. Used by logic_compare and
 * logic_operation blocks.
 * @see {Extensions#buildTooltipForDropdown}
 * @readonly
 */
 const TOOLTIPS_BY_OP = {
  // logic_compare
  'EQ': '%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}',
  'NEQ': '%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}',
  'LT': '%{BKY_LOGIC_COMPARE_TOOLTIP_LT}',
  'LTE': '%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}',
  'GT': '%{BKY_LOGIC_COMPARE_TOOLTIP_GT}',
  'GTE': '%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}',

  // logic_operation
  'AND': '%{BKY_LOGIC_OPERATION_TOOLTIP_AND}',
  'OR': '%{BKY_LOGIC_OPERATION_TOOLTIP_OR}',
};

Blockly.Extensions.register(
  'sp_logic_op_tooltip',
  Blockly.Extensions.buildTooltipForDropdown('OP', TOOLTIPS_BY_OP));
  