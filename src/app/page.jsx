'use client'

import { useRef, useState } from "react"
import Navbar from "./Navbar";
import Home from "./Home"

const page = ()=>{
  const title = 'This is great to know';
  const like = 50;
  const link = 'https://www.google.com';
  
  return(<div className="App">
    <div>
      <h1 className="Com">Componets</h1>
      <Navbar />
      <h2>{title}</h2>
      <h4>liked {like} times</h4>
      <Home />
    </div>

  </div>)
}
export default page




