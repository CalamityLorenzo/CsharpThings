import * as React from "react"
import * as ReactDOM from "react-dom"

const myReact:any=()=><h1>Here we are</h1>

let breakFastmain = document.getElementById("breakfastMain");

if(breakFastmain)
{
    ReactDOM.render(myReact, breakFastmain);
}