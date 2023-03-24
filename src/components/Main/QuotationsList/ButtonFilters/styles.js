import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    btnFilter:{
        backgroundColor: '#FFBB00',
        width: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtFilter:{
        padding: 3,
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
});

export default styles;