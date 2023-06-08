import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className="card-container">
      <div className={className}>
        <div className="container">
          <div className="card">
            <h1 className="heading">{title}</h1>
            <p className="para">{description}</p>
          </div>
          <div className="image">
            <img src={imgUrl} alt={className} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default CardItem
