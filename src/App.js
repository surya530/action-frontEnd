import { useEffect, useState } from "react";
//import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

let [data , setData] = useState([]);

  console.log("code did by surya teja...");

  useEffect(()=>{
    axios.get('http://localhost:8001/data').then((res)=>{
      let {data} = res;
      setData(data.data);
    }).catch((err)=>{

    })
  })

  return (
    <div className="App">
        {
          data.map((e,index)=>{
              return(
                <p key={index}>name : {e.name} , age : {e.age}</p>
              )
          })
        }
    </div>
  );
}

export default App;
