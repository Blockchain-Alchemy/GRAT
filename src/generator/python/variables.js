import * as Blockly from 'blockly/core';
import 'blockly/python';
import './mutez';
import './map';
import './timestamps';
const Python = Blockly.Python;
const Variables = Blockly.Variables;
const {NameType} = Blockly.Names;

Python['contract_variables_get'] = function(block) {
  // Variable getter.
  const varId = block.getFieldValue('VAR');
  let varName = Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE)
  
  const usedVariables = Variables.allUsedVarModels(block.workspace) || [];
  const variable = usedVariables.find(it => it.id_ === varId);
  if (variable) {
    Python.contractVariables.push(varId);
    varName = `self.data.${varName}`;
  }

  const code = varName;
  return [code, Python.ORDER_ATOMIC];
};

Blockly.Python['contract_variables_set'] = function(block) {
  // Variable setter.
  const varId = block.getFieldValue('VAR');
  const varName = Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE)
  
  const usedVariables = Variables.allUsedVarModels(block.workspace) || [];
  const variable = usedVariables.find(it => it.id_ === varId);
  if (variable) {
    Python.contractVariables.push(varId);
    //varName = `self.data.${varName}`;
  }

  const argument = Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '0';
  Python.initStorage.push(varName + ' = ' + argument);
  return `self.data.${varName} = ${argument}\n`;
};
