import logo from './logo.svg';
import './App.css';
import AddCourse from './Components/AddCourse';
import { useState, useEffect } from "react";
import axios from 'axios';
import CourseDetails from './Components/CourseDetails'

// const [newdata, Setnewdata] = useState([])
// let url ="http://localhost:3000/Course"


// const getCourse=()=>{
//   return axios.get(`${url}`);
// }
// const process=(newvalues)=>{
//   return axios.post(`${url}`,newvalues)

// }

// useEffect(() => {
 
// getCourse().then((data) => {
//   Setnewdata(data.data)

// })
// },[newdata])

// const SaveData = (newvalues) => {
  
    
//  console.log(newvalues,"newvalues")
//   let value = newdata;
//   newvalues.notesId = newdata.length + 1;
//   .push(newvalues);
//   Setnewdata(value);
//   addNotes(newvalues).then((data) => {
 
// });

// }

function App() {
  return (
    <div className="App">
      <AddCourse/>
      <CourseDetails/>
    </div>
  );
}

export default App;
