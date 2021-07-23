import React from 'react'
import {useState, useEffect} from 'react';
import audio1 from '../sounds/red.mp3'
import audio2 from '../sounds/green.mp3'
import audio3 from '../sounds/yellow.mp3'
import audio4 from '../sounds/blue.mp3'
import audio5 from '../sounds/wrong.mp3'


const Game = () => {

  const [green,Setgreen]=useState(false);
  const [red,Setred]=useState(false);
  const [blue,Setblue]=useState(false);
  const [yellow,Setyellow]=useState(false);
  const [started,Setstarted]=useState(false);
  const [level,setlevel]= useState(1)
  const [pattern,setpattern]=useState([]);
  const [userpattern,setuserpattern]=useState([]);
  const [hea,sethea]=useState('SIMMON GAME');
    
  var buttoncolor=["red","blue","green","yellow"];
 
  const answering=(colour) => {
    if(started){
      var usercolor=colour;
      setuserpattern(userpattern.concat([usercolor]));
      animate(usercolor);
    }
  }
      
  useEffect(() => {
      checkAnswer(userpattern.length-1);
    },
  [userpattern]);
    
  const checkAnswer = (currentLevel) =>{
    if(currentLevel===-1){
      return;
    }
    
    if (pattern[currentLevel] === userpattern[currentLevel]) {
      if (userpattern.length === pattern.length){
        setTimeout(()=> {
          nextsequence();
        }, 700);
      }
    }
    else{ 
      sethea(`Game Over, You reached level ${level-1}`);
      playAudio5();
      startover();
    }
  }
    
  const nextsequence=() => {
    setuserpattern([]);
    setlevel(level+1);
    Setstarted(true);
    sethea(`Level ${level}`);
    var n=Math.random();
    n=n*4;
    n=Math.floor(n);
    var randomcolor=buttoncolor[n];
    setpattern(pattern.concat([randomcolor]));
    animate(randomcolor);
 }

  const animate=(color) => {
    if(color==='green') {
      Setgreen(true);
      setTimeout(function(){
        Setgreen(false);
      }, 100);
      playAudio2();
    }

    if(color==='red'){
      Setred(true);
      setTimeout(function(){
        Setred(false);
      }, 100);
      playAudio1();
    }

    if(color==='yellow'){
      Setyellow(true);
      setTimeout(function(){
        Setyellow(false);
      }, 100);
      playAudio3();
    }

    if(color==='blue'){
      Setblue(true);
      setTimeout(function(){
        Setblue(false);
      }, 100);
      playAudio4();
    }      
  }
    
  const playAudio1 = () => {
    new Audio(audio1).play();
  }
    
  const playAudio2 = () => {
    new Audio(audio2).play();
  }

  const playAudio3 = () => {
    new Audio(audio3).play();
  }

  const playAudio4 = () => {
    new Audio(audio4).play();
  }

  const playAudio5 = () => {
    new Audio(audio5).play();
  }

  const startover=() =>{
    setpattern([]);
    Setstarted(false);
    setlevel(1);
  }
    
  return (
    <div>
      <div className="level-title text-white bg-gray-500 text-5xl py-12">
        {hea}
      </div>
              
      <div className="grid grid-cols-2 px-20 py-10 place-items-center ">
        <div onClick={()=> {answering("red");}} className={red ?"btn red bg-gray-400 p-8 sm:p-20 rounded-3xl mb-8 border-8 border-black" : "btn red bg-red-600 p-8 sm:p-20 rounded-3xl mb-8 border-8 border-black"}>
        </div>

        <div onClick={()=> {answering("green");}} className={ green ?" btn green bg-gray-400 p-8 sm:p-20 rounded-3xl mb-8 border-8 border-black" :" btn green bg-green-600 p-8 sm:p-20 rounded-3xl mb-8 border-8 border-black"}>
        </div>
      
        <div onClick={()=> {answering("yellow");}} className={yellow ?" btn yellow bg-gray-400 p-8 sm:p-20 rounded-3xl mb-8 border-8 border-black" :"btn yellow bg-yellow-600 p-8 sm:p-20 rounded-3xl mb-8 border-8 border-black"}>              
        </div>

        <div onClick={()=> {answering("blue");}} className={blue ?" btn blue bg-gray-400 p-8 sm:p-20 rounded-3xl mb-8 border-8 border-black" :"btn blue bg-blue-600 p-8 sm:p-20 rounded-3xl mb-8 border-8 border-black"}>
        </div>
      </div>
            
      <button onClick={()=>{ nextsequence()}} className={started ?"hidden" : "inline-flex justify-center py-6 px-6 border border-transparent  text-2xl font-medium rounded-md text-white bg-green-600 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}>
        Start
      </button>
    </div>
  )
}

export default Game;
