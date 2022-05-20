import * as Blockly from 'blockly/core';
import 'blockly/python';
const Python = Blockly.Python;

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
  const tkey = block.getFieldValue('KEY1')
  const tvalue = block.getFieldValue('KEY2')
  return [`sp.big_map(tkey = ${tkey}, tvalue = ${tvalue})`, Python.ORDER_ATOMIC];
}

Blockly.Python['map_variables_set'] = function(block) {
  const tkey = block.getFieldValue('KEY1')
  const tvalue = block.getFieldValue('KEY2')
  return [`sp.big_map(tkey = ${tkey}, tvalue = ${tvalue})`, Python.ORDER_ATOMIC];
}
