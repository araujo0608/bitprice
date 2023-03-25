import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const QuotationItems = () => {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.contentLeft}>
            <View style={styles.boxLogo}>
                <Image
                    source={require("../../../../../assets/btc.png")}
                    style={styles.logoBitcoin}
                />
                <Text style={styles.txtDate}>23/03/2023</Text>
            </View>
        </View>
        <View style={styles.contentRight}>
            <Text style={styles.txtPrice}>$28223,09</Text>
        </View>
      </View>
    )
}

export default QuotationItems;