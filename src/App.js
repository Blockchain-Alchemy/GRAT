import React, { useRef, useEffect } from "react";
import "./App.css";
import Blockly from "blockly/core";
import BlocklyComponent, {
  Block,
  Category,
  Value,
  Field,
  Shadow,
  Mutation,
  Button,
} from "./Blockly";
//import BlocklyJS from "blockly/javascript";
import BlocklyPy from "blockly/python";
import "./blocks/customblocks";
import "./blocks/contract";
import "./blocks/entrypoint";
import "./blocks/procedures";
import "./blocks/timestamps";
import "./blocks/utils";
import "./generator/javsacript";
import "./generator/python";

//class App extends React.Component {
const App = () => {
  const simpleWorkspace = useRef();

  useEffect(() => {
    if (simpleWorkspace.current) {
      const workspace = simpleWorkspace.current.workspace;
      workspace.registerButtonCallback('CREATE_CONTRACT_VARIABLE', function (button) {
        Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), undefined, 'contract');
      })
    }
  }, [simpleWorkspace])
  
  const generateCode = () => {
    const code = BlocklyPy.workspaceToCode(simpleWorkspace.current.workspace);
    console.log('Result:');
    console.log(code);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={generateCode}>Convert</button>
        <BlocklyComponent
          ref={simpleWorkspace}
          readOnly={false}
          trashcan={true}
          media={"media/"}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true,
          }}
        >
          <Category name="Logic" colour="%{BKY_LOGIC_HUE}">
            <Block type="controls_if"></Block>
            <Block type="logic_compare"></Block>
            <Block type="logic_operation"></Block>
            <Block type="logic_negate"></Block>
            <Block type="logic_boolean"></Block>
            <Block type="logic_null"></Block>
            <Block type="logic_ternary"></Block>
          </Category>
          <Category name="Loops" colour="%{BKY_LOOPS_HUE}">
            <Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="controls_whileUntil"></Block>
            <Block type="controls_for">
              <Value name="FROM">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
              <Value name="TO">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
              <Value name="BY">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="controls_forEach"></Block>
            <Block type="controls_flow_statements"></Block>
          </Category>
          <Category name="Math" colour="%{BKY_MATH_HUE}">
            <Block type="math_number">
              <Field name="NUM">123</Field>
            </Block>
            <Block type="math_arithmetic">
              <Value name="A">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
              <Value name="B">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_single">
              <Value name="NUM">
                <Shadow type="math_number">
                  <Field name="NUM">9</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_trig">
              <Value name="NUM">
                <Shadow type="math_number">
                  <Field name="NUM">45</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_constant"></Block>
            <Block type="math_number_property">
              <Value name="NUMBER_TO_CHECK">
                <Shadow type="math_number">
                  <Field name="NUM">0</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_round">
              <Value name="NUM">
                <Shadow type="math_number">
                  <Field name="NUM">3.1</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_on_list"></Block>
            <Block type="math_modulo">
              <Value name="DIVIDEND">
                <Shadow type="math_number">
                  <Field name="NUM">64</Field>
                </Shadow>
              </Value>
              <Value name="DIVISOR">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_constrain">
              <Value name="VALUE">
                <Shadow type="math_number">
                  <Field name="NUM">50</Field>
                </Shadow>
              </Value>
              <Value name="LOW">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
              <Value name="HIGH">
                <Shadow type="math_number">
                  <Field name="NUM">100</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_random_int">
              <Value name="FROM">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
              <Value name="TO">
                <Shadow type="math_number">
                  <Field name="NUM">100</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_random_float"></Block>
            <Block type="math_atan2">
              <Value name="X">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
              <Value name="Y">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
            </Block>
          </Category>
          <Category name="Text" colour="%{BKY_TEXTS_HUE}">
            <Block type="text"></Block>
            <Block type="text_join"></Block>
            <Block type="text_append">
              <Value name="TEXT">
                <Shadow type="text"></Shadow>
              </Value>
            </Block>
            <Block type="text_length">
              <Value name="VALUE">
                <Shadow type="text">
                  <Field name="TEXT">abc</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="text_isEmpty">
              <Value name="VALUE">
                <Shadow type="text">
                  <Field name="TEXT"></Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="text_indexOf">
              <Value name="VALUE">
                <Block type="variables_get">
                  <Field name="VAR">text</Field>
                </Block>
              </Value>
              <Value name="FIND">
                <Shadow type="text">
                  <Field name="TEXT">abc</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="text_charAt">
              <Value name="VALUE">
                <Block type="variables_get">
                  <Field name="VAR">text</Field>
                </Block>
              </Value>
            </Block>
            <Block type="text_getSubstring">
              <Value name="STRING">
                <Block type="variables_get">
                  <Field name="VAR">text</Field>
                </Block>
              </Value>
            </Block>
            <Block type="text_changeCase">
              <Value name="TEXT">
                <Shadow type="text">
                  <Field name="TEXT">abc</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="text_trim">
              <Value name="TEXT">
                <Shadow type="text">
                  <Field name="TEXT">abc</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="text_print">
              <Value name="TEXT">
                <Shadow type="text">
                  <Field name="TEXT">abc</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="text_prompt_ext">
              <Value name="TEXT">
                <Shadow type="text">
                  <Field name="TEXT">abc</Field>
                </Shadow>
              </Value>
            </Block>
          </Category>
          <Category name="List" colour="%{BKY_LISTS_HUE}">
            <Block type="lists_create_with">
              <Mutation items="0"></Mutation>
            </Block>
            <Block type="lists_create_with"></Block>
            <Block type="lists_repeat">
              <Value name="NUM">
                <Shadow type="math_number">
                  <Field name="NUM">5</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="lists_length"></Block>
            <Block type="lists_isEmpty"></Block>
            <Block type="lists_indexOf">
              <Value name="VALUE">
                <Block type="variables_get">
                  <Field name="VAR">ary</Field>
                </Block>
              </Value>
            </Block>
            <Block type="lists_getIndex">
              <Value name="VALUE">
                <Block type="variables_get">
                  <Field name="VAR">ary</Field>
                </Block>
              </Value>
            </Block>
            <Block type="lists_setIndex">
              <Value name="LIST">
                <Block type="variables_get">
                  <Field name="VAR">ary</Field>
                </Block>
              </Value>
            </Block>
            <Block type="lists_getSublist">
              <Value name="LIST">
                <Block type="variables_get">
                  <Field name="VAR">ary</Field>
                </Block>
              </Value>
            </Block>
            <Block type="lists_split">
              <Value name="DELIM">
                <Shadow type="text">
                  <Field name="TEXT">,</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="lists_sort"></Block>
          </Category>
          <Category name="Colour" colour="%{BKY_COLOUR_HUE}">
            <Block type="colour_picker"></Block>
            <Block type="colour_random"></Block>
            <Block type="colour_rgb">
              <Value name="RED">
                <Shadow type="math_number">
                  <Field name="NUM">100</Field>
                </Shadow>
              </Value>
              <Value name="GREEN">
                <Shadow type="math_number">
                  <Field name="NUM">50</Field>
                </Shadow>
              </Value>
              <Value name="BLUE">
                <Shadow type="math_number">
                  <Field name="NUM">0</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="colour_blend">
              <Value name="COLOUR1">
                <Shadow type="colour_picker">
                  <Field name="COLOUR">#ff0000</Field>
                </Shadow>
              </Value>
              <Value name="COLOUR2">
                <Shadow type="colour_picker">
                  <Field name="COLOUR">#3333ff</Field>
                </Shadow>
              </Value>
              <Value name="RATIO">
                <Shadow type="math_number">
                  <Field name="NUM">0.5</Field>
                </Shadow>
              </Value>
            </Block>
          </Category>
          {/* <sep></sep> */}
          <Category
            name="Variables"
            colour="%{BKY_VARIABLES_HUE}"
            custom="VARIABLE"
          >
          </Category>
          <Category name="Contract" colour="%{BKY_VARIABLES_HUE}">
            <Button
              text="Create contract variables"
              callbackKey="CREATE_CONTRACT_VARIABLE"
            ></Button>
            <Block type="contract" />
            <Block type="entrypoint_defnoreturn" />
            <Block type="functions_defnoreturn" />
            <Block type="sp_verify" />
            <Block type="sp_verify_message">
              <Value name="MESSAGE">
                <Shadow type="text">
                  <Field name="TEXT">abc</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="sp_now" />
            <Block type="sp_timestamp">
              <Value name="SECONDS">
                <Shadow type="math_number">
                  <Field name="NUM">5</Field>
                </Shadow>
              </Value>
            </Block>
          </Category>
          <Category
            name="Functions"
            colour="%{BKY_PROCEDURES_HUE}"
            custom="PROCEDURE"
          />
        </BlocklyComponent>
      </header>
    </div>
  );
};

export default App;
