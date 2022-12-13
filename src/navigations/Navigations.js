import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SignInStack } from './SignInStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <SignInStack/>
    </NavigationContainer>
  )
}

export default Navigation