const todoRouter = require('express').Router()

let todos = [
  { id: 1, text: 'TODO 1' },
  { id: 2, text: 'TODO 2' }
]

todoRouter.get('/', (req, res) => {
  res.json(todos)
})

todoRouter.post('/', (req, res) => {
  try {
    const text = req.body.text
    const id = Math.max(...todos.map(todo => todo.id)) + 1
    const todo = {
      id, text
    }
    todos.push(todo)
    res.json(todo)
  } catch (err) {
    res.status(400).send(err.message)
  }
})

module.exports = todoRouter