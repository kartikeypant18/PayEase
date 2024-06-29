// import React, { useState } from 'react'
// import { Heading } from '../Components/Heading'
// import { SubHeading } from '../Components/Subheading'
// import { InputBox } from '../Components/Inputbox'
// import { Button } from '../Components/Button'
// import { Bottomwarning } from '../Components/Bottomwarning'
// import axios from 'axios';
// const Signup = () => {
//   const [firstname,setfirstname] = useState("");
//   const [lastname,setlastname] = useState("");
//   const [username,setusername] = useState("");
//   const [Password,setPassword] = useState("");

//     return <div className="bg-slate-300 h-screen flex justify-center">
//     <div className="flex flex-col justify-center">
//       <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
//         <Heading  label={"Sign up"}/>
//         <SubHeading  label={"Enter your infromation to create an account"}/>   
//         <InputBox onChange={e=>{
//           setfirstname(e.target.value);
//         }}  placeholder="John" label={"First Name"} />
//         <InputBox onChange={e=>{
//           setlastname(e.target.value);
//         }}
//          placeholder="Singh" label={"Last Name"} /> 
//         <InputBox onChange={e=>{
//           setusername(e.target.value);
//         }} placeholder="@gmail.com" label={"Email"} />
//         <InputBox  onChange={e=>{
//           setPassword(e.target.value);
//         }} placeholder="123456" label={"Password"} />
//          <div className="pt-4">
//           <Button  onClick={()=>{
//             axios.post("http://localhost:3000/api/v1/user/signup",{
// username,
// firstname,
// lastname,
// Password
//           })
//           }}
//           label={"Sign up"} />
//         </div>
//         <Bottomwarning label={"Don't have an account?"} buttonText={"Sign in"} to={"/signin"} />
//     </div>
//      </div>
//      </div>
// }

// export default Signup
import React, { useState } from 'react';
import axios from 'axios';
import { Heading } from '../Components/Heading';
import { SubHeading } from '../Components/Subheading';
import { InputBox } from '../Components/Inputbox';
import { Button } from '../Components/Button';
import { Bottomwarning } from '../Components/Bottomwarning';

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
        username,
        firstName: firstname,  // Ensure this matches what your backend expects
        lastName: lastname,    // Ensure this matches what your backend expects
        password               // Ensure this matches what your backend expects
      });
      
      // handle success (e.g., redirect or display success message)
      console.log("Signup successful:", response.data);
      localStorage.setItem("token",response.data.token);
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
        setError(error.response.data.message || "There was an error signing up!");
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
        setError("No response from server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
        setError("There was an error signing up!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox onChange={e => setFirstname(e.target.value)} placeholder="John" label={"First Name"} />
          <InputBox onChange={e => setLastname(e.target.value)} placeholder="Singh" label={"Last Name"} />
          <InputBox onChange={e => setUsername(e.target.value)} placeholder="@gmail.com" label={"Email"} />
          <InputBox onChange={e => setPassword(e.target.value)} placeholder="123456" label={"Password"} />
          <div className="pt-4">
            <Button onClick={handleSubmit} label={loading ? "Signing up..." : "Sign up"} disabled={loading} />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Bottomwarning label={"Don't have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div>
      </div>
    </div>
  );
}

export default Signup;


