// Write your code here
import './index.css'

const EventItem = props => {
  const {activeEvent, eventDetails, onClickEvent} = props
  const {imageUrl, name, location} = eventDetails

  const onSelectEvent = () => {
    onClickEvent(eventDetails)
  }

  const activeBorder = activeEvent.id === eventDetails.id ? 'event-border' : ' '

  return (
    <li className="event-list-container">
      <button
        className={` button ${activeBorder}`}
        type="button"
        onClick={onSelectEvent}
      >
        <img src={imageUrl} alt="event" className="img-element" />
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}
export default EventItem
