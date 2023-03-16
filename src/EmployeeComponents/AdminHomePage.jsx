import { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import NavigationBar from '../NavigationBar'
import Content from '../Content'

const AdminHomePage = () => {
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
      <main>
        <h1 className='text-center pt-4'>Welcome ! Admin</h1>
        <p className='lead text-center'>Hi ! {localStorage.getItem('NAME')}</p>
        <Content />
      </main>
    </div>
  )
}

export default AdminHomePage