import {Text, View, FlatList, StyleSheet} from "react-native";
import {CheckBox} from "react-native-web";
import {ListItem} from "./ListItem";

export const TaskList = ({taskList}) => {
    return (

        <FlatList data={taskList} renderItem={({item}) => {
            const {title, completed, index} = item;
            return <ListItem>{title}</ListItem>
        }}
                  scrollEnabled={true}
                  style={styles.list}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        marginBottom: 150
    }
});