import * as Blockly from 'blockly/core';
import 'blockly/python';
const Python = Blockly.Python;

Blockly.Python['sp_map'] = function(block) {
  const tkey = Python.valueToCode(block, 'KEY1', Python.ORDER_NONE) || '';
  const tvalue = Python.valueToCode(block, 'KEY2', Python.ORDER_NONE) || '';
  return [`sp.map(tkey = ${tkey}, tvalue = ${tvalue})`, Python.ORDER_ATOMIC];
}

Blockly.Python['sp_big_map'] = function(block) {
  const tkey = Python.valueToCode(block, 'KEY1', Python.ORDER_NONE) || '';
  const tvalue = Python.valueToCode(block, 'KEY2', Python.ORDER_NONE) || '';
  return [`sp.big_map(tkey = ${tkey}, tvalue = ${tvalue})`, Python.ORDER_ATOMIC];
}
