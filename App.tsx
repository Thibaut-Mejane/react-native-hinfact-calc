/**
 * My Super great Calculator app
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import OperandInput from './src/components/OperandInput';

const styles = StyleSheet.create({
  body: {
    margin: 20,
  },
  header: {
    fontSize: 50,
    marginBottom: 34,
  },
  bold: {
    fontWeight: 'bold',
  },
  operation: {
    flexDirection: 'row',
    fontSize: 28,
    alignItems: 'center',
    marginBottom: 36,
  },
  operationText: {
    fontSize: 30,
  },
  result: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

function App(): JSX.Element {
  const [leftOperand, setLeftOperand] = useState('');
  const [rightOperand, setRightOperand] = useState('');

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.header}>
        Hinfact
        <Text style={styles.bold}>Calc</Text>
      </Text>
      <View style={styles.operation}>
        <OperandInput value={leftOperand} onOperandChange={setLeftOperand}/>
        <Text style={styles.operationText}>+</Text>
        <OperandInput value={rightOperand} onOperandChange={setRightOperand}/>
        <Text style={styles.operationText}>=</Text>
      </View>
      <Text style={styles.result}>#result</Text>
    </SafeAreaView>
  );
}


export default App;
