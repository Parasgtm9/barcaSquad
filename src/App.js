import React from "react";
import Header from "./components/Header"
import { Tasks } from './components/Tasks'
import { AddTask } from './forms/AddTask'
import { useState, useEffect } from "react"

function App() {

    const [showAddTask, setShowAdd] = useState(false)

    const [tasks, setTasks] = useState([])

    // Fetch tasks
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, [])

    const fetchTasks = async () => {
        const res = await fetch('https://api-gauti.herokuapp.com/tasks')  
        const data = await res.json();
        console.log(data)
        return data
    }

    // Add task 
    const addTask = async (task) => {
        const res = await fetch('https://api-gauti.herokuapp.com/task', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        const data = await res.json()
        console.log(data)
        setTasks([...tasks, data])
    }

    // Delete task
    const deleteTask = (id) => {
        fetch(`https://api-gauti.herokuapp.com/task/${id}`, {
            method: 'DELETE'
        })
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
        <div className="container">
            <Header title="Squad 2022-23" onAdd={() => setShowAdd(!showAddTask)} showAddTask={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} /> : 'Club bankrupted'}
        </div>
    );
}

/* class App extends React.Component{
    render(){
        return <Header/>
    }
} */

export default App;
