import React from 'react'
import ReactDOM from 'react-dom/client'

import FlightApp from './FlightApp.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <FlightApp />
 // </React.StrictMode>,
)

/*



const container=document.getElementById('root');
const root=createRoot(container);
root.render( <FlightApp/>);

ReactDOM.render(
  <div>
 <FlightApp/>
  </div>,
  document.getElementById('root')
);*/
