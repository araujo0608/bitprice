import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    containerText:{
        marginTop: 10,
    },
    mainText:{
        fontSize: RFPercentage(4.3),
        color: 'white',
        fontWeight: 'bold'
    },
    subText:{
        fontSize: RFPercentage(1.6),
        color: 'white',
        fontStyle: 'italic',
        left: 25
    }
}); 

export default styles;