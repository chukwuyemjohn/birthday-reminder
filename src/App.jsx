import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  
  const [people, setPeople] = useState(data)
  function getClick() {
    setPeople({})
  }
  return (
  <main>


    <section className='container'>
    <h3>{people.length} birthday messages </h3>
    <List staff = {people} />
    <button  onClick = {getClick}> clear all</button>

    </section>

  </main>)
}

export default App;
