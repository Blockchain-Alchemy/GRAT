import React, { useRef, useEffect } from "react";
import "./App.css";
import * as api from "./service";
import Blockly from "blockly/core";
import BlocklyComponent, {
  Block,
  Category,
  Value,
  Field,
  Shadow,
  Mutation,
} from "./Blockly";
import BlocklyPy from "blockly/python";
import "./blocks/customblocks";
import "./blocks/contract";
import "./blocks/construct";
import "./blocks/entrypoint";
import "./blocks/procedures";
import "./blocks/mutez";
import "./blocks/map";
import "./blocks/timestamps";
import "./blocks/utils";
import "./generator/javsacript";
import "./generator/python";
import { CompileField, ConsoleField, ProjectsField } from "./fields/CustomField";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "Build/1.loader.js",
  dataUrl: "Build/1.data.gz",
  frameworkUrl: "Build/1.framework.js.gz",
  codeUrl: "Build/1.wasm.gz",
});  

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

  /*useEffect(() => {
    api.compile().then(result => console.log(result));
  }, [])*/
  
  const generateCode = () => {
    const code = BlocklyPy.workspaceToCode(simpleWorkspace.current.workspace);
    console.log('Result:');
    console.log(code);
  };

  const compileCode = () => {
    console.log('compile...');
    const code = BlocklyPy.workspaceToCode(simpleWorkspace.current.workspace);
    const base64 = Buffer.from(code).toString('base64');
    api.compile('untitled', base64);
  }

  return (
    <div className="App">
      <header className="App-header">
          <div className="absolute">
            <img src="grat.png" className="object-fill h-24" alt="Grat"/>
          </div>
          <div className="absolute bottom-3 right-5 bg-gray-300 p-3 rounded-md font-bold">
            <div className="text-xl text-center">Contract Control Panel</div>
            <p className="text-base text-center pt-5">
              <button className="mx-1 px-2 py-1 bg-white shadow-md rounded-md font-semibold" onClick={generateCode}>Convert</button>
              <button className="mx-1 px-2 py-1 bg-white shadow-md rounded-md font-semibold" onClick={generateCode}>Save</button>
              <button className="ml-1 px-2 py-1 bg-white shadow-md rounded-md font-semibold" onClick={compileCode}>Compile</button>
            </p>
          </div>
      </header>
      <div className="main">
        <div id="blockTitle" className="text-xl font-semibold">Blocks</div>
        <div id="workspaceTitle" className="text-xl font-semibold">Workspace</div>
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
              {/* <Button
                text="Create contract variables"
                callbackKey="CREATE_CONTRACT_VARIABLE"
              ></Button> */}
              <Block type="contract" />
              <Block type="construct_defnoreturn" />
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
              <Block type="sp_send" />
              <Block type="sp_transfer" />
            </Category>
            <Category name="Address" colour="%{BKY_VARIABLES_HUE}">
              <Block type="sp_address">
                <Value name="VALUE">
                  <Shadow type="text">
                    <Field name="TEXT">KT1Tezooo...PVdv3</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="sp_self" />
              <Block type="sp_sender" />
              <Block type="sp_source" />
              <Block type="sp_to_address" />
            </Category>
            <Category name="Maps" colour="%{BKY_VARIABLES_HUE}">
              <Block type="sp_pair" />
              <Block type="sp_map" />
            </Category>
            <Category name="Mutez" colour="%{BKY_VARIABLES_HUE}">
              <Block type="sp_mutez">
                <Value name="VALUE">
                  <Shadow type="math_number">
                    <Field name="NUM">10</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="sp_tez">
                <Value name="VALUE">
                  <Shadow type="math_number">
                    <Field name="NUM">10</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="sp_amount" />
              <Block type="sp_balance" />
              <Block type="sp_split_tokens" />
            </Category>
            <Category name="Timestamps" colour="%{BKY_VARIABLES_HUE}">
              <Block type="sp_now" />
              <Block type="sp_timestamp_from_utc_now" />
              <Block type="sp_timestamp_of">
                <Value name="SECONDS">
                  <Shadow type="math_number">
                    <Field name="NUM">5</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="sp_timestamp_add_seconds">
                <Value name="VALUE">
                  <Shadow type="math_number">
                    <Field name="NUM">3</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="sp_timestamp_add_minutes">
                <Value name="VALUE">
                  <Shadow type="math_number">
                    <Field name="NUM">2</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="sp_timestamp_add_hours">
                <Value name="VALUE">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="sp_timestamp_add_days">
                <Value name="VALUE">
                  <Shadow type="math_number">
                    <Field name="NUM">1</Field>
                  </Shadow>
                </Value>
              </Block>
            </Category>
            <Category name="Smartpy List" colour="%{BKY_VARIABLES_HUE}">
              {/* <Block type="sp_length_of">
              </Block> */}
            </Category>
            <Category
              name="Functions"
              colour="%{BKY_PROCEDURES_HUE}"
              custom="PROCEDURE"
            />
        </BlocklyComponent>
        <div className="absolute bottom-0 right-1/4 w-3/5">
          <CompileField></CompileField>
          <ConsoleField></ConsoleField>
        </div>
        <div className="absolute bottom-0 right-0 h-4/5 w-1/4">
          <Unity className="w-full h-2/5" unityContext={unityContext} />
          <ProjectsField></ProjectsField>
        </div>
      </div>
    </div>
  );
};

export default App;
