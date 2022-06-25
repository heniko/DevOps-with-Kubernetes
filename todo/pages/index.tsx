import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { apiUri } from '../src/util/config'
import { Todo } from '../src/types/todo'
import { getAll, create } from '../src/services/todo'

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todo, setTodo] = useState<string>('')

  useEffect(() => {
    console.log(apiUri())
    const fetchData = async () => {
      const res = await getAll()
      setTodos(res)
    }
    fetchData()
  }, [])

  const addTodo = async () => {
    if (todo) {
      const data = await create(todo)
      if (todo) {
        setTodos([...todos, data as Todo])
      }
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
      <img src={`${apiUri()}/api/daily-picture`} width={400} height={400} alt='Daily image'></img>
      {/*<Image src={`${apiUri()}/api/daily-picture`} width={400} height={400} alt='Daily image'></Image>*/}
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
