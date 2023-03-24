import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';
import CurrentPrice from './CurrentPrice';

const Main = () => {
    return(
      <SafeAreaView style={styles.mainContainer}>
        <CurrentPrice/>
      </SafeAreaView>
    )
}

export default Main;