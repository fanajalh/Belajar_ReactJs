import { useState } from 'react'
import './App.css'

function Greting() {
  return (
    <>
    <h1>haloo</h1>
    </>
  );
}
// props
function Biodata(props) {
  return (
    <>
    <p>nama : {props.nama}</p>
    <p>kelas : {props.kelas}</p>
    <p>NISN : {props.nisn}</p>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greting />
      <Biodata nama="arfan" kelas="12" nisn="12345" />
      <Biodata nama="fabian" kelas="12" nisn="67890"    />
    </>
  )
}

export default App
