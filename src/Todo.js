import React, { useEffect, useState } from 'react'






const Todo = () => {

    const [value, setValue] = useState("");
    const [todos, setTodos] = useState(null)


    const fetchTodosFromLS = () => {
        // LS means localStorage
        if (localStorage.getItem("todos")) {
            // setTodos(todos.concat(JSON.parse(localStorage.getItem("todos"))))
            setTodos(JSON.parse(localStorage.getItem("todos")))
            // console.log('the todos is ',todos);
            // console.log('the db data is ', JSON.parse(localStorage.getItem("todos")));
        }
        else {
            setTodos([])
        }
    }

    useEffect(() => {
        fetchTodosFromLS();
    }, [])


    const adTodo = e => {
        e.preventDefault();

        setTodos(todos.push({ item: value }));
        // console.log(todos);
        localStorage.setItem("todos", JSON.stringify(todos))
        fetchTodosFromLS();
        setValue("")
    }

    const delItem = e => {
        let index = e.target.id
        setTodos(todos.splice(index - 1, 1))
        localStorage.setItem("todos", JSON.stringify(todos))
        fetchTodosFromLS();
    }

    const editItem = e => {
        let index = e.target.id
        // console.log(todos[index]);
        let newVal = prompt(`Update this value \t ${todos[index].item}`)
        if (newVal.length < 5) {
            fetchTodosFromLS()
        }
        else {
            setTodos(todos[index].item = newVal)
            localStorage.setItem("todos", JSON.stringify(todos))
            fetchTodosFromLS();
        }
    }

    return (
        <div className='todolist'>
            <form action="#" onSubmit={adTodo}>
                <input type="text" name='todo' id='todoinput' minLength={5} placeholder='Enter data ' required onChange={(e) => setValue(e.target.value)} value={value} />
                <button type='submit'> ADD </button>
            </form>

            <div className="todos">
                <h2>YOUR LIST</h2>
                {
                    todos && todos.length < 1 ? <h3>No todos to show </h3> :
                        <table>
                            <thead>
                                <tr>
                                    <th>S#</th>
                                    <th>TODO ITEM </th>
                                    <th>EDIT</th>
                                    <th>DEL</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* <tr>
                            <td>1</td>
                            <td>Bananas </td>
                            <td> ✏️ </td>
                            <td> 🗑️ </td>
                        </tr> */}

                                {
                                    todos && todos.map((todo, index) => {
                                        // console.log(todo)
                                        return <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{todo.item}</td>
                                            <td id={index} onClick={editItem}> ✏️ </td>
                                            <td id={index + 1} onClick={delItem}> 🗑️ </td>
                                        </tr>
                                    })
                                }

                            </tbody>

                        </table>
                }
            </div>


        </div>
    )
}

export default Todo