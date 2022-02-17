 /*eslint-disable*/ 
 import React, { Component, useEffect, useState, useRef, } from 'react';
 import { Nav, Form, Button} from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './App.css';

function App() {
  let storege = localStorage.getItem('list');
    if( storege === null ){
        storege = [];
    } else {
        storege = JSON.parse(storege);
    }
  let [ya_list, setya_list] = useState(storege);
  let [list_input, setlist_input] = useState('');
  let [confirm_list, setconfirm_list] = useState('');

  let save = () => {         
        storege.push(list_input);       
        localStorage.setItem('list', JSON.stringify(storege)); 
        setya_list(storege);     
    }
     

  return (
    <div className="App">
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link className="ya" >야 나두써!</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Todo추가</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Option 3</Nav.Link>
        </Nav.Item>        
      </Nav> 
      <div id="ya_main">
        <h4>야 나두써</h4> <button onClick={() => { localStorage.removeItem('list'); setya_list([]);}} >전체삭제</button>
        <div id="ya_list">
          {  
             ya_list.length > 0 
             ? ya_list.map((item, i) => {
                    return (
                        <div key={i} className={`listbox listbox${item}`}>
                          {item}
                        </div>
                    );
                })             
             : <div className='empty'>List를 추가해주세요.</div>
          }           
        </div>
        <Form className="todoform">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>너의 할일</Form.Label> */}
            <Form.Control onChange={(e) => { setlist_input(e.target.value); }} type="text" placeholder="할일있잖아~ 입력해 주세요." />          
          </Form.Group>           
          <Button variant="primary" onClick={save} >
            저장
          </Button>
        </Form>
      </div>   
    </div>
  );
}

export default App;
