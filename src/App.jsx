import { useState } from 'react'

 

function App() {
 const [email ,setEmail]=useState("");
 const [password ,setPassword]=useState("");
const [allEntry,setAllEmtry]=useState([]);

 const submitform=(e)=>{
  e.preventDefault()
const newEntry={ eamil:email,password:password
};
   setAllEmtry([...allEntry,newEntry])

 }

  return (
  <div>
    <div  class="bg-red-700">
    <div >ARTERNS</div>
   <div>


    <form action ="" onSubmit={submitform}>
    <div>
      <label htmlFor='email'>EMAIL<br></br></label>
      <input type="text" name="email" id="email" autoComplete='off' value={email}
      onChange={(e)=>setEmail(e.target.value)} ></input>

    </div>
<div>
      <label htmlFor='password'>PASSWORD<br></br></label>
      <input type="password" name="password" id="password" value={password}
      onChange={(e)=>setPassword(e.target.value)}></input></div>
    <button  class="bg-violet-700" type="submit">LOGIN PAGE</button>
    </form>

   </div>
 <div>  
{
  allEntry.map((curElem)=>{
    return(
      <div>
        <p>  YOUR PASSWORD  -{curElem.password}</p>
        <p1>  YOUR EMAIL  -{curElem.eamil}</p1>
      </div>
    )
  }
  )
}</div>
     </div>
     <div className="">Arterns Technologies Privated Limited</div>
     </div>
     
  )
}

export default App
