import {Text, View, FlatList, StyleSheet} from "react-native";
import {CheckBox} from "react-native-web";
import {ListItem} from "./ListItem";

export const TaskList = ({taskList, handleTaskPress, deleteTask}) => {


    return (

        <FlatList data={taskList} renderItem={({item}) => {
            const {title, completed} = item;
            return <ListItem el={item} handlePress={handleTaskPress} deleteTask={deleteTask}/>
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