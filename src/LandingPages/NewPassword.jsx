import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewPassword () {
  const navigate = useNavigate()

  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    try {
      if (otp && password) {
        axios
          .post(`${process.env.REACT_APP_BASE_URL}/api/submit-otp`, {
            otp: otp,
            password: password
          })
          .then(res => {
            console.log(res.data)
            if (res.data.code === 200) {
              const notify = () =>
                toast.success(`*${res.data.message}*`, { theme: 'colored' })
              notify()
              setTimeout(() => {
                navigate('/signin')
              }, 3000)
            } else {
              const notify = () =>
                toast.error(`*${res.data.message}*`, { theme: 'colored' })
              notify()
            }
          })
          .catch(err => {
            console.log(err)
            const notify = () =>
              toast.error(`*${err.response.data.message}*`, {
                theme: 'colored'
              })
            notify()
          })
      } else {
        const notify = () =>
          toast.error('* Invalid input *', { theme: 'colored' })
        notify()
      }
    } catch (err) {
      console.log('Error...', err)
    }
  }

  return (
    <>
      <div className='formSteps'>
        <div>
          <h1 className='display-3'>New Password</h1>
        </div>
        <form
          className='row g-3 needs-validationd-flex flex-column'
          style={{ width: '40vw' }}
          onSubmit={handleSubmit}
          novalidate
        >
          <div className='col-md-12'>
          
            <input
              type='otp'
              className='form-control p-3'
              id='validationCustom03'
              name='OTP'
              placeholder='Enter OTP'
              value={otp}
              onChange={e => setOtp(e.target.value)}
              required
            />
          </div>

          <div className='col-md-12'>
          
            <input
              type='password'
              className='form-control p-3'
              id='validationCustom03'
              name='email'
              placeholder='New Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <div className='col-12'>
            <button
              style={{ width: '40vw' }}
              className='btn btn-primary'
              type='submit'
            >
              Submit
            </button>
            <ToastContainer hideProgressBar={true} />
          </div>
        </form>
      </div>
    </>
  )
}

export default NewPassword