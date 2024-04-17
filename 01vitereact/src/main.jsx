import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function Myapp(){
//   return(
//     <div>
//       <h1>click me</h1>
//     </div>
  
//   )
// }


// const reactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank' 
//   },
//   children:'click me to visit google'
// }


// const anotherElement=(
//   <a href="https://google.com" target="_blank">visit google</a>
// )


const antElement=" chai aur code"

const reactElement=React.createElement(
  "a",
  {href:"https://google.com",target:"_balnk"},
  "click me to visit google",
  antElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <App/>
  // reactElement
  

)
