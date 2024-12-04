import React, { useState } from 'react'
import IconDelete from './icon-delete'
import IconEdit from './icon-edit'
import { MdInventory } from 'react-icons/md';

const App = () => {
  const [account, setAccount] = useState({
    name: "Tea",
    age: 25,
    role: "admin",
    email: "admin@website.com",
  });
  // const account = {
  //   name: "Tea",
  //   age: 25,
  //   role: "admin",
  //   email: "admin@website.com",
  // }

  const [users, setUsers] = useState([
    { id: 1, name: "user-1", active: true, payment: "Paid" },
    { id: 2, name: "user-2", active: true, payment: "Paid" },
    { id: 3, name: "user-3", active: false, payment: "Paid" },
    { id: 4, name: "user-4", active: false, payment: "Paid" },
    { id: 5, name: "user-5", active: true, payment: "Free" },
    { id: 6, name: "user-6", active: false, payment: "Free" },
    { id: 7, name: "user-7", active: true, payment: "Free" },
  ]);

  const userData = users.filter(status => {
    
    console.log()}  )

  
  console.log(userData)
  return (
    <div>
      <h1>Account</h1>

    </div>
  )
}

export default App; 





  // const users = [
  //   { id: 1, name: "user-1", active: true, payment: "Paid" },
  //   { id: 2, name: "user-2", active: true, payment: "Paid" },
  //   { id: 3, name: "user-3", active: false, payment: "Paid" },
  //   { id: 4, name: "user-4", active: false, payment: "Paid" },
  //   { id: 5, name: "user-5", active: true, payment: "Free" },
  //   { id: 6, name: "user-6", active: false, payment: "Free" },
  //   { id: 7, name: "user-7", active: true, payment: "Free" },
  // ]










// const App = () => {

// const [input, setInput ] = useState("")
// const [list, setList] = useState([
//   {id: 1, todo: "todo-1"},
//   {id: 2, todo: "todo-2"},
//   {id: 3, todo: "todo-3"},
//   {id: 4, todo: "todo-4"},
//   {id: 5, todo: "todo-5"},
//   {id: 6, todo: "todo-6"},
//   {id: 7, todo: "todo-7"},
// ])

const handleSubmit = () => {
    const newId = list.length
    const userInput = input
    setList([
      ...list,
      {
        id: newId + 1,
        todo: userInput
      }
    ])
    setInput("123123")



  return (
    <div className='max-w-lg mx-auto min-h-screen h-full w-full text-white bg-black flex flex-col px-6'>
     <div className='flex justify-center pt-10 pb-4 text-3xl'> To Do APP </div> 
      {/* <form> */}
      <div className='flex my-4 '>
      <input
        className='border text-black border-blue-400 rounded-lg w-full px-4 py-2 mr-2 '
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
        />
    <button className='border border-emerald-200 py-2 px-6 rounded-md' onClick={handleSubmit}>Submit</button>
    </div>
    {/* <form> */}
    <ul className={list.length > 0 ? "border border-cyan-300" : " "} >
      {list.length > 0 && list.map((item, index) => {
        return (
          <li className='w-full flex items-center py-2 px-2 ' key={item.id}>
            <span className='w-full text-left mx-4'>{index + 1}: {item.todo}</span> <button className='text-2xl'> <IconEdit/> </button>  <button onClick={() => handleDelete(item.id)} className='pl-4 pr-2 text-2xl'> <IconDelete/> </button> 
          </li>)
      })}
    </ul>
  </div>)
 }

export default App

