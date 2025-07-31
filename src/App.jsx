import Login, {Register, Setting, userKey} from './UserComponent.jsx'
// default export vala aise hi likh skte hai lakin uske alava sabhi exports curly brackets me aate hai

import { useState } from 'react';

import Counter from './counter.jsx';

import Props, {Wrapper} from './Props.jsx';

import CheckBoxes from './checkBoxes.jsx';

import Loops from './loops.jsx';
import Clock from './clock.jsx';


function App(){
const [fruit, setFruit] = useState("Apple");

const handleFruit = () => {
  setFruit("Banana")
}

let userObject1={
  name: "Agam1",
  age: 21,
  email:"agam1@test.com"
}

let userObject2={
  name: "Agam2",
  age: 22,
  email:"agam2@test.com"
}

let userObject3={
  name: "Agam3",
  age: 23,
  email:"agam3@test.com"
}

const [val, setVal] = useState("");


const [name, setName] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");


const [selectedColor, setSelectedColor] = useState("white");

const handleChange = (event) => {
  setSelectedColor(event.target.value);
}

  return(
    <div>
      <h1>First Component</h1>
      <Fruit/>
      <Login />
      <Register />
      <Setting />
      <h1>{userKey}</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Click to change fruit name</button>
      <Counter />
      <h1>Props in React Js</h1>
      <Props user={userObject1} />
      <Props user={userObject2} />
      <Props user={userObject3} />

      <Wrapper>
        <h1>This is a wrapper function</h1>
        <h2 style={{color:"red"}}>hello</h2>
      </Wrapper>
      <br />
      <hr />


      <h1>Get Input Field Value</h1>
      <input type="text" value={val} onChange={(event) => setVal(event.target.value)} placeholder="Enter username" />
      <h1>{val}</h1>
      <button onClick={()=>setVal("")}>Clear Value</button>



      <hr />
      <h1>Controller Component</h1>
      <form action="" method="GET">
        <input type="text" onChange={(event)=> setName(event.target.value)} placeholder="Enter Name" />
        <br /><br />
        <input type="password" onChange={(event)=> setPassword(event.target.value)} placeholder="Enter Password" />
        <br /><br />
        <input type="email" onChange={(event)=> setEmail(event.target.value)} placeholder="Enter Email" />
        <br /><br />
        <button>Submit</button>
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
      </form>



      <br />
      <hr />
      <h1>Handle checkboxes in React JS</h1>
      <CheckBoxes />

      <br /><hr />
      <Loops />

      <br /><hr />


      <h1>Digital clock in React JS</h1>
      
      <select onChange={handleChange} >
        <option value="white">White</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
      </select>

      <Clock color={selectedColor} />


    </div>



  )
}

function Fruit(){
  return (
    <h1>Apple</h1>
  )
}

export default App
