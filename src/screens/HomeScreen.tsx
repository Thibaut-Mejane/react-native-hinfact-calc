import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Operation from '../components/Operation';
import NetworkInfo from '../components/NetworkInfo';

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
});

function HomeScreen(){
    return (
        <SafeAreaView style={styles.body}>
            <Text style={styles.header}>
                Hinfact
                <Text style={styles.bold}>Calc</Text>
            </Text>
            <NetworkInfo/>
            <Operation />
        </SafeAreaView>
    )
}

export default HomeScreen