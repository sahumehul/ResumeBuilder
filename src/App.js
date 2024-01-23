// import './App.css';
// import { Button, ButtonGroup,Checkbox } from "@mui/material";
// import { Favorite, FavoriteBorder } from "@mui/icons-material";
// import { Radio } from "@mui/material";
// import { useState } from "react";
// import { Slider } from "@mui/material";
import Nav from "./Nav";

function App() {
  // const [val,setVal] = useState([30,40])
  // const updateVal=(e,data)=>{
  //   setVal(e.target.value)
  // }
  // const mark = [
  //   {
  //     value:0,
  //     label: "start"
  //   },
  //   {
  //     value:50,
  //     label: "middle"
  //   },
  //   {
  //     value:100,
  //     label: "end"
  //   }
  // ]
 
  return (
    <div className="App" style={{width:"200px",margin:"40px"}}>
    {/* <Slider
      defaultValue={0}
      // marks={mark}
      step={10}
      max={100}
      valueLabelDisplay="auto"
      value={val}
      onChange={updateVal}
    /> */}
    
    <Nav/>
    </div>
  );
}

export default App;
