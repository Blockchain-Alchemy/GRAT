import * as Blockly from "blockly/core";

const ContextMenu = Blockly.ContextMenu;
const Events = Blockly.Events;
const Procedures = Blockly.Procedures;
const Variables = Blockly.Variables;
const Xml = Blockly.Xml;
const xmlUtils = Blockly.utils.xml;
//  const {Align} = Blockly.Input;
//  const {config} = Blockly.config;
//  const {FieldCheckbox} = 'Blockly.FieldCheckbox';
//  const {FieldLabel} = Blockly.FieldLabel;
const { FieldTextInput, Msg, Mutator, Names } = Blockly;

/**
 * Common properties for the procedure_defnoreturn and
 * procedure_defreturn blocks.
 */
const PROCEDURE_DEF_COMMON = {
  /**
   * Add or remove the statement block from this function definition.
   * @param {boolean} hasStatements True if a statement block is needed.
   * @this {Block}
   */
  setStatements_: function (hasStatements) {
    if (this.hasStatements_ === hasStatements) {
      return;
    }
    if (hasStatements) {
      this.appendStatementInput("STACK").appendField(
        Msg["PROCEDURES_DEFNORETURN_DO"]
      );
      if (this.getInput("RETURN")) {
        this.moveInputBefore("STACK", "RETURN");
      }
    } else {
      this.removeInput("STACK", true);
    }
    this.hasStatements_ = hasStatements;
  },
  /**
   * Update the display of parameters for this procedure definition block.
   * @private
   * @this {Block}
   */
  updateParams_: function () {
    // Merge the arguments into a human-readable list.
    let paramString = "";
    if (this.arguments_.length) {
      paramString =
        Msg["PROCEDURES_BEFORE_PARAMS"] + " " + this.arguments_.join(", ");
    }
    // The params field is deterministic based on the mutation,
    // no need to fire a change event.
    Events.disable();
    try {
      this.setFieldValue(paramString, "PARAMS");
    } finally {
      Events.enable();
    }
  },
  /**
   * Create XML to represent the argument inputs.
   * Backwards compatible serialization implementation.
   * @param {boolean=} opt_paramIds If true include the IDs of the parameter
   *     quarks.  Used by Procedures.mutateCallers for reconnection.
   * @return {!Element} XML storage element.
   * @this {Block}
   */
  mutationToDom: function (opt_paramIds) {
    const container = xmlUtils.createElement("mutation");
    if (opt_paramIds) {
      container.setAttribute("name", this.getFieldValue("NAME"));
    }
    for (let i = 0; i < this.argumentVarModels_.length; i++) {
      const parameter = xmlUtils.createElement("arg");
      const argModel = this.argumentVarModels_[i];
      parameter.setAttribute("name", argModel.name);
      parameter.setAttribute("varid", argModel.getId());
      if (opt_paramIds && this.paramIds_) {
        parameter.setAttribute("paramId", this.paramIds_[i]);
      }
      container.appendChild(parameter);
    }

    // Save whether the statement input is visible.
    if (!this.hasStatements_) {
      container.setAttribute("statements", "false");
    }
    return container;
  },
  /**
   * Parse XML to restore the argument inputs.
   * Backwards compatible serialization implementation.
   * @param {!Element} xmlElement XML storage element.
   * @this {Block}
   */
  domToMutation: function (xmlElement) {
    this.arguments_ = [];
    this.argumentVarModels_ = [];
    for (let i = 0, childNode; (childNode = xmlElement.childNodes[i]); i++) {
      if (childNode.nodeName.toLowerCase() === "arg") {
        const varName = childNode.getAttribute("name");
        const varId =
          childNode.getAttribute("varid") || childNode.getAttribute("varId");
        this.arguments_.push(varName);
        const variable = Variables.getOrCreateVariablePackage(
          this.workspace,
          varId,
          varName,
          ""
        );
        if (variable !== null) {
          this.argumentVarModels_.push(variable);
        } else {
          console.log(
            "Failed to create a variable with name " + varName + ", ignoring."
          );
        }
      }
    }
    this.updateParams_();
    Procedures.mutateCallers(this);

    // Show or hide the statement input.
    this.setStatements_(xmlElement.getAttribute("statements") !== "false");
  },
  /**
   * Returns the state of this block as a JSON serializable object.
   * @return {?{params: (!Array<{name: string, id: string}>|undefined),
   *     hasStatements: (boolean|undefined)}} The state of this block, eg the
   *     parameters and statements.
   */
  saveExtraState: function () {
    if (!this.argumentVarModels_.length && this.hasStatements_) {
      return null;
    }
    const state = Object.create(null);
    if (this.argumentVarModels_.length) {
      state["params"] = [];
      for (let i = 0; i < this.argumentVarModels_.length; i++) {
        state["params"].push({
          // We don't need to serialize the name, but just in case we decide
          // to separate params from variables.
          name: this.argumentVarModels_[i].name,
          id: this.argumentVarModels_[i].getId(),
        });
      }
    }
    if (!this.hasStatements_) {
      state["hasStatements"] = false;
    }
    return state;
  },
  /**
   * Applies the given state to this block.
   * @param {*} state The state to apply to this block, eg the parameters and
   *     statements.
   */
  loadExtraState: function (state) {
    this.arguments_ = [];
    this.argumentVarModels_ = [];
    if (state["params"]) {
      for (let i = 0; i < state["params"].length; i++) {
        const param = state["params"][i];
        const variable = Variables.getOrCreateVariablePackage(
          this.workspace,
          param["id"],
          param["name"],
          ""
        );
        this.arguments_.push(variable.name);
        this.argumentVarModels_.push(variable);
      }
    }
    this.updateParams_();
    Procedures.mutateCallers(this);
    this.setStatements_(state["hasStatements"] === false ? false : true);
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Workspace} workspace Mutator's workspace.
   * @return {!Block} Root block in mutator.
   * @this {Block}
   */
  decompose: function (workspace) {
    /*
     * Creates the following XML:
     * <block type="procedures_mutatorcontainer">
     *   <statement name="STACK">
     *     <block type="procedures_mutatorarg">
     *       <field name="NAME">arg1_name</field>
     *       <next>etc...</next>
     *     </block>
     *   </statement>
     * </block>
     */

    const containerBlockNode = xmlUtils.createElement("block");
    containerBlockNode.setAttribute("type", "procedures_mutatorcontainer");
    const statementNode = xmlUtils.createElement("statement");
    statementNode.setAttribute("name", "STACK");
    containerBlockNode.appendChild(statementNode);

    let node = statementNode;
    for (let i = 0; i < this.arguments_.length; i++) {
      const argBlockNode = xmlUtils.createElement("block");
      argBlockNode.setAttribute("type", "procedures_mutatorarg");
      const fieldNode = xmlUtils.createElement("field");
      fieldNode.setAttribute("name", "NAME");
      const argumentName = xmlUtils.createTextNode(this.arguments_[i]);
      fieldNode.appendChild(argumentName);
      argBlockNode.appendChild(fieldNode);
      const nextNode = xmlUtils.createElement("next");
      argBlockNode.appendChild(nextNode);

      node.appendChild(argBlockNode);
      node = nextNode;
    }

    const containerBlock = Xml.domToBlock(containerBlockNode, workspace);

    if (this.type === "procedures_defreturn") {
      containerBlock.setFieldValue(this.hasStatements_, "STATEMENTS");
    } else {
      containerBlock.removeInput("STATEMENT_INPUT");
    }

    // Initialize procedure's callers with blank IDs.
    Procedures.mutateCallers(this);
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Block} containerBlock Root block in mutator.
   * @this {Block}
   */
  compose: function (containerBlock) {
    // Parameter list.
    this.arguments_ = [];
    this.paramIds_ = [];
    this.argumentVarModels_ = [];
    let paramBlock = containerBlock.getInputTargetBlock("STACK");
    while (paramBlock && !paramBlock.isInsertionMarker()) {
      const varName = paramBlock.getFieldValue("NAME");
      this.arguments_.push(varName);
      const variable = this.workspace.getVariable(varName, "");
      this.argumentVarModels_.push(variable);

      this.paramIds_.push(paramBlock.id);
      paramBlock =
        paramBlock.nextConnection && paramBlock.nextConnection.targetBlock();
    }
    this.updateParams_();
    Procedures.mutateCallers(this);

    // Show/hide the statement input.
    let hasStatements = containerBlock.getFieldValue("STATEMENTS");
    if (hasStatements !== null) {
      hasStatements = hasStatements === "TRUE";
      if (this.hasStatements_ !== hasStatements) {
        if (hasStatements) {
          this.setStatements_(true);
          // Restore the stack, if one was saved.
          Mutator.reconnect(this.statementConnection_, this, "STACK");
          this.statementConnection_ = null;
        } else {
          // Save the stack, then disconnect it.
          const stackConnection = this.getInput("STACK").connection;
          this.statementConnection_ = stackConnection.targetConnection;
          if (this.statementConnection_) {
            const stackBlock = stackConnection.targetBlock();
            stackBlock.unplug();
            stackBlock.bumpNeighbours();
          }
          this.setStatements_(false);
        }
      }
    }
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array<string>} List of variable names.
   * @this {Block}
   */
  getVars: function () {
    return this.arguments_;
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array<!VariableModel>} List of variable models.
   * @this {Block}
   */
  getVarModels: function () {
    return this.argumentVarModels_;
  },
  /**
   * Notification that a variable is renaming.
   * If the ID matches one of this block's variables, rename it.
   * @param {string} oldId ID of variable to rename.
   * @param {string} newId ID of new variable.  May be the same as oldId, but
   *     with an updated name.  Guaranteed to be the same type as the old
   *     variable.
   * @override
   * @this {Block}
   */
  renameVarById: function (oldId, newId) {
    const oldVariable = this.workspace.getVariableById(oldId);
    if (oldVariable.type !== "") {
      // Procedure arguments always have the empty type.
      return;
    }
    const oldName = oldVariable.name;
    const newVar = this.workspace.getVariableById(newId);

    let change = false;
    for (let i = 0; i < this.argumentVarModels_.length; i++) {
      if (this.argumentVarModels_[i].getId() === oldId) {
        this.arguments_[i] = newVar.name;
        this.argumentVarModels_[i] = newVar;
        change = true;
      }
    }
    if (change) {
      this.displayRenamedVar_(oldName, newVar.name);
      Procedures.mutateCallers(this);
    }
  },
  /**
   * Notification that a variable is renaming but keeping the same ID.  If the
   * variable is in use on this block, rerender to show the new name.
   * @param {!VariableModel} variable The variable being renamed.
   * @package
   * @override
   * @this {Block}
   */
  updateVarName: function (variable) {
    const newName = variable.name;
    let change = false;
    let oldName;
    for (let i = 0; i < this.argumentVarModels_.length; i++) {
      if (this.argumentVarModels_[i].getId() === variable.getId()) {
        oldName = this.arguments_[i];
        this.arguments_[i] = newName;
        change = true;
      }
    }
    if (change) {
      this.displayRenamedVar_(oldName, newName);
      Procedures.mutateCallers(this);
    }
  },
  /**
   * Update the display to reflect a newly renamed argument.
   * @param {string} oldName The old display name of the argument.
   * @param {string} newName The new display name of the argument.
   * @private
   * @this {Block}
   */
  displayRenamedVar_: function (oldName, newName) {
    this.updateParams_();
    // Update the mutator's variables if the mutator is open.
    if (this.mutator && this.mutator.isVisible()) {
      const blocks = this.mutator.workspace_.getAllBlocks(false);
      for (let i = 0, block; (block = blocks[i]); i++) {
        if (
          block.type === "procedures_mutatorarg" &&
          Names.equals(oldName, block.getFieldValue("NAME"))
        ) {
          block.setFieldValue(newName, "NAME");
        }
      }
    }
  },
  /**
   * Add custom menu options to this block's context menu.
   * @param {!Array} options List of menu options to add to.
   * @this {Block}
   */
  customContextMenu: function (options) {
    if (this.isInFlyout) {
      return;
    }
    // Add option to create caller.
    const option = { enabled: true };
    const name = this.getFieldValue("NAME");
    option.text = Msg["PROCEDURES_CREATE_DO"].replace("%1", name);
    const xmlMutation = xmlUtils.createElement("mutation");
    xmlMutation.setAttribute("name", name);
    for (let i = 0; i < this.arguments_.length; i++) {
      const xmlArg = xmlUtils.createElement("arg");
      xmlArg.setAttribute("name", this.arguments_[i]);
      xmlMutation.appendChild(xmlArg);
    }
    const xmlBlock = xmlUtils.createElement("block");
    xmlBlock.setAttribute("type", this.callType_);
    xmlBlock.appendChild(xmlMutation);
    option.callback = ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);

    // Add options to create getters for each parameter.
    if (!this.isCollapsed()) {
      for (let i = 0; i < this.argumentVarModels_.length; i++) {
        const argOption = { enabled: true };
        const argVar = this.argumentVarModels_[i];
        argOption.text = Msg["VARIABLES_SET_CREATE_GET"].replace(
          "%1",
          argVar.name
        );

        const argXmlField = Variables.generateVariableFieldDom(argVar);
        const argXmlBlock = xmlUtils.createElement("block");
        argXmlBlock.setAttribute("type", "variables_get");
        argXmlBlock.appendChild(argXmlField);
        argOption.callback = ContextMenu.callbackFactory(this, argXmlBlock);
        options.push(argOption);
      }
    }
  },
};

