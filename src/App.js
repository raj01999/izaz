import { Fragment, useState, useEffect } from 'react';
import './App.css';
import izaz1 from "./img/Izaz1.jpg"
import izaz2 from "./img/Izaz2.jpg"
import izaz3 from "./img/Izaz3.jpg"
import izaz4 from "./img/Izaz4.jpg"
import izaz5 from "./img/Izaz5.jpg"
import izaz6 from "./img/Izaz6.jpg"
import izaz7 from "./img/Izaz7.jpg"
import izaz8 from "./img/Izaz8.jpg"

function App() {
  const [pic, setPic] = useState(izaz1);

  useEffect(() => {
    setInterval(() => {
      const pics =  [ izaz1, izaz2, izaz3, izaz4, izaz5, izaz6, izaz7, izaz8];
      const random = Math.floor(Math.random() * pics.length);
      setPic(pics[random]);
    }, 3000);
  }, [])
  

  return (
    <Fragment>
      <div className='container rainbow'>
            <img src={pic} alt='abc' />
      </div>

    </Fragment>
  );
}

export default App;
