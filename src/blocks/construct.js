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
  procedureContextMenu,
  procedureDefMutator,
  procedureDefHelper,
  procedureVars,
} from './procedures';

Blockly.Msg['PROCEDURE_VARIABLE'] = 'variable:';

// Delete original blocks because there's no way to unregister them:
// https://github.com/google/blockly-samples/issues/768#issuecomment-885663394
delete Blockly.Blocks['construct_defnoreturn'];
delete Blockly.Blocks['construct_defreturn'];

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

/**
 * Defines the what are essentially info-getters for the functions_defnoreturn
 * block.
 * @type {{callType_: string, getProcedureDef: (function(): Array)}}
 */
 export const getDefNoReturn = {
  /**
   * Returns info about this block to be used by the Blockly.Procedures.
   * @return {Array} An array of info.
   * @this {Blockly.Block}
   */
  getProcedureDef: function() {
    const argNames = this.argData_.map((elem) => elem.model.name);
    return ['construct', argNames, false];
  },

  /**
   * Used by the context menu to create a caller block.
   * @type {string}
   */
  callType_: 'functions_callnoreturn',
};

Blockly.Extensions.registerMixin('get_construct_def_no_return', getDefNoReturn);

Blockly.Extensions.registerMixin(
    'construct_context_menu', procedureContextMenu);

Blockly.Extensions.registerMutator('construct_def_mutator',
    procedureDefMutator, procedureDefHelper);

Blockly.Extensions.register('construct_vars', procedureVars);
