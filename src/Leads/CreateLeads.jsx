import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../LandingPage.css'

const CreateLeads = () => {
  const navigate = useNavigate()

  const [employeeDetails, setEmployeeDetails] = useState({
    name: '',
    email: '',
    queryType: '',
    query: ''
  })

  const handleSubmit = async e => {
    e.preventDefault()
    const newEmployee = { ...employeeDetails }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/create-lead`,
        newEmployee
      )
      console.log()
      if (response) {
        setEmployeeDetails({
          name: '',
          email: '',
          queryType: '',
          query: ''
        })
        const notify = () =>
          toast.success(' request sent successfully!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored'
          })
        notify()
      }
    } catch (err) {
      console.log('Error: ', err)
    }
  }

  const handleForm = value => {
    return setEmployeeDetails(employee => {
      return { ...employee, ...value }
    })
  }

  return (
    <>
      <div className='formStepsContact'>
       
        <h3>Create Query</h3>
        <form style={{ width: '50vw' }} onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name' className='p-1'>Name</label>
            <input
              className='form-control'
              id='name'
              type='text'
              placeholder='Name'
              value={employeeDetails.name}
              onChange={e => handleForm({ name: e.target.value })}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              className='form-control'
              id='email'
              type='text'
              placeholder='Email'
              value={employeeDetails.email}
              onChange={e => handleForm({ email: e.target.value })}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='level'>Query Type</label>
            <input
              className='form-control'
              id='queryType'
              type='text'
              placeholder='(E:g) Finance,Accounts,etc...'
              value={employeeDetails.queryType}
              onChange={e => handleForm({ queryType: e.target.value })}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='level'>Query</label>
            <input
              className='form-control'
              id='query'
              type='text'
              placeholder='Query Detail'
              value={employeeDetails.query}
              onChange={e => handleForm({ query: e.target.value })}
              required
            />
          </div>
          <br />
          <div className='form-group'>
            <input
              type='submit'
              value='Send'
              className='btn btn-primary'
              style={{ width: '50vw' }}
            />
            <ToastContainer
              position='top-center'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='colored'
            />
          </div>
        </form>
        <NavLink to={'/employee/navbar'}>
          <button className='btn btn-secondary mt-4'>
            Back to Home
          </button>
        </NavLink>
      </div>
    </>
  )
}

export default CreateLeads