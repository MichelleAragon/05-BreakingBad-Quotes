import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './05-useLayoutEffect/Layout';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { HooksApp } from './HooksApp';
// import { SimpleForm } from './02-useEffect/SimpleForm'; 
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    //  {/* <CounterApp /> */}
    //  <SimpleForm />
    // <FormWithCustomHook />
    // <FocusScreen />
    // <MultipleCustomHooks/>

    <Layout />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

