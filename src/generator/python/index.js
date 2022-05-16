import * as Blockly from 'blockly/core';
import 'blockly/python';
import './mutez';
import './timestamps';
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
  Python.construct = null;
  Python.entrypoints = {}

  for (let i = 0; i < block.itemCount_; i++) {
    Python.valueToCode(block, 'ADD' + i, Python.ORDER_NONE);
  }

  const contractName = Python.nameDB_.getName(block.getFieldValue('NAME'), NameType.PROCEDURE);

  let code = 'import smartpy as sp\n';
  code += '\n';
  code += `class ${contractName}(sp.Contract):\n`;
  
  /*let construct = 'def __init__(self):\n';
  let initCode = 'self.init()';
  let usedVariables = Variables.allUsedVarModels(block.workspace) || [];
  usedVariables = usedVariables.filter(it => it.type === 'contract');
  if (usedVariables.length > 0) {
    initCode = usedVariables
      .map(it => it.id_)
      .map(id => Python.nameDB_.getName(id, NameType.VARIABLE))
      .map(varName => `${varName} = None`)
      .join(', ');
    initCode = `self.init(${initCode})`;
  }
  construct += Python.prefixLines(`${initCode}\n`, Python.INDENT)
  construct = Python.prefixLines(construct, Python.INDENT)
  code += construct;
  code += '\n';*/
  const construct = Python.construct;
  if (construct) {
    code += Python.prefixLines(construct, Python.INDENT);
    code += '\n';
  }

  for (let key of Object.keys(Python.entrypoints)) {
    let entrypoint = Python.entrypoints[key];
    code += Python.prefixLines(entrypoint, Python.INDENT);
    code += '\n';
  }

  code += '\n';
  code += `sp.add_compilation_target("${contractName}", ${contractName}())`;
  code += '\n';

  return code;
};

Blockly.Python['construct_defnoreturn'] = function (block) {
  let xfix1 = '';
  if (Python.STATEMENT_PREFIX) {
    console.log('construct~~~~~~~~~~~~~~~~~1')
    xfix1 += Python.injectId(Python.STATEMENT_PREFIX, block);
  }
  if (Python.STATEMENT_SUFFIX) {
    console.log('construct~~~~~~~~~~~~~~~~~2')
    xfix1 += Python.injectId(Python.STATEMENT_SUFFIX, block);
  }
  if (xfix1) {
    console.log('construct~~~~~~~~~~~~~~~~~3')
    xfix1 = Python.prefixLines(xfix1, Python.INDENT);
  }

  console.log('construct~~~~~~~~~~~~~~~~~xfix1', xfix1)

  let loopTrap = '';
  if (Python.INFINITE_LOOP_TRAP) {
    console.log('construct~~~~~~~~~~~~~~~~~4')
    loopTrap = Python.prefixLines(
        Python.injectId(Python.INFINITE_LOOP_TRAP, block), Python.INDENT);
  }

  Python.contractStorage = true;
  let branch = Python.statementToCode(block, 'STACK');
  if (!branch) {
    branch = Python.PASS;
  }
  Python.contractStorage = false;
  console.log('construct~~~~~~~~~~~~~~~~~branch', branch)

  const args = ['self'];
  const variables = block.getVars();
  console.log('variables', variables)
  for (let i = 0; i < variables.length; i++) {
    const varg = Python.nameDB_.getName(variables[i], NameType.VARIABLE);
    args.push(varg);
  }

  let code = 'def __init__(' + args.join(', ') + '):\n' + xfix1 + loopTrap + branch;
  code = Python.scrub_(block, code);
  Python.construct = code;

  return null;
};

