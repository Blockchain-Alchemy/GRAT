import * as Blockly from 'blockly/core';
import 'blockly/python';
const Python = Blockly.Python;
const { NameType } = Blockly.Names;

Blockly.Python['sp_record'] = function (block) {
  const params = [];
  for (let i = 0; i < block.itemCount_; i++) {
    const field = Python.valueToCode(block, 'ADD' + i, Python.ORDER_NONE);
    params.push(field);
  }

  const args = params.length > 1 ? params.join(',\n' + Python.INDENT) : params.join(',');
  return [`sp.record(${args})`, Python.ORDER_ATOMIC];
};

Blockly.Python['sp_record_element'] = function (block) {
  const order = Python.ORDER_RELATIONAL;
  const key = Python.valueToCode(block, 'KEY', order) || '0';
  const value = Python.valueToCode(block, 'VALUE', order) || '0';
  return [`${key}=${value}`, Python.ORDER_ATOMIC];
};
