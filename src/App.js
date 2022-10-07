// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect} from "react"; 

function Hello(){
  // 방법1
  //   useEffect(()=>{
  //   console.log('created :>');
  //   return() => console.log("destroyed :<");
  // }, [])
  // return <h1>Hello</h1>;

  // 방법2 : 함수를 미리 다 만들어 놓고 호출해서 쓰기
  // function byeFn(){
  //   console.log("bye :<");
  // }

  // function hiFn(){
  //   console.log("created :>");
  //   return byeFn;
  // }

  // useEffect(hiFn,[]);
  // return <h1>Hello</h1>;

  // 방법3 : 익명함수를 사용하여 짧게 나타내기
  // useEffect(function(){
  //   console.log("hi :>");
  //   return function () {
  //     console.log("bye :<");
  //   };
  // }, []); 
  // return <h1>Hello</h1>;

  // 방법4 : 익명함수를 arrow function으로 바꾸어 더 짧게 나타내기
  useEffect(()=>{
    console.log("hi :>");
    return () => console.log("bye :<");
  },[])
  return <h1>Hello</h1>;
}



function App() {
 const [showing, setShowing] = useState(false);
 const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing? <Hello/> : null}
      <button onClick = {onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  ); 
}

export default App; 
