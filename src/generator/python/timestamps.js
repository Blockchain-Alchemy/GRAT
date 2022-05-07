import * as Blockly from 'blockly/core';
import 'blockly/python';
const Python = Blockly.Python;
const {NameType} = Blockly.Names;

Blockly.Python['sp_now'] = function(block) {
  // sp.now data type.
  return ['sp.now', Python.ORDER_ATOMIC];
}

Blockly.Python['sp_timestamp_from_utc_now'] = function(block) {
  return ['sp.timestamp_from_utc_now()', Python.ORDER_ATOMIC];
}

Blockly.Python['sp_timestamp_of'] = function(block) {
  const seconds = Python.valueToCode(block, 'SECONDS', Python.ORDER_NONE) || '0';
  return [`sp.timestamp(${seconds})`, Python.ORDER_ATOMIC];
}

Blockly.Python['sp_timestamp_add_seconds'] = function(block) {
  const varName = Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  const value = Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '0';
  return [`${varName}.add_seconds(${value})`, Python.ORDER_ATOMIC];
}

Blockly.Python['sp_timestamp_add_minutes'] = function(block) {
  const varName = Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  const value = Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '0';
  return [`${varName}.add_minutes(${value})`, Python.ORDER_ATOMIC];
}

Blockly.Python['sp_timestamp_add_hours'] = function(block) {
  const varName = Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  const value = Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '0';
  return [`${varName}.add_hours(${value})`, Python.ORDER_ATOMIC];
}

Blockly.Python['sp_timestamp_add_days'] = function(block) {
  const varName = Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE);
  const value = Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '0';
  return [`${varName}.add_days(${value})`, Python.ORDER_ATOMIC];
}

