import React, { useEffect, useState } from 'react';
import { Loading } from './Loading';
import { Tours } from './Tours';
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const result = tours.filter((tour) => tour.id !== id);
    setTours(result)
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setLoading(false);
      setTours(tours);
      console.log(tours);

    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  } 
  if (tours.length === 0) {
    return (
      <main>
        <h1>No Record</h1>
        <button className='btn' onClick={() => fetchTours()}>Refresh</button>
      </main>
    )
  }
  else {
    return (
      <main>
        <Tours tours={tours}  removeTour={ removeTour }/>
      </main>
    )
  }


}

export default App;
