import React from 'react';
import { SafeAreaView, Image} from 'react-native';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import CurrentPrice from './CurrentPrice';
import HistoryGraphic from './HistoryGraphic';
import QuotationList from './QuotationsList';
import QuotationItems from './QuotationsList/QuotationsItems';

const Main = () => {
    return(
      <SafeAreaView style={styles.mainContainer}>
        <Animatable.Image
          source={require("../../../assets/btc.png")}
          style={styles.mainLogo}
          resizeMode="contain"
        />
        <CurrentPrice/>
        <HistoryGraphic />
        <QuotationList />
        <QuotationItems />
      </SafeAreaView>
    )
}

export default Main;