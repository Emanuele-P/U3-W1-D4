import './App.scss'
import React, { useState } from 'react'
import AllTheBooks from './components/AllTheBooks'
import MyAlert from './components/MyAlert'
import MyFooter from './components/MyFooter'
import MyNav from './components/MyNav'
import fantasy from './data/books/fantasy.json'
import romance from './data/books/romance.json'
import history from './data/books/history.json'
import scifi from './data/books/scifi.json'
import horror from './data/books/horror.json'
import BookList from './components/BookList'

function App() {
  const [booksData, setBooksData] = useState(fantasy)

  return (
    <div className="App">
      <header>
        <MyNav></MyNav>
      </header>

      <main>
        <MyAlert></MyAlert>

        <section className="hero">
          <BookList booksData={booksData} setBooksData={setBooksData} />
        </section>

        <AllTheBooks
          headerText={'Fantasy Books'}
          booksData={fantasy}
        ></AllTheBooks>
        <AllTheBooks
          headerText={'Romance Books'}
          booksData={romance}
        ></AllTheBooks>
        <AllTheBooks
          headerText={'History Books'}
          booksData={history}
        ></AllTheBooks>
        <AllTheBooks
          headerText={'Sci-fi Books'}
          booksData={scifi}
        ></AllTheBooks>
        <AllTheBooks
          headerText={'Horror Books'}
          booksData={horror}
        ></AllTheBooks>
      </main>

      <MyFooter></MyFooter>
    </div>
  )
}

export default App
