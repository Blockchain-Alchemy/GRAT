/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Changes the procedure blocks to use a +/- mutator UI.
 */

import Blockly from 'blockly/core';
import {
  getDefNoReturn,
  getDefReturn,
  procedureContextMenu,
  procedureDefMutator,
  procedureDefHelper,
  procedureRename,
  procedureVars,
} from './procedures';

Blockly.Msg['PROCEDURE_VARIABLE'] = 'variable:';

// Delete original blocks because there's no way to unregister them:
// https://github.com/google/blockly-samples/issues/768#issuecomment-885663394
delete Blockly.Blocks['entrypoint_defnoreturn'];
delete Blockly.Blocks['entrypoint_defreturn'];

/* eslint-disable quotes */
Blockly.defineBlocksWithJsonArray([
  {
    "type": "entrypoint_defnoreturn",
    "message0": "entrypoint %1 %2",
    "message1": "%{BKY_PROCEDURES_DEFNORETURN_DO} %1",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "",
      },
      {
        "type": "input_dummy",
        "name": "TOP",
      },
    ],
    "args1": [
      {
        "type": "input_statement",
        "name": "STACK",
      },
    ],
    "output": null,
    "style": "procedure_blocks",
    "helpUrl": "%{BKY_PROCEDURES_DEFNORETURN_HELPURL}",
    "tooltip": "%{BKY_PROCEDURES_DEFNORETURN_TOOLTIP}",
    "extensions": [
      "get_entrypoint_def_no_return",
      "entrypoint_context_menu",
      "entrypoint_rename",
      "entrypoint_vars",
    ],
    "mutator": "entrypoint_def_mutator",
  },
  {
    "type": "entrypoint_defreturn",
    "message0": "%{BKY_PROCEDURES_DEFRETURN_TITLE} %1 %2",
    "message1": "%{BKY_PROCEDURES_DEFRETURN_DO} %1",
    "message2": "%{BKY_PROCEDURES_DEFRETURN_RETURN} %1",
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "",
      },
      {
        "type": "input_dummy",
        "name": "TOP",
      },
    ],
    "args1": [
      {
        "type": "input_statement",
        "name": "STACK",
      },
    ],
    "args2": [
      {
        "type": "input_value",
        "align": "right",
        "name": "RETURN",
      },
    ],
    "style": "procedure_blocks",
    "helpUrl": "%{BKY_PROCEDURES_DEFRETURN_HELPURL}",
    "tooltip": "%{BKY_PROCEDURES_DEFRETURN_TOOLTIP}",
    "extensions": [
      "get_entrypoint_def_return",
      "entrypoint_context_menu",
      "entrypoint_rename",
      "entrypoint_vars",
    ],
    "mutator": "entrypoint_def_mutator",
  },
]);
/* eslint-enable quotes */

Blockly.Extensions.registerMixin('get_entrypoint_def_no_return', getDefNoReturn);

Blockly.Extensions.registerMixin('get_entrypoint_def_return', getDefReturn);

Blockly.Extensions.registerMixin(
    'entrypoint_context_menu', procedureContextMenu);

Blockly.Extensions.registerMutator('entrypoint_def_mutator',
    procedureDefMutator, procedureDefHelper);

Blockly.Extensions.register('entrypoint_rename', procedureRename);


Blockly.Extensions.register('entrypoint_vars', procedureVars);
