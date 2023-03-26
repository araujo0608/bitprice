import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    mainContainer:{
        width: '95%',
        height: 'auto',
        backgroundColor: '#000000',
        marginLeft: '3%',
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },

    contentLeft:{
        width: '36%',
        height: '100%',
        alignItems: 'flex-start'
    },

    boxLogo:{
        flexDirection: 'row',
        alignItems: 'center'
    },

    logoBitcoin:{
        width: 40,
        height: 40,
        marginLeft: 2
    },

    txtDate:{
        fontSize: RFPercentage(2.1),
        paddingLeft: 5,
        color: '#ffffff',
        fontWeight: 'bold'
    },

    contentRight:{
        width: '60%',
        alignItems: 'flex-end'
    },

    txtPrice:{
        color: '#ffffff',
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold'
    }
});

export default styles;