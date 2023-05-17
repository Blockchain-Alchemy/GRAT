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
import { loadRecipe } from './recipes';
import { useSelector } from 'react-redux';

const unityContext = new UnityContext({
  loaderUrl: 'Build/1.loader.js',
  dataUrl: 'Build/1.data',
  frameworkUrl: 'Build/1.framework.js',
  codeUrl: 'Build/1.wasm',
});

const App = () => {
  const sideRef = useRef();
  const { recipeName } = useSelector((state) => state.LessonState);
  const [progression, setProgression] = useState(0);
  const [recipe, setRecipe] = useState({});

  useEffect(function () {
    unityContext.on('progress', (progression) => {
      console.log('progression', progression);
      setProgression(progression);
    });

    unityContext.on('Converted', () => {
      console.log('converted');
    });
  }, []);

  useEffect(() => {
    if (recipeName) {
      const recipe = loadRecipe[recipeName]();    
      console.log('recipe, recipe', recipe);
      setRecipe(recipe);  
    }
  }, [recipeName]);

  return (
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
              recipes={recipe.recipes || []}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <div id="Sidebar" ref={sideRef}>
              <Unity unityContext={unityContext} />
              <ProjectView recipe={recipe} />
            </div>
          </Grid.Col>
        </Grid>
      </NotificationsProvider>
    </MantineProvider>
  );
};

export default App;
