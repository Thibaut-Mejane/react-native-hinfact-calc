import { StyleSheet, Text, TextInput, View } from "react-native"
import React, { useState } from 'react';
import OperandInput from "./OperandInput";

const OperationStyle = StyleSheet.create(({
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
}))

function Operation() {

    const [leftOperand, setLeftOperand] = useState('');
    const [rightOperand, setRightOperand] = useState('');

    return (
        <View style={OperationStyle.operation}>
            <OperandInput value={leftOperand} onOperandChange={setLeftOperand}/>
            <Text style={OperationStyle.operationText}>+</Text>
            <OperandInput value={rightOperand} onOperandChange={setRightOperand}/>
            <Text style={OperationStyle.operationText}>=</Text>
            <Text style={OperationStyle.result}>
            {leftOperand && rightOperand ? parseInt(leftOperand) + parseInt(rightOperand) : "?"}
            </Text>
        </View>
    )
}

export default Operation