/* eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '여자 모자 추천']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{글제목[0]} 
        <span onClick={ ()=> {따봉변경(따봉 + 1)}}>👍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div onClick={ () => modal변경(!modal)} className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      {
        modal === true
        ? <Modal />
        : null
      }
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
 /* 출처 : 코딩애플 - React 리액트 기초부터 쇼핑몰 프로젝트까지! */