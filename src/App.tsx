import React from 'react';
import Navigation from './navigation';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F5BD0A',
    background: '#fff',
    text: '#2E3E5C',
    border: '#D0DBEA',
    notification: 'rgb(255, 59, 48)',
  },
};

const App: React.FC = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
