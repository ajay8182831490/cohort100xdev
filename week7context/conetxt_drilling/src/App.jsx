import { useState } from 'react'

import { useContext } from 'react'
import countContext from './componets/Context'

import './App.css'

function App() {
  const [count, setCounter] = useState(0)



  return (
    <>

      <h1>hi there</h1>
      <countContext.Provider value={{ count, setCounter }}>
        <Count></Count>
      </countContext.Provider>
    </>
  )
}
// prop drilling concept
// function Count({ count, setCounter }) {
//   return <div>
//     {count}
//     <Button count={count} setCounter={setCounter}></Button>
//   </div>


// }
// function Button({ count, setCounter }) {
//   return <div>
//     <button onClick={() => {
//       setCounter((count + 1))
//     }}>Increase Counter</button>
//     <button onClick={() => {
//       setCounter(count - 1)
//     }}>Decrease Counter</button>
//   </div>


// }

function Count() {
  const { count } = useContext(countContext); // Access count from context
  return (
    <div>
      {count}
      <Button />
    </div>
  );
}

function Button() {
  const { count, setCounter } = useContext(countContext); // Access count and setCounter from context
  return (
    <div>
      <button onClick={() => setCounter(count + 1)}> Increase</button>
      {count ? (
        <button onClick={() => setCounter(count - 1)}> Decrease</button>
      ) : (
        <button disabled onClick={() => setCounter(count - 1)}> Decrease</button>
      )}
    </div>
  );
}

export default App
