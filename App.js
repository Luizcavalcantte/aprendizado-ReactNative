// npx react-native run-android  pra iniciar o projeto

// projeto criado para fins de aprendizado

import React from 'react';
import {View, Text} from 'react-native';
import ComponentSimples from './componentes/ComponentSimples';
import ComponentComCSS from './componentes/ComponentCSS';
import ComponentCSSSeparado from './componentes/ComponentCSSSeparado';
import ComponentProps from './componentes/ComponentProps';
import Estilos from './estilos/Estilos';

export default function primeiroApp() {
  return (
    <View style={Estilos.container}>
      <ComponentSimples />
      <ComponentComCSS />
      <ComponentCSSSeparado />
      <ComponentProps propriedade="Component com props" />
    </View>
  );
}
