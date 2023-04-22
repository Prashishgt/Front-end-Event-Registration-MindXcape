import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './page/home/Home';
import { EventDetail } from './page/eventDetail/EventDetail';
import Error from './page/global/Error';
import RegistrationHome from './page/registration/RegistrationHome';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/eventDetails' element={<EventDetail />}/>
            <Route path='/registration' element={<RegistrationHome />}/>    
            <Route path='*' element={<Error />}/>
        </Routes>
    </Router>
  )
}

export default App