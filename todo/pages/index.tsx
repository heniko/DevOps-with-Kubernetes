import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const initialTodos = [
  { id: 1, text: 'TODO 1' },
  { id: 2, text: 'TODO 2' },
]

const Home: NextPage = () => {
  const [todos, setTodos] = useState(initialTodos)
  const [todo, setTodo] = useState('')

  const getId = () => {
    return Math.max(...todos.map(t => t.id)) + 1
  }

  const addTodo = () => {
    if (todo) {
      setTodos([...todos, { id: getId(), text: todo }])
      setTodo('')
    }
  }

  const onTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length < 141) {
      setTodo(value)
    }
  }

  return (
    <div className={styles.container}>
      <Image src='/api/daily-picture' width={400} height={400} alt='Daily image'></Image>
      <div>
        <input type='text' value={todo} onChange={onTodoChange} />
        <button type='button' onClick={addTodo}>Create TODO</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
