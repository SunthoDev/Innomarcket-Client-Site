import React, { useState } from 'react'
import img1 from '../../../../assets/doodle.svg'
import './AdminDevelop.css'
import Swal from 'sweetalert2';



const AdminDeveloper = () => {

	  const [taskTitle, setTaskTitle] = useState("");
    const [devEmail, setdevEmail] = useState("");
    const [tskDescs, settskDescs] = useState("");
    const [taskLink, settaskLink] = useState("");
    const [dueDate, setdueDate] = useState("");

    const handleTaskTitle = (e) =>{
        setTaskTitle(e.target.value);
    }
    const handleDevEmail = (e) =>{
        setdevEmail(e.target.value);
    }
    const handleTaskDesc = (e) =>{
        settskDescs(e.target.value);
    }
    const handleTaskLink = (e) =>{
      settaskLink(e.target.value);
    }
    const handleTaskDueDate = (e) =>{
      setdueDate(e.target.value);
    }

	const handleTaskSubmit = (e) =>{
		e.preventDefault();
    //console.log(fname, lname, emails, projects, message);
   // let fName = "kamrul" , lName = "hasan", email = "ab@gmail.com", projectType = "Software", messages = "Hi am Riya";
    let tasksdata = {taskTitle, devEmail, tskDescs, taskLink, dueDate};
    console.log(tasksdata);
    fetch('http://localhost:5000/Tasksdata',{
      method:"POST",
      headers:{"content-type" : "application/json"},
      body:JSON.stringify(tasksdata)
     
    })
    .then(res=> res.json())
    .then(data=> {
      //console.log(data)
      if(data.insertedId){
        if(taskTitle == '' || devEmail == '' || tskDescs == ''){
          Swal.fire("please fill up the form correctly!");
        }
        else{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Task Assign to Developer Successfully',
            showConfirmButton: false,
            timer: 1500
          })        
          setTaskTitle("");
          setdevEmail("");
          settskDescs("");
          settaskLink("");
          setdueDate("");
        }
      }
    })
    
	}

  console.log(devEmail);

  return (
    <>
    <br /> <br />
<div className="bgcolors grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
	<div className="textAlign flex flex-col justify-space-around">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leadi lg:text-5xl">Task Assign!</h2>
			<div className="dark:text-gray-400">Task Assing to Developer.</div>
		</div>
		<img src={img1} alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form onSubmit={handleTaskSubmit} novalidate="" className="space-y-6">
		<div>
			<label for="name" className="text-sm">Task Title</label>
			<input value={taskTitle} required onChange={handleTaskTitle} id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
		</div>
		<div>
			{/* <label for="email" className="text-sm">Dev Email</label> */}
			{/* <input value={devEmail} required onChange={handleDevEmail} id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" /> */}
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
      <select onChange={handleDevEmail} id="countries" class="dev-txt bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option className='dev-txt' >Select Developer</option>
        <option className='dev-txt' value="mdkamrul2058@gmail.com">Kamrul Hasan</option>
        <option className='dev-txt' value="Shariful@gmail.com">Shariful Islam</option>
        <option className='dev-txt' value="emrul@gmail.com">Emrul Hasan</option>
        <option className='dev-txt' value="nazmul@gmail.com">Nazmul</option>
      </select>
    </div>
		<div>
			<label for="message" className="text-sm">Descriptin</label>
			<textarea value={tskDescs} required onChange={handleTaskDesc} id="message" rows="1" className="w-full p-1 rounded dark:bg-gray-400"></textarea>
		</div>
		<div>
			<label for="name" className="text-sm">Task Demo Link</label>
			<input value={taskLink} required onChange={handleTaskLink} id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
			<label for="name" className="text-sm">Due Date</label>
			<input value={dueDate} required onChange={handleTaskDueDate} id="name" type="date" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
		</div>
		<button type="submit" className="btncolors w-full p-3 text-sms font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900">Add Task</button>
	</form>
</div>

    </>
  )
}

export default AdminDeveloper