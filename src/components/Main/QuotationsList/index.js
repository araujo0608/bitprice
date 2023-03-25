import React, { Fragment } from 'react';
import { View } from 'react-native';
import styles from './styles';
import ButtonFilter from './ButtonFilters';

const QuotationList = () => {
    return(
        <Fragment>
            <View style={styles.containerButtons}>
                <ButtonFilter text={"24h"}/>
                <ButtonFilter text={"7d"}/>
                <ButtonFilter text={"1M"}/>
                <ButtonFilter text={"3M"}/>
                <ButtonFilter text={"6M"}/>
                <ButtonFilter text={"12M"}/>
            </View>
        </Fragment>
    )
}

export default QuotationList;