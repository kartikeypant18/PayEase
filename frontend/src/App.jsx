import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Dashboard from './Pages/Dashboard';
import SendMoney from './Pages/SendMoney';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/signup' element={<Signup />} />
  <Route path='/signin' element={<Signin />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path='/sendmoney' element={<SendMoney />} />
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
