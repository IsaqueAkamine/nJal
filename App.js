import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Route from './src/navigation';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </>
  );
}
