// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeEvent} = props
  const {registrationStatus} = activeEvent

  let eventStatus = ''

  switch (registrationStatus) {
    case 'YET_TO_REGISTER':
      eventStatus = (
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="register"
          />
          <p className="register-para">
            A live performance brings so much to your relationship with
            dance.Seeing dance live can often make you fall totally in love with
            this beautiful art form
          </p>
          <button type="button" className="btn">
            Register Here
          </button>
        </div>
      )
      break

    case 'REGISTERED':
      eventStatus = (
        <div className="registered-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="registered"
          />
          <h1 className="registered-para">
            You have already registered for the event
          </h1>
        </div>
      )
      break
    default:
      eventStatus = (
        <div className="registration-close-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="registrations-closed"
          />
          <h1 className="heading">Registrations Are Closed Now!</h1>
          <p className="para-closed">Stay tuned. We will reopen</p>
        </div>
      )
  }

  return <>{eventStatus}</>
}

export default ActiveEventRegistrationDetails
