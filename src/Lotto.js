 /*eslint-disable*/ 
 import React, { Component, useEffect, useState, useRef, } from 'react';
 import { Nav, Form, Button} from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './App.css';


 function Lotto(){
     let numboxRef = useRef();
     let num45 = new Array;
     let lotto6 = [];
     let [myLottto, setmyLottto] = useState([]);

     let create = () => {         
          for(let i = 0; i < 45; i++){
             num45[i] = i + 1;          
          }
          
          for(let c = 0; c <= 5; c++ ){
            let T = Math.floor(Math.random()*45 - c);
            let choice = num45.splice(T, 1);
            lotto6.push(choice);
          }

          lotto6.sort((a, b) => { return a - b; });   //낮은 숫자순
          let state_copy = [...myLottto, lotto6];
          setmyLottto(state_copy);
     }


     return (
         <div id="lotto">
             <h3>1등 Lotto 번호 뽑아줄게!</h3>
             <Button variant="warning" className="create" onClick={create}>뽑기</Button>
             <Button variant="danger" className='delete' onClick={()=> {setmyLottto([]);}}>삭제</Button>
             <ul id="num_box" ref={numboxRef}>
                {
                   myLottto.length > 0
                   ? myLottto.map((arr, i) => {
                        return (
                            <li key={i}>
                                {
                                   arr.map((num, c) => {
                                      return ( <div key={c} className="lobox">{num}</div> );
                                    })  
                                }
                            </li>
                        );
                     })  
                   : <div className='empty empty2'>이번주 1등은?!!</div>                  
                }
             </ul>
         </div>
     );
 }
 
export default Lotto;