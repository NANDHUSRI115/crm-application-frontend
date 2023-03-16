import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { firstName, lastName, email, password } = user
      if (firstName && lastName && email && password) {
        axios
          .post(`${process.env.REACT_APP_BASE_URL}/api/signup`, user)
          .then(res => {
            if (res) {
              const notify = () =>
                toast.success(`*${res.data.message}*`, { theme: 'colored' })
              notify()
              setTimeout(() => {
                navigate('/signin')
              }, 3000)
            }
          })
          .catch(err => {
            const notify = () =>
              toast.error(`*${err.response.data.message}*`, {
                theme: 'colored'
              })
            notify()
          })
      } else {
        const notify = () => toast.error('Invalid input', { theme: 'colored' })
        notify()
      }
    } catch (err) {
      const notify = () => toast.error(' Input Error', { theme: 'colored' })
      notify()
      console.log('Error...', err)
    }
  }

  return (
    <>
      <div className='formSteps'>
        <div>
          <h1 className='display-2'>Signup</h1>
        </div>
        <form
          className='row g-3 needs-validationd-flex flex-column'
          style={{ width: '40vw' }}         
          onSubmit={handleSubmit}
          novalidate
        >
          <div className='col-md-12'>
         
            <input
              type='text'
              className='form-control p-3'
              id='validationCustom01'
              name='firstName'
              placeholder='First name'
              value={user.firstName}
              onChange={handleChange}
              required
            />
            <div className='valid-feedback'>Looks good!</div>
          </div>
          <div className='col-md-12'>
          
            <input
              type='text'
              className='form-control p-3'
              id='validationCustom02'
              name='lastName'
              placeholder='Last name'
              value={user.lastName}
              onChange={handleChange}
              required
            />
            <div className='valid-feedback'>Looks good!</div>
          </div>

          <div className='col-md-12'>
          
            <input
              type='text'
              className='form-control p-3'
              id='validationCustom03'
              name='email'
              placeholder='Email'
              value={user.email}
              onChange={handleChange}
              required
            />
            <div className='invalid-feedback'>
              Please provide a valid E-mail.
            </div>
          </div>

          <div className='col-md-12'>
           
            <input
              type='password'
              className='form-control p-3'
              id='validationCustom05'
              name='password'
              placeholder='Password'
              value={user.password}
              onChange={handleChange}
              required
            />
            <div className='invalid-feedback'>Please provide a Password.</div>
          </div>

          <div className='col-12'>
            <button
              style={{ width: '40vw' }}
              className='btn btn-primary'
              type='submit'
            >
              Signup
            </button>
            <ToastContainer hideProgressBar={true} />
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup