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
  let [count, setcount] = useState(1);           
  let mapIndex = 0;   // useState()로 변경 하면 조금 늦게 처리되어 수정 에러가 난다.

  let today = new Date();
  let year = today.getFullYear(); 
  let month = today.getMonth() + 1;
  let saveDay = today.getDate();
 // console.log(saveDay );     

  let item_obj = {
               id : count,
               contant : list_input,
               isON : false,
               Day : [year, month, saveDay],
           };     
 
  let save = () => {  
        let copy = [...ya_list, item_obj];   
        localStorage.setItem('list', JSON.stringify(copy)); 
        setya_list(copy);     
        setlist_input('');    
        // setcount(() => {
        //      if(ya_list.length > 0){ return ya_list[length - 1].id + 1; }
        //      else { return count + 1; }
        //  });
    //    console.log(ya_list);
    }

  let changeON = () => {     
      let copy = [...ya_list];              
      copy[mapIndex]['isON'] = !copy[mapIndex]['isON'];
      localStorage.setItem('list', JSON.stringify(copy)); 
      setya_list(copy);   //여기는 되는데 ....
   //   console.log(ya_list);   
   }  

  let Nomal_Delete = () => { 
      let copy = [...ya_list];   
      copy.splice(mapIndex, 1);    
      localStorage.setItem('list', JSON.stringify(copy)); 
      setya_list(copy); 
  }

  // let selecs_Dele = () => {

  // }

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
          <Nav.Link eventKey="link-2">대기</Nav.Link>
        </Nav.Item>        
      </Nav> 
      <div id="ya_main">
        <h4>야 나두써  <button onClick={() => { 
                localStorage.removeItem('list'); 
                alert('정말로 전부 삭제하시죠?'); 
                setya_list([]);}} >전체삭제</button></h4> 
        <div id="ya_list">
          {  
             ya_list.length > 0 
             ? ya_list.map((item, i) => {                
                    return (
                        <div key={i} className={`listbox listbox${item.id}`} >
                          <input type="checkbox" name="check" checked={item.isON} className='ck' 
                           value={i} onChange={() => { mapIndex = i; changeON(); }}  />
                          <article>
                            <p className={item.isON ? 'on' : ''}>{item.contant}</p>
                            <h6>{item.Day[0]}년 {item.Day[1]}월 {item.Day[2]}일</h6>
                          </article>
                          <button onClick={() => { mapIndex = i; Nomal_Delete(); }}>X</button>
                        </div>
                    );
                })             
             : <div className='empty'>List를 추가해주세요.</div>
          }           
        </div>
        <Form className="todoform">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>너의 할일</Form.Label> */}
            <Form.Control onChange={(e) => { setlist_input(e.target.value); }} value={list_input} placeholder="할일있잖아~ 입력해 주세요." />          
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
