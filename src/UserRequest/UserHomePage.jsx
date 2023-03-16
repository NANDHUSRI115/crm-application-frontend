import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavigationBar from '../NavigationBar'
import Content from '../Content'

const UserHomePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('TOKEN')
    if (!token) {
      navigate('/')
    }
  }, [navigate])
  return (
    <div>
      <NavigationBar />
      <div style={{ backgroundColor: 'yellow', fontWeight: 'bold' }}>
        <marquee>
          <p className='pt-2 lead' style={{ fontWeight: 'bold' }}>
            * Please get Premium to unlock More Features *
          </p>
        </marquee>
      </div>
      <main>
        <h1 className='text-center pt-2'>Welcome ! User</h1>
        <p className='lead text-center'>Hi ! {localStorage.getItem('NAME')}</p>
        <Content />
      </main>
    </div>
  )
}

export default UserHomePage