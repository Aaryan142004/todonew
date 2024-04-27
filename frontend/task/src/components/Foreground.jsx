import React, { useRef, useState ,useEffect} from 'react';
import Card from './Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Foreground() {
  
const navigate=useNavigate();
const[text,setText]=useState(" ")
  let cardData = " "
  const ref = useRef(null);
  const [taskName, setTaskName] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  

  
  useEffect(()=>{
       
    axios.get(`http://localhost:5000/todos`).then((res)=>{
     
      
      setTaskArray(res.data);

    
    }).catch((err)=>{
        console.log(err.message);
    })
    
},[]);




function handleTextChange(e){
  setTaskName(e.target.value);
}
const handleTaskAdd = async ()=>{
 
  axios.post(`http://localhost:5000/todos`,{
      data:taskName, 
  }).then((res)=>{
      
      
      setTaskArray([...taskArray,res.data.data.newTask]);
      console.log(taskArray)
  
  }).catch((err)=>{

  })

 
  
  setText(" ");

}




 
  return (
    
    <div ref={ref} className="fixed z-[3] w-full h-full flex gap-5 flex-wrap p-6">
  
      <div className="flex justify-center items-start mt-20 mb-60 ml-50">
        <input 
          type="text" 
          className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none"
          value={taskName}
          onChange={handleTextChange}
          placeholder="Enter task name"
        />
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={handleTaskAdd}
        >
          Add Task
        </button>
      </div>
    
      {taskArray.map((item, index) => {
      
       return <Card cardData = {item.taskName} id = {item.id}  key={index} data={item} reference={ref}  taskArray = {taskArray} setTaskArray = {setTaskArray}    /> 
})}

      
    
     
    </div>
  );
}

export default Foreground;
