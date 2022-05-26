import React from 'react';
import Unity, {UnityContext} from "react-unity-webgl";
import './UnityView.css';

const unityContext = new UnityContext({
  loaderUrl: 'Build/1.loader.js',
  dataUrl: 'Build/1.data',
  frameworkUrl: 'Build/1.framework.js',
  codeUrl: 'Build/1.wasm',
});

const UnityView = () => {

  return (
    <Unity unityContext={unityContext}/>
  );
};

export default UnityView;