import * as Blockly from 'blockly/core';
import 'blockly/python';
const Python = Blockly.Python;

Blockly.Python['sp_mutez'] = function(block) {
  const value = Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '0';
  return [`sp.mutez(${value})`, Python.ORDER_ATOMIC];
}

Blockly.Python['sp_tez'] = function(block) {
  const value = Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '0';
  return [`sp.tez(${value})`, Python.ORDER_ATOMIC];
}

Blockly.Python['sp_amount'] = function(block) {
  return ['sp.amount', Python.ORDER_ATOMIC];
}

Blockly.Python['sp_balance'] = function(block) {
  return ['sp.balance', Python.ORDER_ATOMIC];
}

Blockly.Python['sp_split_tokens'] = function(block) {
  const arg1 = Python.valueToCode(block, 'AMOUNT', Python.ORDER_RELATIONAL) || '0';
  const arg2 = Python.valueToCode(block, 'QUANTITY', Python.ORDER_RELATIONAL) || '0';
  const arg3 = Python.valueToCode(block, 'TOTALQUANTITY', Python.ORDER_RELATIONAL) || '0';
  return `sp.split_tokens(${arg1}, ${arg2}, ${arg3})\n`;
}