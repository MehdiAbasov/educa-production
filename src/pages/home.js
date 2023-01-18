import Header from 'components/header'
import Search from 'components/Search'
import React from 'react'

const Home = () => {
  return (
    <>
      <div className='flex h-full'>
        <Header />
        <div className='container p-3 bg-[#FAFAFA]'>
          <Search />
        </div>
      </div>
    </>
  )
}

export default Home