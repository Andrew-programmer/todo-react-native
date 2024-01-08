import {StyleSheet, Text, TouchableHighlight} from "react-native";

export const ListItem = ({el, children}) => {
    return (
        <TouchableHighlight style={styles.textContainer}>
            <Text style={styles.text}>{children}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    text: {
        padding: 20,
        textAlign: "center",
        borderRadius: 20,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        marginTop: 20,
        width: '60%',
    }
})