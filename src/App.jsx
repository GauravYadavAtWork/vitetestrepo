import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [prjName, setPrjName] = useState("");

  const handlePrjNameChange = (event)=>{
    setPrjName(event.target.value);
  }
  
  useEffect(()=>{  // debouncing in react 

    const timer = setTimeout(async()=>{
      if(prjName!=""){
        const data = await fetch('http://localhost:3000',{
          method:'POST',
          body : {
            ProjectName : prjName,
          }
        });
        const response = await data.json();
        console.log(response);
      }
    },500);

    return ()=>{
      clearTimeout(timer);
    }
  },[prjName])

  return (
    <>
      <input value={prjName} onChange={handlePrjNameChange} className='inputbox' placeholder='Enter Project Name'></input>
    </>
  )
}

export default App
