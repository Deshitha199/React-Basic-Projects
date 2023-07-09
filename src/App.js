import React, {useState} from 'react';
import List from "./List";
import data from "./data";

function App() {

  const [people, setPeople] = useState(data);

  return (
    <div className="container">
      <h3>{people.length} Birth Days Today</h3>
        <List people={people} />
      <button onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;
