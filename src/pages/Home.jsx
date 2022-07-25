import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

const Home = () => {
  return (
    <div className='text-[#fff]'>
        <UserSearch />
        <UserResults />
    </div>
  )
}

export default Home