import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import {Header} from "./components/Header";
import {useState} from "react";
import {TaskList} from "./components/TaskList";
import {Form} from "./components/Form";

const initState = [
    {
        title: 'Task1',
        completed: false,
        index: 1
    },
    {
        title: 'Task2',
        completed: false,
        index: 2
    },
    {
        title: 'Task3',
        completed: false,
        index: 3
    },
]

export default function App() {
    const [tasks, setTasks] = useState(initState);

    const calculateIndex = () => {
        return tasks[tasks.length - 1].index + 1;
    }

    const addTask = (title) => {
        if (!title || !title.trim()) {
            return;
        }
        setTasks(prevState => {
            return [
                ...tasks,
                {
                    title,
                    completed: false,
                    index: calculateIndex()
                }
            ]
        });

        return true;
    }

    return (
        <SafeAreaView style={styles.main}>
            <Header/>
            <View>
                <TaskList taskList={tasks}/>
            </View>
            <Form onSubmit={addTask}/>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    main: {
        display: "flex",
        padding: 0,
        margin: 0,
        alignItems: "stretch",
        height: '100%',
    },
});
















