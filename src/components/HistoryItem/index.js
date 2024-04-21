import './index.css'

const HistoryItem = props => {
  const {values, remove} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = values
  const deleteItem = () => remove(id)
  return (
    <li className="historyItem">
      <p className="time">{timeAccessed}</p>
      <div className="itemContainer">
        <img className="image" src={logoUrl} alt="logoUrl" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="button"
        data-testid="delete"
        onClick={deleteItem}
      >
        <img
          className="deleteIcon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
