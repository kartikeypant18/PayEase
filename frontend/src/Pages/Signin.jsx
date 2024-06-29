import React from 'react'
import { Heading } from '../Components/Heading'
import { SubHeading } from '../Components/Subheading'
import { InputBox } from '../Components/Inputbox'
import { Button } from '../Components/Button'
import { Bottomwarning } from '../Components/Bottomwarning'

const Signup = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading  label={"Sign in"}/>
        <SubHeading  label={"Enter your infromation to create an account"}/>   
        <InputBox placeholder="jhnosingh@gmail.com" label={"Email"} />
        <InputBox placeholder="123456" label={"Password"} />
         <div className="pt-4">
          <Button label={"Sign in"} />
        </div>
        <Bottomwarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
    </div>
     </div>
     </div>
}

export default Signup