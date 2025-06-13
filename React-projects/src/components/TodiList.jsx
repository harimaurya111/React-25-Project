    import React, { useState } from 'react'

    const TodiList = () => {

        const [todo, setTodo] = useState("")
        const [todos, setTodos] = useState([])

        function addTodo() {
            if (todo.trim() == "") return
            setTodos([...todos, { id: Date.now(), text: todo, completed: false }])
            setTodo("")
        }

        function removeTodo (id){
        setTodos(todos.filter((item) => item.id !== id))
        }


        const handleToggle = (id)=>{
        setTodos(todos.map((item)=> item.id ===id ? {...item ,completed : !item.completed} : item))
        }

        return (
            <div className='flex w-full h-screen text-center justify-center items-center flex-col'>
                <div className='w-[500px] px-2 pb-4 flex flex-col justify-center items-center border rounded  shadow-md'>
                    <p className='text-center text-3xl font-bold my-3'>Todo App</p>
                    <div className='flex gap-3 w-[400px] mb-3'>
                        <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" placeholder='Enter Your Todo' className='p-2 border w-full' />
                        <button onClick={addTodo} className='py-1 px-1 border cursor-pointer hover:bg-blue-500'>Add</button>
                    </div>

                    <ul className='flex w-[83%] flex-col'> 
                        {
                            todos && todos.map((item) => (
                                <li key={item.id} className='border w-full flex my-1 p-2 justify-between items-center px-2'><span onClick={()=>handleToggle(item.id)} className={`${item.completed ? "line-through" : ""} cursor-pointer text-xl `}>{item.text}</span><button onClick={()=>removeTodo(item.id)} className='cursor-pointer text-2xl'>x</button></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }

    export default TodiList