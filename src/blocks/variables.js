import Blockly from 'blockly/core';

const ContextMenu = Blockly.ContextMenu;
const Extensions = Blockly.Extensions;
const Variables = Blockly.Variables;
const Msg = Blockly.Msg;
const xmlUtils = Blockly.utils.xml;

/**
 * A dictionary of the block definitions provided by this module.
 * @type {!Object<string, !BlockDefinition>}
 */
 Blockly.defineBlocksWithJsonArray([
  // Block for variable getter.
  {
    'type': 'contract_variables_get',
    'message0': 'get contract variable %1',
    'args0': [
      {
        'type': 'field_variable',
        'name': 'VAR',
        'variable': '%{BKY_VARIABLES_DEFAULT_NAME}',
      },
    ],
    'output': null,
    'style': 'variable_blocks',
    'helpUrl': '%{BKY_VARIABLES_GET_HELPURL}',
    'tooltip': '%{BKY_VARIABLES_GET_TOOLTIP}',
    'extensions': ['contextMenu_variableSetterGetter_contract'],
  },
  // Block for variable setter.
  {
    'type': 'contract_variables_set',
    'message0': 'set contract variable %1 to %2',
    'args0': [
      {
        'type': 'field_variable',
        'name': 'VAR',
        'variable': '%{BKY_VARIABLES_DEFAULT_NAME}',
      },
      {
        'type': 'input_value',
        'name': 'VALUE',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'style': 'variable_blocks',
    'tooltip': '%{BKY_VARIABLES_SET_TOOLTIP}',
    'helpUrl': '%{BKY_VARIABLES_SET_HELPURL}',
    'extensions': ['contextMenu_variableSetterGetter_contract'],
  },
]);

/**
 * Mixin to add context menu items to create getter/setter blocks for this
 * setter/getter.
 * Used by blocks 'variables_set' and 'variables_get'.
 * @mixin
 * @augments Block
 * @package
 * @readonly
 */
const CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN = {
  /**
   * Add menu option to create getter/setter block for this setter/getter.
   * @param {!Array} options List of menu options to add to.
   * @this {Block}
   */
  customContextMenu: function(options) {
    if (!this.isInFlyout) {
      let oppositeType;
      let contextMenuMsg;
      // Getter blocks have the option to create a setter block, and vice versa.
      if (this.type === 'contract_variables_get') {
        oppositeType = 'contract_variables_get';
        contextMenuMsg = Msg['VARIABLES_GET_CREATE_SET'];
      } else {
        oppositeType = 'contract_variables_get';
        contextMenuMsg = Msg['VARIABLES_SET_CREATE_GET'];
      }

      const option = {enabled: this.workspace.remainingCapacity() > 0};
      const name = this.getField('VAR').getText();
      option.text = contextMenuMsg.replace('%1', name);
      const xmlField = xmlUtils.createElement('field');
      xmlField.setAttribute('name', 'VAR');
      xmlField.appendChild(xmlUtils.createTextNode(name));
      const xmlBlock = xmlUtils.createElement('block');
      xmlBlock.setAttribute('type', oppositeType);
      xmlBlock.appendChild(xmlField);
      option.callback = ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
      // Getter blocks have the option to rename or delete that variable.
    } else {
      if (this.type === 'contract_variables_get' ||
          this.type === 'contract_variables_get_reporter') {
        const renameOption = {
          text: Msg['RENAME_VARIABLE'],
          enabled: true,
          callback: renameOptionCallbackFactory(this),
        };
        const name = this.getField('VAR').getText();
        const deleteOption = {
          text: Msg['DELETE_VARIABLE'].replace('%1', name),
          enabled: true,
          callback: deleteOptionCallbackFactory(this),
        };
        options.unshift(renameOption);
        options.unshift(deleteOption);
      }
    }
  },
};

/**
 * Factory for callbacks for rename variable dropdown menu option
 * associated with a variable getter block.
 * @param {!Block} block The block with the variable to rename.
 * @return {!function()} A function that renames the variable.
 */
const renameOptionCallbackFactory = function(block) {
  return function() {
    const workspace = block.workspace;
    const variable = block.getField('VAR').getVariable();
    Variables.renameVariable(workspace, variable);
  };
};

/**
 * Factory for callbacks for delete variable dropdown menu option
 * associated with a variable getter block.
 * @param {!Block} block The block with the variable to delete.
 * @return {!function()} A function that deletes the variable.
 */
const deleteOptionCallbackFactory = function(block) {
  return function() {
    const workspace = block.workspace;
    const variable = block.getField('VAR').getVariable();
    workspace.deleteVariableById(variable.getId());
    workspace.refreshToolboxSelection();
  };
};

Extensions.registerMixin(
    'contextMenu_variableSetterGetter_contract',
    CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN);
