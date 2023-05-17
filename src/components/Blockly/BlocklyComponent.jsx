import React from "react";
import "./BlocklyComponent.css";

import Blockly from "blockly/core";
import locale from "blockly/msg/en";
import "blockly/blocks";
import '@blockly/block-plus-minus';

Blockly.setLocale(locale);

class BlocklyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.blocklyDiv = React.createRef();
    this.toolbox = React.createRef();
  }

  componentDidMount() {
    const { initialXml, children, ...rest } = this.props;
    this.primaryWorkspace = Blockly.inject(this.blocklyDiv.current, {
      toolbox: this.toolbox.current,
      ...rest,
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(initialXml),
        this.primaryWorkspace
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.recipe !== this.props.recipe) {
      this.clearWorkspace();
    }
  }

  get workspace() {
    return this.primaryWorkspace;
  }

  setXml(xml) {
    Blockly.Xml.domToWorkspace(
      Blockly.Xml.textToDom(xml),
      this.primaryWorkspace
    );
  }

  clearWorkspace = () => {
    console.log('clearWorkspace');
    this.workspace.clear();
  }

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <div ref={this.blocklyDiv} id="blocklyDiv" />
        <xml
          xmlns="https://developers.google.com/blockly/xml"
          is="blockly"
          style={{ display: "none" }}
          ref={this.toolbox}
        >
          {children}
        </xml>
      </React.Fragment>
    );
  }
}

export default BlocklyComponent;
