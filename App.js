// npx react-native run-android  pra iniciar o projeto

// projeto criado para fins de aprendizado

import React from 'react';
import {View, Text} from 'react-native';
import ComponentSimples from './componentes/ComponentSimples';
import ComponentComCSS from './componentes/ComponentCSS';
import ComponentProps from './componentes/ComponentProps';

export default function primeiroApp() {
  return (
    <View>
      <ComponentSimples />
      <ComponentComCSS />
      <ComponentProps propriedade="Component com props" />
    </View>
  );
}
