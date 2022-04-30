import * as Blockly from 'blockly/core';
import 'blockly/python';

Blockly.Python['test_react_field'] = function (block) {
    return 'console.log(\'custom block\');\n';
};

Blockly.Python['test_react_date_field'] = function (block) {
    return 'console.log(' + block.getField('DATE').getText() + ');\n';
};

Blockly.Python['contract'] = function (block) {
    return 'console.log("python.contract");\n';
};