import React, { useEffect, useState } from 'react'




import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import SingleMessage from '../../../Messages/SingleMessage';
import './adminmessage.css'
const AdminMessage = () => {

  const [message, setMessage] = useState("");

  const handleMessage = (e) =>{
    setMessage(e.target.value);
  }
  //time
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();

const handleMessageSubmit = (e) =>{
  e.preventDefault();
  //console.log(fname, lname, emails, projects, message);
  let names = "Admin";
 let seen = false, possition = 'left-msg', times = hours + ":" + minutes
 let smsdata = {names, message, seen, possition, times};
  console.log(smsdata);
  fetch('http://localhost:5000/Messagedata',{
    method:"POST",
    headers:{"content-type" : "application/json"},
    body:JSON.stringify(smsdata)
   
  })
  .then(res=> res.json())
  .then(data=> {
    //console.log(data)
    if(data.insertedId){
      console.log("succes");
    }
  })

  setMessage("");
}


  let { refetch, data: messages = [] } = useQuery(["messages"], async () => {
    let res = await fetch("http://localhost:5000/messages");
    return res.json()
  })


useEffect(() =>{

    console.log("msg called");
}, [message])

  return (
    <>
    <section class="msger">
  <header class="msger-header">
    <div class="msger-header-title">
      <i class="fas fa-comment-alt"></i> Conversation
    </div>
    <div class="msger-header-options">
      <span><i class="fas fa-cog"></i></span>
    </div>
  </header>

  <main class="msger-chat">

    {
       messages.map(({names, message, seen, possition, times})=>{
        if(possition === 'right-msg') possition = 'left-msg'
        else possition = 'right-msg';
          return <SingleMessage names={names} msg={message} msgPosition={possition} timezoon={times}/>
       })
    }

  </main>

  <form onSubmit={handleMessageSubmit} class="msger-inputarea">
    <input onChange={handleMessage} value={message} type="text" class="msger-input" placeholder="Enter your message..."/>
    <button type="submit" class="msger-send-btn">Send</button>
  </form>
</section>
    </>
  )
}

export default AdminMessage