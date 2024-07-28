import React from "react";



function App() {

  return (
    <div className='App'>
        <Job salary={90000} position='Senior Dev' company='Amazaon'/>
        <Job salary={9000000} position='Senior Dev 1' company='Google'/>
        <Job salary={900000} position='Senior Dev 2' company='Pokemon'/>
    </div>
  );
}


const Job = (props) => {
  return (<div>
    <h1>{props.salary}</h1>
    <h1>{props.position}</h1>
    <h1>{props.company}</h1>
  </div>)

}

export default App;
