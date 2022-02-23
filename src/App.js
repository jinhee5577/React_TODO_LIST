 /*eslint-disable*/ 
 import React, { Component, useEffect, useState, useRef, } from 'react';
 import Home from './Home.js';
 import Lotto from './Lotto.js';
 import { Link, Route, Routes, } from 'react-router-dom';
 import { Nav, Form, Button} from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './App.css';


function App() {    

  return (
    <div className="App">
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} to='/' className="ya" >야 나두써!</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/lotto" eventKey="link-1">Lotto 명당</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">대기</Nav.Link>
        </Nav.Item>        
      </Nav> 
      
      <Routes>
         <Route exact path="/" element={<Home />} />
         <Route path="/lotto" element={<Lotto />} />
      </Routes>
     
    </div>
  );
}

export default App;
