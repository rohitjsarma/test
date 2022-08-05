import React from "react";
import ReactDOM  from "react";
import Button from "../button";
import {render} from "@testing-library/react"
import "jest-dom/extend-expect"

it("render without crashing ",()=>{
   const div = document.createElement("div");
   ReactDOM.render(<Button/>,div)
})
it("render button correctly ",()=>{
    const div = document.createElement("div");
    const {getByTestId}=render(<Button label="Click me Here"/>)
   expect( getByTestId('button')).toHaveTextContent("Click me Here")
 })

 it("render button correctly ",()=>{
    const div = document.createElement("div");
    const {getByTestId}=render(<Button label="Click "/>)
    expect( getByTestId('button')).toHaveTextContent("Click")
 })