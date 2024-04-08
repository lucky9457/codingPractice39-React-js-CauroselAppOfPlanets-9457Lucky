// Write your code here

import {Component} from 'react'

import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

class PlanetsSlider extends Component {
  state = {list: []}

  componentDidMount() {
    this.getList()
  }

  getList = () => {
    const {planetsList} = this.props
    this.setState({
      list: planetsList,
    })
  }

  render() {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const {list} = this.state
    console.log(list)
    const ab = list.map(each => ({
      name: each.name,
      imageUrl: each.imageUrl,
      id: each.id,
      description: each.description,
    }))
    console.log(ab)
    return (
      <div data-testid="planets" className="mainCont">
        <h1 className="planetshead">PLANETS</h1>
        <ul>
          <Slider {...settings}>
            {list.map(each => (
              <PlanetItem item={each} key={each.id} />
            ))}
          </Slider>
        </ul>
      </div>
    )
  }
}
export default PlanetsSlider
