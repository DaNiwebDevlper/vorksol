import React from 'react'
import { List, Nav, Search, Sidebar } from './components'

const App = () => {
  return (
    <main className='flex w-full bg-black text-white min-h-screen'>

      <Sidebar />

      <section className='w-full px-7'>
        <Nav />
        <Search />
        <List />
      </section>
    </main>
  )
}

export default App
