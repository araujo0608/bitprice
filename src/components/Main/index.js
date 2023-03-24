import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';
import CurrentPrice from './CurrentPrice';
import HistoryGraphic from './HistoryGraphic';

const Main = () => {
    return(
      <SafeAreaView style={styles.mainContainer}>
        <CurrentPrice/>
        <HistoryGraphic />
      </SafeAreaView>
    )
}

export default Main;