import React from 'react'
import { Appbar } from '../Components/Appbar'
import { Balance } from '../Components/Balance'
import { Users } from '../Components/Users'

const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <Balance />
      <Users />
    </div>
  )
}

export default Dashboard