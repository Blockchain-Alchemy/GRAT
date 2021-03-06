import Blockly from "blockly/core";
import {createPlusField} from './field_plus';
import {createMinusField} from './field_minus';

delete Blockly.Blocks['contract'];

/* eslint-disable quotes */
Blockly.defineBlocksWithJsonArray([
  {
    type: "contract",
    message0: "Contract %1",
    args0: [
      {
        type: "input_dummy",
        name: "EMPTY",
      },
    ],
    style: "list_blocks",
    helpUrl: "%{BKY_LISTS_CREATE_WITH_HELPURL}",
    tooltip: "Add an entry point.",
    mutator: "contract_mutator",
  },
  // Block for sp.address
  {
    'type': 'sp_address',
    'message0': 'address of %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'VALUE',
        'check': ['String'],
      },
    ],
    'output': null,
    'style': 'loop_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for sp.self
  {
    'type': 'sp_self',
    'message0': 'sp.self',
    'output': null,
    'style': 'loop_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for sp.self_address
  {
    'type': 'sp_self_address',
    'message0': 'self address',
    'output': null,
    'style': 'loop_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for sp.sender
  {
    'type': 'sp_sender',
    'message0': 'sender address',
    'output': null,
    'style': 'loop_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for sp.source
  {
    'type': 'sp_source',
    'message0': 'source address',
    'output': null,
    'style': 'loop_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for sp.to_address
  {
    'type': 'sp_to_address',
    'message0': 'to address of %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'VALUE',
        'check': ['String'],
      },
    ],
    'output': null,
    'style': 'loop_blocks',
    'tooltip': '%{BKY_LOGIC_NULL_TOOLTIP}',
    'helpUrl': '%{BKY_LOGIC_NULL_HELPURL}',
  },
  // Block for sp.send
  {
    'type': 'sp_send',
    'message0': 'send %1 to %2',
    'args0': [
      {
        'type': 'input_value',
        'name': 'A',
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
  // Block for sp.transfer
  {
    'type': 'sp_transfer',
    'message0': 'transfer %1 to %2',
    'args0': [
      {
        'type': 'input_value',
        'name': 'A',
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
]);
/* eslint-enable quotes */

const contractMutator = {
  /**
   * Number of item inputs the block has.
   * @type {number}
   */
  itemCount_: 0,

  /**
   * Creates XML to represent number of text inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function () {
    const container = Blockly.utils.xml.createElement("mutation");
    container.setAttribute("items", this.itemCount_);
    return container;
  },
  /**
   * Parses XML to restore the text inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function (xmlElement) {
    const targetCount = parseInt(xmlElement.getAttribute("items"), 10);
    this.updateShape_(targetCount);
  },

  /**
   * Returns the state of this block as a JSON serializable object.
   * @return {{itemCount: number}} The state of this block, ie the item count.
   */
  saveExtraState: function () {
    return {
      itemCount: this.itemCount_,
    };
  },

  /**
   * Applies the given state to this block.
   * @param {*} state The state to apply to this block, ie the item count.
   */
  loadExtraState: function (state) {
    this.updateShape_(state["itemCount"]);
  },

  /**
   * Adds inputs to the block until it reaches the target number of inputs.
   * @param {number} targetCount The target number of inputs for the block.
   * @this {Blockly.Block}
   * @private
   */
  updateShape_: function (targetCount) {
    while (this.itemCount_ < targetCount) {
      this.addPart_();
    }
    while (this.itemCount_ > targetCount) {
      this.removePart_();
    }
    this.updateMinus_();
  },

  /**
   * Callback for the plus image. Adds an input to the end of the block and
   * updates the state of the minus.
   */
  plus: function () {
    this.addPart_();
    this.updateMinus_();
  },

  /**
   * Callback for the minus image. Removes an input from the end of the block
   * and updates the state of the minus.
   */
  minus: function () {
    if (this.itemCount_ === 0) {
      return;
    }
    this.removePart_();
    this.updateMinus_();
  },

  // To properly keep track of indices we have to increment before/after adding
  // the inputs, and decrement the opposite.
  // Because we want our first input to be ADD0 (not ADD1) we increment after.

  /**
   * Adds an input to the end of the block. If the block currently has no
   * inputs it updates the top 'EMPTY' input to receive a block.
   * @this {Blockly.Block}
   * @private
   */
  addPart_: function () {
    if (this.itemCount_ === 0) {
      this.removeInput("EMPTY");
      this.topInput_ = this.appendValueInput("ADD" + this.itemCount_)
        .appendField(createPlusField(), "PLUS")
        .appendField("Contract")
        .appendField(new Blockly.FieldTextInput('unnamed'), 'NAME');
    } else {
      this.appendValueInput("ADD" + this.itemCount_);
    }
    this.itemCount_++;
  },

  /**
   * Removes an input from the end of the block. If we are removing the last
   * input this updates the block to have an 'EMPTY' top input.
   * @this {Blockly.Block}
   * @private
   */
  removePart_: function () {
    this.itemCount_--;
    this.removeInput("ADD" + this.itemCount_);
    if (this.itemCount_ === 0) {
      this.topInput_ = this.appendDummyInput("EMPTY")
        .appendField(createPlusField(), "PLUS")
        .appendField("Contract")
        .appendField(new Blockly.FieldTextInput('unnamed'), 'NAME');
    }
  },

  /**
   * Makes it so the minus is visible iff there is an input available to remove.
   * @private
   */
  updateMinus_: function () {
    const minusField = this.getField("MINUS");
    if (!minusField && this.itemCount_ > 0) {
      this.topInput_.insertFieldAt(1, createMinusField(), "MINUS");
    } else if (minusField && this.itemCount_ < 1) {
      this.topInput_.removeField("MINUS");
    }
  },
};

/**
 * Updates the shape of the block to have 3 inputs if no mutation is provided.
 * @this {Blockly.Block}
 */
const contractHelper = function () {
  this.getInput("EMPTY").insertFieldAt(0, createPlusField(), "PLUS");
  this.updateShape_(3);
};

Blockly.Extensions.registerMutator(
  "contract_mutator",
  contractMutator,
  contractHelper
);
