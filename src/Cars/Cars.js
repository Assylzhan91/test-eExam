import React, {Component} from 'react'
import Car from './Car/Car'

export default class Cars extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ]
  }

  goBackHome = ()=>{
    this.props.history.push('/')
  }
  render() {
    
    return (
      <div style={{
        width: 400,
        margin: 'auto',
        paddingTop: '20px'
      }}>
        <button
          onClick={this.goBackHome} 
        >Go back to Home </button>
        {this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
            />
          )
        })}
      </div>
    )
  }
}
