import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';

const CurrentPrice = () => {
    return(
      <View style={styles.containerText}>
        <Text style={styles.mainText}>$3323</Text>
        <Text style={styles.subText}>preço atual</Text>
      </View>
    )
}

export default CurrentPrice;