import * as Blockly from 'blockly/core';
import 'blockly/python';
const Python = Blockly.Python;
const Variables = Blockly.Variables;
const {NameType} = Blockly.Names;

Blockly.Python['test_react_field'] = function (block) {
  return 'console.log(\'custom block\');\n';
};

Blockly.Python['test_react_date_field'] = function (block) {
  return 'console.log(' + block.getField('DATE').getText() + ');\n';
};

Blockly.Python['contract'] = function (block) {
  console.log('contact', block)
  let branch = Python.valueToCode(block, 'ADD0', Python.ORDER_NONE);
  console.log('branch~~~~~~~~~~~~~~~~', branch)
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
  return 'console.log("python.contract");\n';
};

Blockly.Python['entrypoint_defnoreturn'] = function (block) {
   // Define a procedure with a return value.
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  const globals = [];
  const workspace = block.workspace;
  const usedVariables = Variables.allUsedVarModels(workspace) || [];
  for (let i = 0, variable; (variable = usedVariables[i]); i++) {
    const varName = variable.name;
    if (block.getVars().indexOf(varName) === -1) {
      globals.push(Python.nameDB_.getName(varName, NameType.VARIABLE));
    }
  }
  // Add developer variables.
  const devVarList = Variables.allDeveloperVariables(workspace);
  for (let i = 0; i < devVarList.length; i++) {
    globals.push(
        Python.nameDB_.getName(devVarList[i], NameType.DEVELOPER_VARIABLE));
  }

  const globalString = globals.length ?
      Python.INDENT + 'global ' + globals.join(', ') + '\n' :
      '';
  const funcName =
      Python.nameDB_.getName(block.getFieldValue('NAME'), NameType.PROCEDURE);
  console.log('funcName~~~~~~~~~~~~', funcName)
  let xfix1 = '';
  if (Python.STATEMENT_PREFIX) {
    xfix1 += Python.injectId(Python.STATEMENT_PREFIX, block);
  }
  if (Python.STATEMENT_SUFFIX) {
    xfix1 += Python.injectId(Python.STATEMENT_SUFFIX, block);
  }
  if (xfix1) {
    xfix1 = Python.prefixLines(xfix1, Python.INDENT);
  }
  let loopTrap = '';
  if (Python.INFINITE_LOOP_TRAP) {
    loopTrap = Python.prefixLines(
        Python.injectId(Python.INFINITE_LOOP_TRAP, block), Python.INDENT);
  }
  let branch = Python.statementToCode(block, 'STACK');
  let returnValue =
      Python.valueToCode(block, 'RETURN', Python.ORDER_NONE) || '';
  let xfix2 = '';
  if (branch && returnValue) {
    // After executing the function body, revisit this block for the return.
    xfix2 = xfix1;
  }
  if (returnValue) {
    returnValue = Python.INDENT + 'return ' + returnValue + '\n';
  } else if (!branch) {
    branch = Python.PASS;
  }
  const args = [];
  const variables = block.getVars();
  for (let i = 0; i < variables.length; i++) {
    args[i] = Python.nameDB_.getName(variables[i], NameType.VARIABLE);
  }
  let code = 'def ' + funcName + '(' + args.join(', ') + '):\n' + globalString +
      xfix1 + loopTrap + branch + xfix2 + returnValue;
  code = Python.scrub_(block, code);
  // Add % so as not to collide with helper functions in definitions list.
  Python.definitions_['%' + funcName] = code;
  return null;
};
