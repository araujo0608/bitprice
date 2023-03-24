import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';

const Main = () => {
    return(
      <SafeAreaView style={styles.mainContainer}>
        <Text style={{color: 'white'}}>Hello Main</Text>
      </SafeAreaView>
    )
}

export default Main;