import  {StrictMode}  from 'react'
import  {createRoot}  from 'react-dom/client'
// import './index.css'
import App from './App.jsx'


// ReactDOM does not exist in react-dom/client
// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));

// const name = 9;
createRoot(document.getElementById('root')).render(
  // <h1>Hello world</h1>,
  // <div>
  //   <h1>Hello Agam</h1>
  //   <p>Your lucky number is {name}</p>
  // </div>
  <StrictMode>
    <App />
  </StrictMode>,
)
