import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgetPassword () {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      try {
          if (email) {
              axios.post(`${process.env.REACT_APP_BASE_URL}/api/send-otp`, { email: email })
                  .then(res => {
                      console.log(`OTP : ${res.data.otp}`);
                      if (res.data.code === 200) {
                          const notify = () => toast.success(`*${res.data.message} ${res.data.otp}*`, { theme: 'colored' });
                          notify()
                          setTimeout(() => {
                              navigate('/newPassword')
                          }, 4000)
                      }else{
                          const notify = () => toast.error(`*${res.data.message}*`, { theme: 'colored' });
                          notify()
                      }
                  })
                  .catch(err => {
                      console.log(err);
                      const notify = () => toast.error(`*${err.response.data.message}*`, { theme: 'colored' });
                      notify()
                  })

          } else {
              const notify = () => toast.error("* Invalid input *", { theme: 'colored' });
              notify()
          }
      } catch (err) { 
          console.log("Error...", err);
      }
  }
  return (
    <>
      <div className='formSteps'>
        <div>
        
          <h1  className='display-3 mb-5'>Forget Password</h1>
        </div>
        <form
          className='row g-3 needs-validationd-flex flex-column'
          style={{ width: '40vw' }}
          onSubmit={handleSubmit}
          novalidate
        >
        
          <div className='col-md-12'>
          
            <input
              type='email'
              className='form-control p-3 mb-3'
              id='validationCustom03'
              name='email'
              placeholder='Enter your Email'
              value={email} onChange={e => setEmail(e.target.value)}
              required
            />
            <div className='invalid-feedback'>
              Please provide a valid E-mail.
            </div>
          </div>

          <div className='col-12'>
            <button
              style={{ width: '40vw' }}
              className='btn btn-primary'
              type='submit'
            >
              Send OTP
            </button>
            <ToastContainer hideProgressBar={true} />
          </div>
        </form>
      </div>
    </>
  )
}

export default ForgetPassword