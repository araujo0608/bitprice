import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const HeaderTitle = () => {
    const [title, setTitle] = useState("Bitcoin");
    
    return(
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
}

export default HeaderTitle;