import { lazy, useState } from 'react'

import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'

import './App.css'

import Dashboard from './componets/Dashboard'

import Loading from './componets/Loading'

//const Loading = lazy(() => import("./componets/Loading")
//)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <BrowserRouter>
        <Appheader></Appheader>
        <Routes>
          <Route path='/' element={<Loading />}>

          </Route>
          <Route path='/dash' element={<Dashboard />}>

          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

function Appheader() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => {
        window.location.href = "/";
      }}> Loading page</button>
      <button onClick={() => {
        window.location.href = "/dash"
      }}> Dashboard page</button>
    </>
  )
}
// function Loading() {
//   return (
//     <div>
//       <h1>this is a loading page</h1>
//     </div>
//   )
// }
// function Dashboard() {
//   return (
//     <div>
//       <h1>this is an dashboard page</h1>
//     </div>)
// }


export default App
