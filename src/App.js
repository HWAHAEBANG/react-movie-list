// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react"; 

function App() {
  const [counter, setValue] = useState(0);
  const [search, setSearch] = useState("");
  const onClick = () => setValue((prev) => prev + 1); 
  const onChange = (event) => setSearch((event.target.value))
  // console.log("I run all the time");
  
  useEffect(() => {
    console.log("CALL THE API..");
    console.log("I run only once.");
  }, []);
  
  useEffect(() => {
    if(search !=="" && search.length > 5){
      console.log("SEARCH FOR", search); 
      console.log("I run when 'search' changes.");
    }
  }, [search]);

  useEffect(() => {
    if(counter >= 1){
      console.log("COUNT UP!!");
      console.log("I run when 'counter'is clicked.");
    }
  }, [counter])


  useEffect(() => {
      console.log("I run when 'counter' is clicked & counter change");
  }, [counter, search])

  return (
    <div>
      <input value={search} onChange={onChange} type = "text" placeholder = "Search here..."/>
      <h1>{counter}</h1>
      <button onClick = {onClick}>click me</button>
    </div>
  ); 
}

export default App; 
