import * as Blockly from 'blockly/core';
import 'blockly/python';
const Python = Blockly.Python;
const {NameType} = Blockly.Names;

Blockly.Python['sp_map'] = function(block) {
  const tkey = block.getFieldValue('KEY1')
  const tvalue = block.getFieldValue('KEY2')
  return [`sp.map(tkey = ${tkey}, tvalue = ${tvalue})`, Python.ORDER_ATOMIC];
}

Blockly.Python['sp_big_map'] = function(block) {
  const tkey = block.getFieldValue('KEY1')
  const tvalue = block.getFieldValue('KEY2')
  return [`sp.big_map(tkey = ${tkey}, tvalue = ${tvalue})`, Python.ORDER_ATOMIC];
}

Blockly.Python['map_variables_get'] = function(block) {
  const variable = block.getFieldValue('VAR')
  let varName = Python.nameDB_.getName(variable, NameType.VARIABLE)
  if (Python.contractVariables.find(id => id === variable)) {
    varName = `self.data.${varName}`;
  }
  const key = Python.valueToCode(block, 'KEY', Python.ORDER_RELATIONAL) || '0';
  return [`${varName}[${key}])`, Python.ORDER_ATOMIC];
}

Blockly.Python['map_variables_set'] = function(block) {
  const variable = block.getFieldValue('VAR');
  let varName = Python.nameDB_.getName(variable, NameType.VARIABLE)
  if (Python.contractVariables.find(id => id === variable)) {
    varName = `self.data.${varName}`;
  }

  const key = Python.valueToCode(block, 'KEY', Python.ORDER_RELATIONAL) || '0';
  const value = Python.valueToCode(block, 'VALUE', Python.ORDER_RELATIONAL) || '0';
  return `${varName}[${key}] = ${value}\n`;
}
