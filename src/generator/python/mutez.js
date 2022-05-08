import * as Blockly from 'blockly/core';
import 'blockly/python';
const Python = Blockly.Python;
const {NameType} = Blockly.Names;

Blockly.Python['sp_mutez'] = function(block) {
  const value = Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '0';
  return [`sp.mutez(${value})`, Python.ORDER_ATOMIC];
}

Blockly.Python['sp_tez'] = function(block) {
  const value = Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '0';
  return [`sp.tez(${value})`, Python.ORDER_ATOMIC];
}
