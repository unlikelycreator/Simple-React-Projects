import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  {people.map((person)=>{
    const{date}= person;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    var today = dd+'/'+mm; //Only Day Month format
    console.log(today, date);
    if (person.date === today){
      var todaybd = person.name;
      alert("Today is " + todaybd + " birthday");
    }
  })}
  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button onClick={()=> setPeople([])}>Clear all</button>
    </section>
    <section>
      <h1>{}</h1>
    </section>
    </main>;
}

export default App;
