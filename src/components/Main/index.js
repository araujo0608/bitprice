import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import CurrentPrice from './CurrentPrice';
import HistoryGraphic from './HistoryGraphic';
import QuotationList from './QuotationsList';
import QuotationItems from './QuotationsList/QuotationsItems';

const Main = () => {
    return(
      <SafeAreaView style={styles.mainContainer}>
        <CurrentPrice/>
        <HistoryGraphic />
        <QuotationList />
        <QuotationItems />
      </SafeAreaView>
    )
}

export default Main;