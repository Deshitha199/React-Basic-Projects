import React from 'react'
import { Tour } from './Tour'

export const Tours = ({tours, removeTour}) => {
  return (
    <section> 
        <div className='title'>
            <h1>Our Tours</h1>
        </div>
        <div>
            {tours.map((tour) => {
                return<Tour key={tour.id} {...tour} removeTour={removeTour}/>
            })}
        </div>

    </section>
  )
}
