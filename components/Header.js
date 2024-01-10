import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, TouchableHighlight, Text, Button, View} from "react-native";

export const Header = ({checkCompleted, deleteAllCompleted, sortCompleted}) => {
    const setDisabled = () => {
        return !checkCompleted();
    }

    return (
        <View style={styles.main}>
            <Text style={styles.text}>TASK LIST</Text>
            <View style={styles.buttonContainer}>
                <Button title={'Delete all completed'} color={'red'} disabled={setDisabled()}
                        onPress={deleteAllCompleted}/>
                <Button title={'Sort'} onPress={() => sortCompleted()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 15,
        paddingBottom: 15,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        width: '60%',
        borderRadius: 20,
        textAlign: 'center',
        backgroundColor: 'silver',
        fontWeight: 'bold',
        marginBottom: 10
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '70%'
    },
    deleteButton: {
        marginTop: 10
    }
});