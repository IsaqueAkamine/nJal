import React from 'react';
import { StatusBar } from 'expo-status-bar';

import SignIn from '../pages/SignIn';
import StackLoginNavigation from './StackLoginNavigation';

export default function Route() {
  return (
    <>
      <StatusBar style="auto" />
      {/* Se autenticado fluxo dentro do app */}

      {/* Não autenticado fluxo login */}
      <StackLoginNavigation />
    </>
  );
}
