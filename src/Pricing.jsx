import { NavLink } from 'react-router-dom'
import './Pricing.css'
import StripeCheckout from 'react-stripe-checkout'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'

const Pricing = () => {
  const [product] = useState({
    name: 'CRM_GROUP',
    description: 'for get premium'
  })

  async function handleToken (token) {
    const body = { token, product }
    const headers = { 'Content-Type': 'application/json' }
    return fetch(`${process.env.REACT_APP_BASE_URL}/api/checkout`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <>
      <div className='container-fluid' style={{ backgroundColor: '#B9D9EB' }}>
        <div className='p-5'>
          <div className='row'>
            <h1 className='text-center text-primary p-4'>Pricing</h1>
            <p
              className='lead text-center'
              style={{
                color: 'darkblue',
                fontSize: '35px',
                fontWeight: 'bold'
              }}
            >
              Stripe Payment Integration
            </p>
            <div className='col-lg-4 col-md-12 mb-4'>
              <div className='card card1 h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>Basic</h5>
                  <small className='text-muted'>Individual</small>
                  <br />
                  <span className='h2'>â‚¹ 799</span>/month
                  <br />
                  <div>
                    <div className='d-grid my-3'>
                      <StripeCheckout
                        stripeKey={`${process.env.REACT_APP_KEY}`}
                        token={handleToken}
                        name={product.name}
                        currency='INR'
                        amount={799 * 100}
                        billingAddress
                        shippingAddress
                      />
                    </div>
                    <ul>
                      <li>Automate and optimize your sales cycle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-12 mb-4'>
              <div className='card card1 h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>Standard</h5>
                  <small className='text-muted'>Small Business</small>
                  <br />
                  <span className='h2'>â‚¹ 1649</span>/month
                  <br />
                  <div>
                    <div className='d-grid my-3'>
                      <StripeCheckout
                        stripeKey={`${process.env.REACT_APP_KEY}`}
                        token={handleToken}
                        name={product.name}
                        currency='INR'
                        amount={1649 * 100}
                        billingAddress
                        shippingAddress
                      />
                    </div>
                    <ul>
                      <li>
                        Improve customer acquisition and accelerate growth
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-12 mb-4'>
              <div className='card card1 h-100'>
                <div className='card-body'>
                  <h5 className='card-title'>Premium</h5>
                  <small className='text-muted'>Large Company</small>
                  <br />
                  <span className='h2'>â‚¹ 3299</span>/month
                  <br />
                  <div>
                    <div className='d-grid my-3'>
                      <StripeCheckout
                        stripeKey={`${process.env.REACT_APP_KEY}`}
                        token={handleToken}
                        name={product.name}
                        currency='INR'
                        amount={3299 * 100}
                        billingAddress
                        shippingAddress
                      />
                    </div>
                    <ul>
                      <li>
                        Scale exponentially with dedicated BI capabilities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center'>
            <NavLink to={'/employee/navbar'}>
              <button className='btn btn-secondary'>Back to Home</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing