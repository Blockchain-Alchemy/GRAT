import * as Blockly from 'blockly/core';
import 'blockly/python';
const Python = Blockly.Python;

Blockly.Python['sp_now'] = function(block) {
  // sp.now data type.
  return ['sp.now', Python.ORDER_ATOMIC];
}

Blockly.Python['sp_timestamp'] = function(block) {
  console.log('sp_timestamp', block)
  const seconds = Python.valueToCode(block, 'SECONDS', Python.ORDER_NONE) || '0';
  return [`sp.timestamp(${seconds})`, Python.ORDER_ATOMIC];
}
