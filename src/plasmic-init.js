import { initPlasmicLoader } from "@plasmicapp/loader-react";
import App from "App";
import BlockCategory from "components/BlockCategory/BlockCategory";
import Menu from "components/Menu/Menu";
import ProjectView from "components/ProjectView/ProjectView";
import CodeView from "components/CodeView/CodeView";
import Switch from "components/Switch/Switch";
import ControlPanel from "components/ControlPanel/ControlPanel";
import Loader from "components/Loader/Loader";
import BlocklyComponent from "components/Blockly";
import UnityView from "components/Unity/UnityView";
import Workspace from "components/Workspace/Workspace";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "n22P5UCTG6TSvQEwcAgng5",  // ID of a project you are using
      token: "XZqCbLORzGJDoFjuoiTUMipbUk87ttHFvzjz0pwImq59dcbQ3gzWxFYotkoDXpYMH8rxjCxE4EbCjaztLDA"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});

PLASMIC.registerComponent(Menu, {
  name: 'Menu',
  props: {}
});

PLASMIC.registerComponent(ProjectView, {
  name: 'ProjectView',
  props: {}
});

PLASMIC.registerComponent(Switch, {
  name: 'Switch',
  props: {}
});

PLASMIC.registerComponent(BlockCategory, {
  name: 'BlockCategory',
  props: {}
});

PLASMIC.registerComponent(CodeView, {
  name: 'CodeView',
  recipes: 'objects',
  props: {
    className: 'string',
    recipes: 'string'
  }
});

PLASMIC.registerComponent(ControlPanel, {
  name: 'ControlPanel',
  props: {
    className: 'string',
  }
});

PLASMIC.registerComponent(Loader, {
  name: 'Loader',
  props: {
  }
});

PLASMIC.registerComponent(BlocklyComponent, {
  name: 'BlocklyComponent',
  props: {}
});

PLASMIC.registerComponent(UnityView, {
  name: 'UnityView',
  props: {}
});

PLASMIC.registerComponent(Workspace, {
  name: 'Workspace',
  props: {
    children: 'slot'
  }
});
