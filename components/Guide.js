import {Text, View, StyleSheet} from "react-native";

export const Guide = () => {
    return (
            <Text>
                Hi! Here is a short guide for you:{'\n'}
                {'\n'}
                    1. Use form below to add some tasks{'\n'}
                    2. Use "Sort" button to sort tasks in order "last completed"{'\n'}
                    3. Use long press on the completed task to delete it{'\n'}
                {'\n'}
                Enjoy! This is my first React Native App :)
            </Text>
    );
}

const styles = StyleSheet.create({});