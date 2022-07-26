import React from "react"

export default function ButtonComponent() {
  const test = () => {
    alert("Loaded");
  }
  console.log("Loading...")
  return(

   <button className="btn btn-primary"  onClick={() => test}>Test</button>
  
  )
}

  