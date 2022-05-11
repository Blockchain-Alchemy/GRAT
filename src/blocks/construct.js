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
  procedureContextMenu,
  procedureDefMutator,
  procedureDefHelper,
  procedureVars,
} from './procedures';

Blockly.Msg['PROCEDURE_VARIABLE'] = 'variable:';

// Delete original blocks because there's no way to unregister them:
// https://github.com/google/blockly-samples/issues/768#issuecomment-885663394
delete Blockly.Blocks['construct_defnoreturn'];

/* eslint-disable quotes */
Blockly.defineBlocksWithJsonArray([
  {
    "type": "construct_defnoreturn",
    "message0": "construct %1",
    "message1": "%{BKY_PROCEDURES_DEFNORETURN_DO} %1",
    "args0": [
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
      "get_construct_def_no_return",
      "construct_context_menu",
      "construct_vars",
    ],
    "mutator": "construct_def_mutator",
  },
]);
/* eslint-enable quotes */

Blockly.Extensions.registerMixin('get_construct_def_no_return', getDefNoReturn);

Blockly.Extensions.registerMixin(
    'construct_context_menu', procedureContextMenu);

Blockly.Extensions.registerMutator('construct_def_mutator',
    procedureDefMutator, procedureDefHelper);

Blockly.Extensions.register('construct_vars', procedureVars);
