// Write your code here
import './index.css'

const PlanetItem = props => {
  const {item} = props
  const {name, imageUrl, description} = item
  return (
    <li className="LISTcONT">
      <img src={imageUrl} alt={`planet ${name}`} className="Planetaimge" />
      <h1 className="planetname">{name}</h1>
      <p className="planetDesc">{description}</p>
    </li>
  )
}
export default PlanetItem
