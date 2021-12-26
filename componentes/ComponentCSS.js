import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ComponentComCSS() {
  return (
    <View>
      <Text style={{color: 'green'}}>Component com CSS 01</Text>
      <Text style={estilos.cor}>Component com CSS 02</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  cor: {
    color: 'red',
  },
});
