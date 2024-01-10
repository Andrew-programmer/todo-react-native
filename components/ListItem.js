import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";

export const ListItem = ({el, handlePress, deleteTask}) => {
    const setCompletedStyles = (isCompleted) => {
        return isCompleted ? styles.completedText : undefined;
    }

    return (
        <TouchableOpacity
            style={styles.textContainer}
            onPress={() => handlePress(el.key)}
            onLongPress={() => deleteTask(el.key)}
        >
            <Text style={[styles.text, setCompletedStyles(el.completed)]}>{el.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        overflow: 'hidden',
    },
    text: {
        padding: 20,
        textAlign: "center",
        borderRadius: 20,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        marginTop: 20,
        width: '60%',
    },
    completedText: {
        textDecorationLine: 'line-through',
        backgroundColor: '#b0b0b0'
    }
})