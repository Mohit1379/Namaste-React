import React from 'react';
import ReactDOM from 'react-dom/client'

const Heading=()=>{
  return(
    <div>
      <h1>This is a Heading Part</h1>
    </div>
  )
}

const Footer=()=>{
  return(
    <div>
      <h1>This is a Footer Part</h1>
    </div>
  )
}


const Body=()=>{
  return(
    <div>
      <Heading />
        <div>
            <h1>This is Body Part</h1>
        </div>
      <Footer/>
    </div>
   
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>);
