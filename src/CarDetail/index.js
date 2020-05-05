import React from 'react'

const CarDetail = props => {
  console.log('CarDetail',props.match.params.id)
  return (
    <div> 
      name: {props.match.params.id}
      <button
      onClick={ ()=> {
        props.history.push('/cars/')
      }}>
          BAck
      </button>
    </div>
  )
}

export default CarDetail

