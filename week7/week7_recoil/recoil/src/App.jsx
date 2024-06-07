import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilValue, RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil'
import { countAtom, text, textlength, } from "./Atoms/count"


function App() {


  return (
    <>
      <h1> welcome to recoil tutorila</h1>
      <RecoilRoot>

        <Count></Count>
        <InputText></InputText>
      </RecoilRoot>


    </>
  )
}

function Count() {

  const count = useRecoilValue(countAtom);






  return <div>
    {count}
    <Button></Button>
  </div>
}

function Button() {
  const setCount = useSetRecoilState(countAtom)

  return <>
    <button onClick={() => setCount((count) => count + 1)}>Increase</button>
    <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
  </>
}

function InputText() {
  const [input, setInput] = useRecoilState(text);



  const textlength1 = useRecoilValue(textlength);

  return (
    <>

      <input type="text" value={input} onChange={(e) => {
        setInput(e.target.value)
      }} />
      <p>the length of input is {textlength1}</p>
    </>
  )


}

export default App
