/**
 * My Super great Calculator app
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

function App(): JSX.Element {
  const [leftOperand, setLeftOperand] = useState('');
  const [rightOperand, setRightOperand] = useState('');

  const [leftOperandInputColor, setLeftOperandInputColor] = useState();
  const [rightOperandInputColor, setRightOperandInputColor] = useState();

  const changeLeftOperand = (value: any) => {
    setLeftOperand(value);
  };

  useEffect(() => {
    setLeftOperandInputColor('green');
    setRightOperandInputColor('green');
  }, []);

  useEffect(() => {
    if (leftOperand === '') {
      setLeftOperandInputColor('red');
    } else {
      setLeftOperandInputColor('green');
    }
  }, [leftOperand]);

  const changeRightOperand = (value: any) => {
    if (value === '') {
      setRightOperandInputColor('red');
    } else {
      setRightOperandInputColor('green');
    }
    setRightOperand(value);
  };

  useEffect(() => {
    if (rightOperand === '') {
      setRightOperandInputColor('red');
    } else {
      setRightOperandInputColor('green');
    }
  }, [rightOperand]);

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.header}>
        Hinfact<Text style={styles.bold}>Calc</Text>
      </Text>
      <View style={styles.operation}>
        <TextInput
          value={leftOperand}
          style={{
            borderWidth: 2,
            borderColor: leftOperandInputColor,
            fontSize: 30,
            margin: 10,
            padding: 10,
            borderRadius: 4,
            backgroundColor: '#f1f5ed',
          }}
          onChangeText={value => changeLeftOperand(value)}
        />
        <Text style={styles.operationText}>+</Text>
        <TextInput
          value={rightOperand}
          style={{
            borderWidth: 2,
            borderColor: rightOperandInputColor,
            fontSize: 30,
            margin: 10,
            padding: 10,
            borderRadius: 4,
            backgroundColor: '#f1f5ed',
          }}
          onChangeText={value => changeRightOperand(value)}
        />
        <Text style={styles.operationText}>=</Text>
      </View>
      <View>
        <Text style={styles.result}>#result</Text>
      </View>
    </SafeAreaView>
  );
}

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

export default App;
