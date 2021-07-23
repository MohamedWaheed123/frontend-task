import React from 'react'
import { useDispatch } from "react-redux";
import { setSearchBox } from "../redux/actions/usersActions";
import { Button } from 'semantic-ui-react'


const SearchBox=()=>{

  const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition=new SpeechRecognition();
  

  recognition.onstart=function(){
    alert('voice is activated, you can talk to microphone')
  }
   
  recognition.onresult=function(event){
    const content=document.querySelector('.content')
    const current=event.resultIndex;
    const transcript=event.results[current][0].transcript;
  
    
    if(transcript!=null)
    {
      content.value=transcript;
       dispatch(setSearchBox(transcript));
       
    }
  
  }
 
    const dispatch = useDispatch();
    const onSearchChange = (event) => {
        dispatch(setSearchBox(event.target.value));
      };
return(
    
     <>    
     <input 
     className='content'
     style={{
       width: "40%",
       boxSizing:"border-box",
       border:"2px solid #ccc",
       borderRadius:"4px",
       fontSize:"16px",
       backgroundColor:"white",
       padding:"12px 20px 12px 40px",
     }}  placeholder='Search...' onChange={onSearchChange} />
    
      <Button onClick={() => {recognition.start()}} floated='right' icon='microphone' size='big'   ></Button>

</>
   
);


}
export default SearchBox;