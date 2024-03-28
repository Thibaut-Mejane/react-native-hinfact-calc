import { StyleSheet, TextInput } from "react-native"
import React from 'react';

const OperandInputStyle = (operand: string) => StyleSheet.create(({
    operandInput : {
        borderWidth: 2,
        borderColor: operand ? 'green' : 'red',
        fontSize: 30,
        margin: 10,
        padding: 10,
        borderRadius: 4,
        backgroundColor: '#f1f5ed',  
    }
}))

type OperandInputProps = {
    value:string, 
    onOperandChange: (operand: string) => void
}

function OperandInput({value, onOperandChange}: OperandInputProps) {
    return (
        <TextInput
          value={value}
          style={OperandInputStyle(value).operandInput}
          onChangeText={onOperandChange}
        />
    )
}

export default OperandInput