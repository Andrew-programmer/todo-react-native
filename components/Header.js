import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, TouchableHighlight, Text} from "react-native";

export const Header = () => {
    return (
        <TouchableHighlight style={styles.main}>
            <Text style={styles.text}>TASK LIST</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 15,
        paddingBottom: 15,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        width: '60%',
        borderRadius: 20,
        textAlign: 'center',
        backgroundColor: 'silver',
        fontWeight: 'bold'
    }
});