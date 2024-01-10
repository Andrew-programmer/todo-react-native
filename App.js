import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import {Header} from "./components/Header";
import {useState} from "react";
import {TaskList} from "./components/TaskList";
import {Form} from "./components/Form";
import {Guide} from "./components/Guide";

const initState = [];

export default function App() {
    const [tasks, setTasks] = useState(initState);

    const calculateKey = () => {
        return Math.random().toString(36).substring(7);
    }

    const handleListItemPress = (key) => {
        setTasks(tasks.map(task => {
            if (task.key === key) {
                task.completed = !task.completed;
            }

            return task;
        }))
    }

    const checkCompleted = () => {
        return tasks.find(task => task.completed)
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
                    key: calculateKey()
                }
            ]
        });

        return true;
    }

    const deleteTask = (key) => {
        const currentTask = tasks.find(task => task.key === key);
        if (currentTask.completed) {
            setTasks(tasks.filter(task => task.key !== key));
        }
    }

    const deleteAllCompleted = () => {
        setTasks(tasks.filter(task => !task.completed))
    }

    const sortCompleted = () => {
        const sortedTasks = tasks.sort((currentTask, nextTask) => {
            return currentTask.completed - nextTask.completed
        })

        setTasks([
            ...sortedTasks
        ]);
    }

    return (
        <SafeAreaView style={styles.main}>
            <Header checkCompleted={checkCompleted} deleteAllCompleted={deleteAllCompleted}
                    sortCompleted={sortCompleted}/>
            <View style={styles.mainView}>
                {
                    tasks.length ?
                        <TaskList taskList={tasks} handleTaskPress={handleListItemPress} deleteTask={deleteTask}/>
                        :
                        <Guide/>
                }
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
    mainView: {
        padding: 10,
        height: '100%',
        width: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});
















