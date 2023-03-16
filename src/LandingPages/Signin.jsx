import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Signin = ({ setLoginUser }) => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()
    const newUser = { ...user }
    try {
      if (newUser) {
        axios
          .post(`${process.env.REACT_APP_BASE_URL}/api/signin`, newUser)
          .then(res => {
            if (res) {
              const notify = () =>
                toast.success(`Welcome Mrs/Mr.${res.data.user.firstName}`, {
                  autoClose: 3000,
                  theme: 'colored'
                })
              notify()
              localStorage.setItem('TOKEN', res.data.token)
              localStorage.setItem('NAME', res.data.user.firstName)
              localStorage.setItem('EMAIL', res.data.user.email)
              localStorage.setItem('ROLE', res.data.user.role)
              setLoginUser(res.data.user)
              setTimeout(() => {
                navigate('/employee/navbar')
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

  const handleForm = value => {
    return setUser(user => {
      return { ...user, ...value }
    })
  }

  return (
    <>
      <div className='formSteps'>
        <form onSubmit={handleSubmit} style={{ width: '40vw' }}>
          <h1 className='display-2 text-center p-3'>Signin</h1>
          <div className='form-outline mb-4'>
            <input
              type='email'
              id='form2Example1'
              className='form-control p-3'
              name='email'
              value={user.email}
              onChange={e => handleForm({ email: e.target.value })}
              placeholder='Enter your Email'
            />
          </div>

          <div className='form-outline mb-4'>
            <input
              type='password'
              id='form2Example2'
              className='form-control p-3'
              name='password'
              value={user.password}
              onChange={e => handleForm({ password: e.target.value })}
              placeholder='Password'
            />
          </div>

          <div className='row mb-4'>
            <div className='col text-center'>
              <NavLink to='/forgetPassword'>Forgot password?</NavLink>
            </div>
          </div>

          <div className='form-group text-center'>
            <input
              type='submit'
              value='Signin'
              className='btn btn-primary'
              style={{ width: '40vw' }}
            />
            <ToastContainer autoClose={3000} theme='colored' />
          </div>
          <br />

          <div className='text-center'>
            <p>
              Not a member?{' '}
              <NavLink to='/signup'>
                <a>Register</a>
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}
export default Signin