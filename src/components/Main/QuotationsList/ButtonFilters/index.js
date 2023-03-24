import React, { Fragment } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const ButtonFilter = (props) => {
    return(
      <Fragment>
        <TouchableOpacity
            style={styles.btnFilter}
            onPress={() => console.warn('clicked')}>
            <Text style={styles.txtFilter}>{props.text}</Text>
        </TouchableOpacity>
      </Fragment>
    )
}

export default ButtonFilter;