Blockly.Blocks["entrypoint"] = {
  ...PROCEDURE_DEF_COMMON,
  /**
   * Block for defining a procedure with no return value.
   * @this {Block}
   */
  init: function () {
    const initName = Procedures.findLegalName("untitled", this);
    const nameField = new FieldTextInput(initName, Procedures.rename);
    nameField.setSpellcheck(false);
    this.appendDummyInput("TOPROW")
      .appendField("entrypoint")
      .appendField(nameField, "NAME")
      .appendField("", "PARAMS");
    this.setMutator(new Mutator(["procedures_mutatorarg"]));
    if (
      (this.workspace.options.comments ||
        (this.workspace.options.parentWorkspace &&
          this.workspace.options.parentWorkspace.options.comments)) &&
      Msg["PROCEDURES_DEFNORETURN_COMMENT"]
    ) {
      this.setCommentText(Msg["PROCEDURES_DEFNORETURN_COMMENT"]);
    }
    this.setStyle("procedure_blocks");
    this.setTooltip(Msg["PROCEDURES_DEFNORETURN_TOOLTIP"]);
    this.setHelpUrl(Msg["PROCEDURES_DEFNORETURN_HELPURL"]);
    this.arguments_ = [];
    this.argumentVarModels_ = [];
    this.setStatements_(true);
    this.statementConnection_ = null;
  },
  /**
   * Return the signature of this procedure definition.
   * @return {!Array} Tuple containing three elements:
   *     - the name of the defined procedure,
   *     - a list of all its arguments,
   *     - that it DOES NOT have a return value.
   * @this {Block}
   */
  getProcedureDef: function () {
    return [this.getFieldValue("NAME"), this.arguments_, false];
  },
  callType_: "entrypoint_callnoreturn",
};
