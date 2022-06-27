import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter ,Route} from 'react-router-dom';
import LogInForm from './Screens/LogInForm';
import SignUpForm from './Screens/SignUpForm';

// const routing=(
//   <BrowserRouter>
//   <Route path="/about" component={SignUpForm}/>
//   </BrowserRouter>
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>
  // document.getElementById('root')
);


reportWebVitals();
