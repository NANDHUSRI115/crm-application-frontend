import React from 'react'

function Content() {
  return (
    <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <h1 className='page-header-ui-title'>
              SUPERFAST WORK. STEADFAST GROWTH.
            </h1>
            <p className='page-header-ui-text mb-5'>
              Bring the very best out of your customer-facing teams with robust
              automation, comprehensive analytics, personalized solutions, and
              more. Sign up and get started in no time—the fastest
              implementation in the enterprise CRM market.
            </p>
            <div className='d-flex flex-column flex-sm-row'>
              <a
                className='btn btn-lg btn-primary fw-500 me-sm-3 mb-3 mb-sm-0'
                href='#explore'
              >
                Explore Pages
              </a>
              <a
                className='btn btn-lg btn-primary-soft text-primary fw-500'
                href='#'
              >
                Documentation
              </a>
            </div>
          </div>

          <div className='col-md-6'>
            <img
              src='https://img.freepik.com/free-vector/flat-concept-email-marketing-with-people-sending-advertising-messages-reaching-target-audience-vector-illustration_1284-75468.jpg?w=1060&t=st=1678955128~exp=1678955728~hmac=c144c8bf8b42eb6e617fc903a7e9562b60012fa54858f8ef70c5b7e71dcbcfaf'
              style={{ width: '100%', height: '85vh' }}
            ></img>
          </div>
        </div>
      </div>
  )
}

export default Content