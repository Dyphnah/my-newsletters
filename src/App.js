import { useState, } from 'react'
import './App.css'

function App() {

  function HandleSubmit(e){
    e.preventDefault()

    }
const [inputValue, setInputValue] = useState("")

function HandleFormInput (){
  setInputValue(inputValue.target.value)
}

return (
  <div className='newsletter-conatainer'>
  <div className='inner-div'>
    <div>
      <h1>Stay Updated!</h1>
      <p> Join 60,000+ product managers receiving monthly updates on:</p>
    </div>
    <div>
      <input type="checkbox" checked />Product discovery and building what matters.<br></br>
      <input type="checkbox" checked />Measuring to ensure updates are a success.<br></br>
      <input type="checkbox" checked />And much more!
    </div>
    <form onSubmit={HandleSubmit} className='form-container'>
      <label>Email Adrress</label><br></br>
      <input type='text' placeholder='dnnn@gmail.com' onChange={HandleFormInput} value={inputValue} required/><br></br>
      <button type='submit'>Subscribe to monthly newsletter</button>
      <img src="https://reactjs.org/logo-og.png" alt="React Image" />
    </form>
    </div>
  </div>

)
  
}

export default App;