Blockly.Python['entrypoint_defnoreturn'] = function (block) {
  // Define a procedure with a return value.
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  /*const globals = [];
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
      '';*/

  const funcName = Python.nameDB_.getName(block.getFieldValue('NAME'), NameType.PROCEDURE);
  
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
  let returnValue = Python.valueToCode(block, 'RETURN', Python.ORDER_NONE) || '';
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

  const args = ['self'];
  const variables = block.getVars();
  for (let i = 0; i < variables.length; i++) {
    const varg = Python.nameDB_.getName(variables[i], NameType.VARIABLE);
    args.push(varg);
  }

  let entrypoint = '@sp.entry_point\n';
  let code = entrypoint + 'def ' + funcName + '(' + args.join(', ') + '):\n' +
      xfix1 + loopTrap + branch + xfix2 + returnValue;
  code = Python.scrub_(block, code);
  // Add % so as not to collide with helper functions in definitions list.
  if (!Python.entrypoints) {
    Python.entrypoints = {}
  }
  Python.entrypoints['%' + funcName] = code;
  return null;
};

Blockly.Python['functions_defnoreturn'] = function (block) {
   // Define a procedure with a return value.
  // First, add a 'global' statement for every variable that is not shadowed by
  // a local parameter.
  /*const globals = [];
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
      '';*/

  const funcName = Python.nameDB_.getName(block.getFieldValue('NAME'), NameType.PROCEDURE);
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
  let returnValue = Python.valueToCode(block, 'RETURN', Python.ORDER_NONE) || '';
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
  const args = ['self'];
  const variables = block.getVars();
  for (let i = 0; i < variables.length; i++) {
    const varg = Python.nameDB_.getName(variables[i], NameType.VARIABLE);
    args.push(varg);
  }

  let code = 'def ' + funcName + '(' + args.join(', ') + '):\n' +
      xfix1 + loopTrap + branch + xfix2 + returnValue;
  code = Python.scrub_(block, code);
  
  // Add % so as not to collide with helper functions in definitions list.
  if (!Python.entrypoints) {
    Python.entrypoints = {}
  }
  Python.entrypoints['%' + funcName] = code;
  return null;
};

Blockly.Python['sp_verify'] = function (block) {
  // Comparison operator.
  const OPERATORS = {'EQ': '==', 'NEQ': '!=', 'LT': '<', 'LTE': '<=', 'GT': '>', 'GTE': '>='};
  const operator = OPERATORS[block.getFieldValue('OP')];
  const order = Python.ORDER_RELATIONAL;
  const arg1 = Python.valueToCode(block, 'A', order) || '0';
  const arg2 = Python.valueToCode(block, 'B', order) || '0';
  const message = Python.valueToCode(block, 'MESSAGE', order);
  const msg = message? `, ${message}` : '';
  const code = `sp.verify(${arg1} ${operator} ${arg2}${msg})\n`;
  return code;
};

Python['variables_get'] = function(block) {
  // Variable getter.
  const varId = block.getFieldValue('VAR');
  let varName = Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE)
  
  const usedVariables = Variables.allUsedVarModels(block.workspace) || [];
  console.log('usedVariables1', block)
  const variable = usedVariables.find(it => it.id_ === varId);
  if (variable && Python.contractStorage) {
    varName = `self.data.${varName}`;
  }

  const code = varName;
  return [code, Python.ORDER_ATOMIC];
};

Blockly.Python['variables_set'] = function(block) {
  // Variable setter.
  const varId = block.getFieldValue('VAR');
  let varName = Python.nameDB_.getName(block.getFieldValue('VAR'), NameType.VARIABLE)
  
  const usedVariables = Variables.allUsedVarModels(block.workspace) || [];
  console.log('usedVariables2', block)
  const variable = usedVariables.find(it => it.id_ === varId);
  if (variable && Python.contractStorage) {
    varName = `self.data.${varName}`;
  }

  const argument = Python.valueToCode(block, 'VALUE', Python.ORDER_NONE) || '0';
  return varName + ' = ' + argument + '\n';
};

Blockly.Python['sp_address'] = function(block) {
  const address = Python.valueToCode(block, 'VALUE', Python.ORDER_RELATIONAL) || '';
  return [`sp.address(${address})`, Python.ORDER_ATOMIC];
}

Blockly.Python['sp_self'] = function(block) {
  return ['sp.self', Python.ORDER_ATOMIC];
}

Blockly.Python['sp_sender'] = function(block) {
  return ['sp.sender', Python.ORDER_ATOMIC];
}

Blockly.Python['sp_source'] = function(block) {
  return ['sp.source', Python.ORDER_ATOMIC];
}
