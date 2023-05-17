import React, { useRef, useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Blockly from 'blockly/core';
import { useDispatch, useSelector } from 'react-redux';
import BlocklyComponent from '../Blockly';
import './Workspace.css';
import Switch from '../Switch/Switch';
import BlockCategory from '../BlockCategory/BlockCategory';
import ControlPanel from '../ControlPanel/ControlPanel';
import CodeView from '../CodeView/CodeView';
import Loader from '../Loader/Loader';
import {
  updateLessonStateAction,
  setContractNameAction,
} from '../../store/actions';

const Workspace = ({ unityContext, loading, recipe }) => {
  const dispatch = useDispatch();
  const workspaceRef = useRef();
  const footerRef = useRef();
  const controlRef = useRef();
  const [tabIndex, setTabIndex] = useState(1);
  const timeline = useSelector((state) => state.LessonState.timeline);

  useEffect(() => {
    timeline >= 0 && unityContext.send('GameManager', 'XP');
  }, [unityContext, timeline]);

  const handleBlockUpdate = useCallback(
    (event) => {
      if (!recipe || !recipe.recipes || timeline + 1 >= recipe.recipes.length) {
        return;
      }
      const workspace = workspaceRef.current.workspace;
      const recipeItem = recipe.recipes[timeline + 1];
      if (recipeItem) {
        const exp = timeline + 1;
        if (
          recipeItem.event.type === 'BLOCK_CREATE' &&
          event.type === Blockly.Events.BLOCK_CREATE
        ) {
          if (event.json.type === recipeItem.block.type) {
            dispatch(updateLessonStateAction(exp));
          }
        } else if (
          recipeItem.event.type === 'BLOCK_CHANGE' &&
          event.type === Blockly.Events.BLOCK_CHANGE
        ) {
          if (event.name === recipeItem.event.name) {
            const block = workspace.getBlockById(event.blockId);
            if (block && block.type === recipeItem.block.type) {
              if (recipeItem.block.name) {
                if (
                  recipeItem.block.name.toLowerCase() ===
                  event.newValue.toLowerCase()
                ) {
                  dispatch(updateLessonStateAction(exp));
                }
              } else if (recipeItem.block.variable) {
                const variable = Blockly.Variables.getVariable(
                  workspace,
                  event.newValue
                );
                if (
                  recipeItem.block.variable.toLowerCase() ===
                  variable.name.toLowerCase()
                ) {
                  dispatch(updateLessonStateAction(exp));
                }
              } else {
                dispatch(updateLessonStateAction(exp));
              }
              if (recipeItem.block.type === 'contract') {
                dispatch(setContractNameAction(event.newValue));
              }
            }
          }
        } else if (
          recipeItem.event.type === 'BLOCK_MOVE' &&
          event.type === Blockly.Events.BLOCK_MOVE
        ) {
          if (recipeItem.block.parent) {
            const parentId = event.newParentId;
            if (parentId) {
              const block = workspace.getBlockById(parentId);
              if (block && block.type === recipeItem.block.parent.type) {
                dispatch(updateLessonStateAction(exp));
              }
            }
          }
        } else if (
          recipeItem.event.type === 'VAR_RENAME' &&
          event.type === 'var_rename'
        ) {
          if (recipeItem.block.name === event.newName) {
            dispatch(updateLessonStateAction(exp));
          }
        }
      }
    },
    [dispatch, recipe, timeline]
  );

  useEffect(() => {
    const height = footerRef.current.clientHeight;
    const workspaceHtml = ReactDOM.findDOMNode(
      document.querySelector('rect.blocklyMainBackground')
    );
    workspaceHtml.style.height = `calc(100% - ${height}px)`;
    const trash = ReactDOM.findDOMNode(
      document.querySelector('g.blocklyTrash image')
    );
    const trash1 = ReactDOM.findDOMNode(
      document.querySelector('g.blocklyTrash image:last-child')
    );
    trash.style.transform = `translate(20px, -${height}px)`;
    trash1.style.transform = `translate(20px, -${height}px)`;

    if (controlRef.current) {
      controlRef.current.style.bottom = `${height}px`;
      controlRef.current.style.transform = `translate(-130%, -20px)`;
    }

    const workspace = workspaceRef.current.workspace;
    workspace.addChangeListener(handleBlockUpdate);
  }, [dispatch, handleBlockUpdate]);

  const handleSwitch = (tabIndex) => {
    setTabIndex(tabIndex);
  };

  return (
    <div className="workspace">
      <Switch tabIndex={tabIndex} handleSwitch={handleSwitch} />

      <div className={tabIndex === 1 ? '' : 'hidden'}>
        <BlocklyComponent
          ref={workspaceRef}
          readOnly={false}
          trashcan={true}
          media={'media/'}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true,
          }}
          recipe={recipe}
        >
          <BlockCategory />
        </BlocklyComponent>
        <div ref={footerRef} className="bg-gray-300 control-panel">
          <ControlPanel
            workspace={workspaceRef.current?.workspace}
            unityContext={unityContext}
          />
          {/* <ConsoleView /> */}
        </div>
      </div>

      {tabIndex === 2 && <CodeView />}

      {loading && <Loader />}
    </div>
  );
};

export default Workspace;
