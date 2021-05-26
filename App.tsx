import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ErrorBoundary from './src/ErrorHandling/ErrorBoundary';
import Navigation from './src/Navigation/Navigation';

const App = () => {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ErrorBoundary>
  );
};

export default App;
