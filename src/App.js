import React, { useRef } from "react";
import "./App.css";
import Workspace from "./components/Workspace/Workspace";
import ProjectView from './components/ProjectView/ProjectView';
import "./generator/javsacript";
import "./generator/python";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "Build/1.loader.js",
  dataUrl: "Build/1.data",
  frameworkUrl: "Build/1.framework.js",
  codeUrl: "Build/1.wasm",
});

const App = () => {
  const sideRef = useRef();

  return (
    <div className="App">
      <Workspace />
      <div
        className="absolute bottom-0 right-0 w-1/4"
        id="Sidebar"
        ref={sideRef}
      >
        <Unity className="w-full h-2/5" unityContext={unityContext} />
        <ProjectView />
      </div>
    </div>
  );
};

export default App;
