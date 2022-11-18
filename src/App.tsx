import React, { FormEvent } from 'react'

import './App.css'

export default function App () {
  return <form className='App' onSubmit={handleSubmit}>
    <textarea name='data'></textarea>
    <button type='submit'>Create</button>
  </form>
}

function handleSubmit (event: FormEvent) {
  const data = new FormData(event.target)

  event.preventDefault()
}
