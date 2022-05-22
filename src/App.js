import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Workspace from './components/Workspace/Workspace';
import ProjectView from './components/ProjectView/ProjectView';
import './generator/javsacript';
import './generator/python';
import Unity, { UnityContext } from 'react-unity-webgl';
import { MantineProvider, Grid } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import Menu from './components/Menu/Menu';
import Recipe from 'recipes/recipe.json';

const unityContext = new UnityContext({
  loaderUrl: 'Build/1.loader.js',
  dataUrl: 'Build/1.data',
  frameworkUrl: 'Build/1.framework.js',
  codeUrl: 'Build/1.wasm',
});

const App = () => {
  const sideRef = useRef();
  const [progression, setProgression] = useState(0);

  useEffect(function () {
    unityContext.on('progress', (progression) => {
      console.log('progression', progression);
      setProgression(progression);
    });

    unityContext.on('Converted', () => {
      console.log('converted');
    });
  }, []);

  return (
    <div className="App">
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: 'dark' }}
      >
        <NotificationsProvider>
          <Menu />
          <Grid>
            <Grid.Col span={9}>
              <Workspace
                unityContext={unityContext}
                loading={progression < 1.0}
                recipes={Recipe}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <div id="Sidebar" ref={sideRef}>
                <Unity unityContext={unityContext} />
                <ProjectView recipes={Recipe} />
              </div>
            </Grid.Col>
          </Grid>

          <div
            className="absolute bottom-0 right-0 w-1/4"
            id="Sidebar"
            ref={sideRef}
          ></div>
        </NotificationsProvider>
      </MantineProvider>
    </div>
  );
};

export default App;
