import * as Blockly from 'blockly/core';
import 'blockly/python';
const Python = Blockly.Python;
const {NameType} = Blockly.Names;

Blockly.Python['sp_now'] = function(block) {
  // sp.now data type.
  return ['sp.now', Python.ORDER_ATOMIC];
}

Blockly.Python['sp_timestamp'] = function(block) {
  const seconds = Python.valueToCode(block, 'SECONDS', Python.ORDER_NONE) || '0';
  return [`sp.timestamp(${seconds})`, Python.ORDER_ATOMIC];
}

Blockly.Python['sp_timestamp_add_seconds'] = function(block) {
  const varName = Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  const value = Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '0';
  return [`${varName}.add_seconds(${value})`, Python.ORDER_ATOMIC];
}
