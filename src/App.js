/* eslint-disable */
import React, {useState} from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '여자 모자 추천']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {
        글제목.map(function(글,index)
        {
          return(
            <div onClick={ () => modal변경(!modal)} className="list">
              <h3 onClick={ () => 누른제목변경(index) }>{글}<span onClick={ ()=> {like(index)}}>👍</span>{따봉[index]}</h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
          );
        })
      }
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목} />
        : null
      }
    </div>
  );
  function like(index)
  {
    var newLike = 따봉;
    newLike[index]++;
    따봉변경(newLike);
  }
}

function Modal(props){
  return(
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
 /* 출처 : 코딩애플 - React 리액트 기초부터 쇼핑몰 프로젝트까지! */