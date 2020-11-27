import React from 'react'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/SearchResults'
import { Route } from 'wouter'
import './css/main.css'

const App = () => {
  return (
    <div>
      <section>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/user/:id" component={Detail} />
      </section>
    </div>
  )
}

export default App
