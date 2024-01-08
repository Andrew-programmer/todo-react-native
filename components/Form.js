import {StyleSheet, Text, TextInput, Button, View} from "react-native";
import {useState} from "react";

export const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handleInput = (e) => {
        setValue(e);
    }

    const onButtonPress = (value) => {
        if(onSubmit(value)) {
            setValue('');
        }
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} onChangeText={handleInput} value={value} placeholder={'Add new task...'}/>
            <Button
                title={'+'}
                onPress={() => onButtonPress(value)}
            >
                Hello
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '70%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    inputContainer: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: 'white',
        padding: 10,
        bottom: 0,
        left: 0,
        width: '100%'
    },
});